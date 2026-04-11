const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AdmZip = require('adm-zip');
const { spawn } = require('child_process');

// === CONFIGURATION ===
const repoZipUrl = 'https://github.com/Fellix-234/KLAUS-MD/archive/refs/heads/main.zip';

// === Persistent extraction path ===
const extractionPath = path.join(__dirname, '.npm_pkg');
const versionFile = path.join(extractionPath, '.version');
const repoFolder = path.join(extractionPath, 'repo');

function botFilesExist() {
    return fs.existsSync(path.join(repoFolder, 'index.js'));
}

async function downloadAndExtractRepo() {
    try {
        const response = await axios.get(repoZipUrl, { responseType: 'arraybuffer' });
        const zipBuffer = Buffer.from(response.data);

        if (!fs.existsSync(extractionPath)) fs.mkdirSync(extractionPath, { recursive: true });
        if (fs.existsSync(repoFolder)) fs.rmSync(repoFolder, { recursive: true, force: true });
        fs.mkdirSync(repoFolder, { recursive: true });

        const zip = new AdmZip(zipBuffer);
        zip.extractAllTo(repoFolder, true);

        const extractedFolders = fs.readdirSync(repoFolder).filter(f =>
            fs.statSync(path.join(repoFolder, f)).isDirectory()
        );
        if (extractedFolders.length > 0) {
            const subFolder = path.join(repoFolder, extractedFolders[0]);
            const files = fs.readdirSync(subFolder);
            for (const file of files) {
                fs.renameSync(path.join(subFolder, file), path.join(repoFolder, file));
            }
            fs.rmdirSync(subFolder);
        }

        fs.writeFileSync(versionFile, Date.now().toString());
        return true;
    } catch {
        return false;
    }
}

async function prepareBot() {
    if (!botFilesExist() || !fs.existsSync(versionFile)) {
        await downloadAndExtractRepo();
    }
}

function installDependencies() {
    const nodeModulesPath = path.join(repoFolder, 'node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
        const { execSync } = require('child_process');
        try {
            execSync('npm install --production', { cwd: repoFolder, stdio: 'ignore' });
        } catch (e) {}
    }
}

function copyLocalConfig() {
    const localConfig = path.join(__dirname, 'setting.js');
    const botConfig = path.join(repoFolder, 'setting.js');
    if (fs.existsSync(localConfig)) {
        fs.copyFileSync(localConfig, botConfig);
    }
}

function runBot() {
    const botIndex = path.join(repoFolder, 'index.js');
    if (!fs.existsSync(botIndex)) process.exit(1);

    const botProcess = spawn('node', [botIndex], {
        cwd: repoFolder,
        stdio: 'inherit',
        env: process.env
    });

    botProcess.on('error', () => process.exit(1));
    botProcess.on('close', (code) => process.exit(code));
}

(async () => {
    console.log('KLAUS MD starting...');
    await prepareBot();
    installDependencies();
    copyLocalConfig();
    runBot();
})();
