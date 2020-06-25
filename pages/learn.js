import React from 'react';
import Layout from 'components/layout';
import Html from 'components/html';
import { getMarkdownContent } from 'lib/content';

export default function Learn({ content }) {
  return (
    <Layout>
      <section id="learn">
        <div className="menu">
          <Html>{content.menu}</Html>
        </div>
        <div className="content">
          <Html>{content.routing}</Html>
          <Html>{content.extending}</Html>
          <Html>{content.overriding}</Html>
          <Html>{content.filtering}</Html>
          <Html>{content.variables}</Html>
          <Html>{content.views}</Html>
          <Html>{content.errorhandling}</Html>
          <Html>{content.redirects}</Html>
          <Html>{content.requests}</Html>
          <Html>{content.stopping}</Html>
          <Html>{content.httpcaching}</Html>
          <Html>{content.json}</Html>
          <Html>{content.configuration}</Html>
          <Html>{content.frameworkmethods}</Html>
          <Html>{content.frameworkinstance}</Html>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getMarkdownContent();

  return {
    props: {
      content,
    },
  };
}
