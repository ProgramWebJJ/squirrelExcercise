module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "indent": ["warn", 2, { "SwitchCase": 1 }],
      "linebreak-style": ["error", "windows"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": "warn",
      "no-var":"error",
      "no-undef": 0,
          "no-alert": "error",
          "curly": "error",
          "space-before-blocks": ["warn", "always"],
          "no-loop-func": "error",
          "key-spacing": ["warn", {"beforeColon": false, "afterColon": true}]
        }
}
