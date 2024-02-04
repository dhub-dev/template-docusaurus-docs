import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '60f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c00'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'eee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6e4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '556'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '297'),
    exact: true
  },
  {
    path: '/about-page',
    component: ComponentCreator('/about-page', 'ae2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '298'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '402'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '0fc'),
            routes: [
              {
                path: '/category/using-docusaurus',
                component: ComponentCreator('/category/using-docusaurus', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/versions-and-translations',
                component: ComponentCreator('/category/versions-and-translations', '7ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-advanced/manage-docs-versions',
                component: ComponentCreator('/tutorial-advanced/manage-docs-versions', 'af9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-advanced/translate-your-site',
                component: ComponentCreator('/tutorial-advanced/translate-your-site', '28a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', '58e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '96c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
