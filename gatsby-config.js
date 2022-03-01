module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // blogディレクトリからファイルを「ソース」する設定を記述している
    // （言い換えれば、データレイヤーにファイルを追加する設定を記述している）
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // フォルダの識別子を設定する
        name: `blog`,
        // build時にpath オプションで指定されたフォルダにあるすべてのファイルをデータ層に追加します。
        // __dirname は Node.js の変数で、現在実行されているファイル(gatsby-config.js?)を含むディレクトリの絶対パスを格納します
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
