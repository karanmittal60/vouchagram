import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from "./store";
import serialize from 'serialize-javascript';



const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {
        const context = {};

        const data = {};
        // Compile an initial state
        const preloadedState = { data };

        // Create a new Redux store instance
        const store = configureStore(preloadedState);

        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.url}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        // Grab the initial state from our Redux store
        const finalState = store.getState();

        if (context.url) {
            res.redirect(context.url);
        } else {
            res.status(200).send(
                `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <script src="js/owl.carousel.min.js"></script>
        <link rel="stylesheet" href="css/owl.carousel.min.css">
        <link rel="stylesheet" href="css/owl.theme.default.min.css">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <link rel="stylesheet" href="owl-carousel/owl.theme.css">
        ${
                    assets.client.css
                        ? `<link rel="stylesheet" href="${assets.client.css}">`
                        : ''
                }
        ${
                    process.env.NODE_ENV === 'production'
                        ? `<script src="${assets.client.js}" defer></script>`
                        : `<script src="${assets.client.js}" defer crossorigin></script>`
                }
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
    </html>`
            );
        }
    });

export default server;
