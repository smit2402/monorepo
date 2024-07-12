const updatedConfig = require("@monorepo/configs/tailwind/tailwind.config");

updatedConfig.content = ["./app/**/*.{js,ts,jsx,tsx}"];

module.exports = updatedConfig;
