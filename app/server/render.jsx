import { renderToString } from 'react-dom/server';

export default componentHTML => `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>REACTION</title>
      </head>
      <body>
        <div id="app">${renderToString(componentHTML)}</div>
        <script type="text/javascript" src="/dist/vendor.client.js"></script>
        <script type="text/javascript" src="/dist/client.js"></script>
        </body>
        </html>`;
