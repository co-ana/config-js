# ESlint for Angular

A set of configs recommended by our organization for Angular applications.

Built with https://github.com/angular-eslint/

> Quite simply, this enables all the possible rules from @angular-eslint/eslint-plugin.

> It is strongly encouraged to combine the recommended Angular rules with the recommended configs from typescript-eslint (https://typescript-eslint.io/linting/configs/#recommended-configurations), and this is what our schematics will generate for you automatically.

## Install

### ⚠️Editing and override the rules
Since the lib is following Angular official recommendations, we higly recommend you DON'T do this.

### eslint-config-angular
1. You can install a package from GitHub Packages using any supported package client by following the same general guidelines.
2. Authenticate to GitHub Packages using the instructions for your package client. For more information, see "[Introduction to GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)"
3. Install the package as dev dependency by running `npm i --save-dev @co-ana/eslint-config-angular@latest`

### eslint
1. Install eslint package by running `npm i --save-dev eslint@latest`
2. Create a config file (`.eslintrc.json`) at the same level of app's `package.json` file
3. Add rules and extend `eslint-config-angular` package.

E.g. for `.eslintrc.json` file:
```json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "parser": "@typescript-eslint/parser",
  "extends": [
    "@co-ana/eslint-config-base",
    "@co-ana/eslint-config-angular"
  ],
  "overrides": [
    {
      "files": ["*.ts"],
      "rules": {
        /**
         * Any TypeScript source code (NOT TEMPLATE) related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         */
        "@angular-eslint/directive-selector": [
          "error",
          { "type": "attribute", "prefix": "app", "style": "camelCase" }
        ],
        "@angular-eslint/component-selector": [
          "error",
          { "type": "element", "prefix": "app", "style": "kebab-case" }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      "rules": {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         */
      }
    }
  ]
}
```
