import { API } from '@stoplight/elements';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ApiPage = () => {
  return (
    <Layout>
      <SEO title="Zoom API" />

      <API
        basePath="zoom-api"
        apiDescriptionUrl="https://raw.githubusercontent.com/interserver/mailbaby-api-spec/master/swagger.yaml"
        router={typeof window === 'undefined' ? 'memory' : 'history'}
      />
    </Layout>
  );
};

export default ApiPage;
