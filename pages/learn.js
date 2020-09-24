import React from 'react';
import Layout from 'components/layout';
import Html from 'components/html';
import Sticky from 'components/sticky';
import { getMarkdownContent } from 'lib/content';

export default function Learn({ content }) {
  return (
    <Layout>
      <section id="learn" className="row">
        <div className="menu col-12 col-md-3 col-lg-2">
          <Sticky className="sticky">
            <Html>{content.menu}</Html>
          </Sticky>
        </div>
        <div className="content col-12 col-md-9 col-lg-10">
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
  const { about, install, ...rest } = await getMarkdownContent();

  return {
    props: {
      content: { ...rest },
    },
  };
}
