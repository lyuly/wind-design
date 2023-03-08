/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc';

import Component404 from './404';

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}>Wind Design</div>,
  topNavs: [
    {
      label: '首页',
      path: '/',
      activeIfMatch: {
        // match all first-level paths
        path: '/:foo',
        end: true,
      },
    },
    {
      label: '组件',
      path: '/components/Button',
      activeIfMatch: '/components',
    },
    { label: 'Github', href: 'https://github.com/lyuly/wind-design' },
  ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          demos: {
            label: 'Demos (dev only)',
            order: -1,
          },
          general: {
            label: 'General',
            order: 1,
          },
          'data-display': {
            label: 'Data Display',
            order: 2,
          },
        },
      },
    });
  },
  Component404,
});
