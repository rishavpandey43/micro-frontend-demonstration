const { dependencies } = require("./package.json");

module.exports = {
  name: "employer",
  remotes: {
    employee: "employee@http://localhost:3000/remoteEntry.js",
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
