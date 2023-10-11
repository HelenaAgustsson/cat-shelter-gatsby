import React from 'react';
import "./src/styles/global.css"
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import '@contentful/live-preview/style.css';

export const wrapRootElement = ({ element }) => (
  <ContentfulLivePreviewProvider locale="en-UK">{element}</ContentfulLivePreviewProvider>
);

