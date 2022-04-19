const { dependencies } = require("./package.json");

module.exports = {
  name: "employee",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header.js",
    "./Employee": "./src/pages/Employee.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
