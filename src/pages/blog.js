import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// クエリの実行結果のdataフィールドのオブジェクトがdataプロティに渡される
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

// graphqlでgatsbyが文字列をクエリと認識できるようテンプレート文字列(?)に変換している
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
