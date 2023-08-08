module.exports = {
  env: {
    browser: true,
  },
  extends: ["react-app", "react-app/jest"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
