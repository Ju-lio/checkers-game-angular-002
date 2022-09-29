  1 Configurar eslint:
    ng add @angular-eslint/schematics

  2 Instalar o prettier:
    npm install prettier --save-dev

  3 Criar o arquivo
    .prettierrc.json na raiz do projeto

  4 Criar o arquivo
    .prettierignore
    
  5 Copiar o conteúdo do arquivo .gitignore e colar no arquivo .prettierignore
  
  6 Configurar o prettier como plugin do eslint: npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev

{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}

"plugin:prettier/recommended"