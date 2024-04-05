---
sidebar_position: 1
slug: /
---

# Getting started

This template is meant for creating a documentation website. Before we begin, checkout out how this website looks on the web.

:::note

Open this project on the web: [template-docusaurus-docs.dhub.dev](https://template-docusaurus-docs-z7f5.vercel.app)

:::

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Read the [**Deployment Guide**](https://docusaurus.io/docs/deployment).

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
