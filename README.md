### Scripts:
- Para instalar los modulos:    npm install
- Para correr el proyecto:      npm run dev
- Para correr los test:         npm run test
- Para compilar el proyecto:    npm run build
- Para instalar los prop-types: npm install prop-types
----------
### Para realizar los test
- npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react 
- npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
- Si es que usamos FetchAPI en la app: 
  - npm install --save-dev whatwg-fetch 
- Agregar al package.json:
    ```Json
    "scripts": {
        ...
        "test": "jest --watchAll"
    }
    ```
- Crear configuración de Babel en babel.config.cjs con:
    ```JavaScript
    module.exports = {
        presets: [
            [ '@babel/preset-env', { targets: { esmodules: true } } ],
            [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    };
    ```
- Crear configuración de Jest en jest.config.cjs con:
    ```JavaScript
    module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    };
    ```
- Crear setup de jest en jest.setup.js ( en caso de usar FetchAPI ) con:
    ```JavaScript
    import 'whatwg-fetch';
    ```