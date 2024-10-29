{
    "env"
:
    {
        "browser"
    :
        true, "es2021"
    :
        true
    }
,
    "extends"
:
    ["airbnb", "airbnb-typescript", "prettier", "eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"], "plugins"
:
    ["@typescript-eslint", "prettier", "react"], "parserOptions"
:
    {
        "ecmaVersion"
    :
        "latest", "sourceType"
    :
        "module"
    }
,
    "rules"
:
    {
        "prettier/prettier"
    :
        "error", "indent"
    :
        ["off", 2], "react/jsx-indent"
    :
        ["error", 2], "react/jsx-indent-props"
    :
        ["error", 2], "linebreak-style"
    :
        ["error", "unix"], "quotes"
    :
        ["error", "double"], "semi"
    :
        ["error", "never"], "prefer-destructuring"
    :
        ["error", {"object": true, "array": false}], "no-unused-vars"
    :
        "error", "import/prefer-default-export"
    :
        "off", "arrow-body-style"
    :
        "off", "react/function-component-definition"
    :
        "off", "react/prop-types"
    :
        "off", "react/no-array-index-key"
    :
        "off", "no-nested-ternary"
    :
        "off", "class-methods-use-this"
    :
        "off", "react/require-default-props"
    :
        "off", "react/jsx-props-no-spreading"
    :
        "off", "no-param-reassign"
    :
        "off", "no-underscore-dangle"
    :
        "off", "jsx-a11y/no-static-element-interactions"
    :
        "off", "jsx-a11y/click-events-have-key-events"
    :
        "off", "react/jsx-no-useless-fragment"
    :
        "off", "import/no-extraneous-dependencies"
    :
        ["error", {"devDependencies": true}], "react/display-name"
    :
        "off"
    }
,
    "overrides"
:
    [{
        "files": ["*.ts", "*.tsx"],
        "extends": ["plugin:@typescript-eslint/recommended"],
        "plugins": ["@typescript-eslint"],
        "parserOptions": {
            "project": ["./tsconfig.json", "./tsconfig.jest.json"]
        },
        "rules": {
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/lines-between-class-members": "off"
        }
    }]
}