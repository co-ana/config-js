module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@angular-eslint"],
  "rules": {
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/contextual-lifecycle": "error",
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/no-empty-lifecycle-method": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    "@angular-eslint/use-lifecycle-interface": "warn"
  },
  "overrides": [
    /**
     * -----------------------------------------------------
     * TYPESCRIPT FILES (COMPONENTS, SERVICES ETC) (.ts)
     * -----------------------------------------------------
     */
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        // This is required if you use inline templates in Components
        "plugin:@angular-eslint/template/process-inline-templates"
      ],

      rules: {
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

    /**
     * -----------------------------------------------------
     * COMPONENT TEMPLATES
     * -----------------------------------------------------
     */
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
};
