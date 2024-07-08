const updatedConfig = require("@monorepo/configs/tailwind/tailwind.config");

updatedConfig.content = ["./src/**/*.{js,ts,jsx,tsx}"];

module.exports = updatedConfig;
