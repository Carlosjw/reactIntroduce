const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // vai ser usado com o Node, por isso o module.exports
  // mode: "production", // já estamos passando no package.json
  entry: "./src/index.js", // ponto de entrada: onde o webpack vai pegar o arquivo para montar toda a sua árvore
  output: {
    path: path.resolve(__dirname, "dist"), // __dirname: diretório raiz do projeto
    // vai gerar uma pasta chamada 'dist', por conversão (poderia ser qualquer nome)
    filename: "bundler.js", // arquivo final que vai ser empacotado no projeto e enviado para produção
  },
  module: {
    rules: {
      test: /\.(js|jsx)$/, // quais tipos de arquivos serão interpretados
      exclude: /node_modules/, // que arquivos serão excluídos
      use: {
        loader: "babel-loader", // qual loader será utilizado pelo webpack para a transpilação
      },
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
