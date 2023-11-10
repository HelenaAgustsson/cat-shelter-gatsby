import React from 'react';
import "./src/styles/global.css"
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import '@contentful/live-preview/style.css';

import Layout from './src/components/layout/layout';

// export const wrapRootElement = ({element}) => <Layout>{element}</Layout>


export const wrapRootElement = ({ element }) => (
  <ContentfulLivePreviewProvider locale="en-UK">{element}</ContentfulLivePreviewProvider>
);

