const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida para los archivos generados
    filename: 'bundle.js' // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regla para archivos JavaScript y JSX
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar el código
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets para compatibilidad con versiones de ECMAScript y React
          }
        }
      },
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ['style-loader', 'css-loader'] // Usar style-loader y css-loader para cargar y aplicar estilos
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Plantilla HTML de entrada
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones de archivos que webpack tratará automáticamente como módulos
    fallback: {
      "fs": false,
      "stream": false
    }
  },
  devServer: {
    contentBase: './dist', // Directorio base para el servidor de desarrollo
    port: 3000, // Puerto del servidor de desarrollo
    open: true // Abre automáticamente el navegador cuando se inicia el servidor de desarrollo
  }
};
