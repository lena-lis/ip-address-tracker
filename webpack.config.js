const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js/index.js'), 
  entry: { // Точка входа для сборки проекта
    main: path.resolve(__dirname, 'src', 'js/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    clean: true, // Очищение папки 'dist'
    filename: 'js/[name].[contenthash].js', // Имя выходного файла сборки
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name][ext]`;
    }, // сохраняет исходную структуру папок
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ],
      },
    ],
  },
  
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
      ],
    }),
    new HtmlWebpackPlugin({
      template:'src/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};