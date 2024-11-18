
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": [2, 3],
    "@typescript-eslint/quotes": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "promise/param-names": "off",
    "react/jsx-indent": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "react/display-name": "off"
  },
};
