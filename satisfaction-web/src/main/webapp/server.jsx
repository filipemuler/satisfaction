import express from 'express';

import { renderToString }        from 'react-dom/server'
import App from './client/App'

const app = express();

app.use((req, res) => {

  const x = (
    <App />
  );
const bla = renderToString(x);

  const HTML = `
  <html lang="en">
      <head>
          <meta charset="utf-8">
          <title>App</title>
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
          <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" type="text/css" />
          <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap-theme.css" type="text/css" />
          <link rel="stylesheet" href="mbr/mbr.css" type="text/css" />
      </head>
      <body data-context-path="">baba
          <div id="app">${x}</div>
          <script src="./mbr/bundle.js"></script>
      </body>
  </html>
  `;

  res.end(HTML);
});

export default app;
