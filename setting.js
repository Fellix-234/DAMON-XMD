// settings.js - SINGLE SOURCE CONFIG (NO .env)

const Settings = {
  // BOT CORE
  BOT_NAME: "Damon-XMD",
  PREFIX: ".",
  MODE: "private",

  // SESSION (users paste here directly)
  SESSION_ID: "DAMON-XMD~PASTE_SESSION_HERE",

  // OWNER INFO
  OWNER: {
    NUMBER: "254725391914",
    NAME: "Warrior Felix"
  },

  // DESCRIPTION
  DESCRIPTION: "multi-device bot by Warrior Felix",

  // TIMEZONE
  TIMEZONE: "Africa/Nairobi",

  // FEATURES
  FEATURES: {
    AUTO_TYPING: false,
    AUTO_RECORDING: false,
    AUTO_READ: true
  },

  // REACTIONS
  REACTIONS: {
    EMOJIS: ["💖", "💗", ❤️", "💛", "💚", "💙", "💜", "🤍"]
  },

  // SYSTEM
  SYSTEM: {
    PORT: 3000
  }
};

module.exports = Settings;
