# The Cat Shelter

This is a site I have developed for my portfolio, created using [Gatsby](http://gatsbyjs.com/) and [Contentful](https://www.contentful.com) and deployed with [Netlify](https://www.netlify.com/): 

https://helenas-cat-shelter.netlify.app/

## Features

- Gatsby SSG
- Contentful headless CMS
- Decoupled web architecture
- Written in React/JavaScript
- Unit testing with Jest and RTL


## Set up

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.


## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
