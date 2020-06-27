import React from 'react';
import Layout from 'components/layout';
import Html from 'components/html';
import { getMarkdownContent } from 'lib/content';

export default function Home({ content }) {
  return (
    <Layout>
      <Html>{content}</Html>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getMarkdownContent();

  return {
    props: {
      content: content.about,
    },
  };
}
