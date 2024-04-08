---
sidebar_position: 1
slug: /
---

# Introduction

Welcome to the Dhub Docusaurus 3 documentation template, your launching pad for documentation projects. This template guides you through using Dhub to edit your website's content and deploying your documentation website online.

Preview the template at this URL: [template-docusaurus-docs.dhub.dev](http://template-docusaurus-docs.dhub.dev)

![](/img/isr.webp)

## Getting started

Here's everything you need to know about how to get started with a new project with Dhub.

1. Every md/mdx file you see on the left side navigation represents a page on your documentation.
2. Creating a new markdown file will create a new page on your website
3. If you have GitHub CI set up, every time you push changes to GitHub, they will automatically appear on the web.

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
