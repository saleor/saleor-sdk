module.exports = {
  "extends": [
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc"
  ],
  "rules": {
    "tsdoc/syntax": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
