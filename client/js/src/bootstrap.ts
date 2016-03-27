import "regenerator/runtime";

import "jquery";
import "bootstrap";

if (process.env.NODE_ENV !== "production") {
  if (process.env.BROWSER_SYNC_SNIPPETS !== "undefined") {
    (<{ port: number, path: string}[]>process.env.BROWSER_SYNC_SNIPPETS).forEach(s => {
      let { protocol, hostname } = window.location;
      let { port, path } = s;
      document.write(`<script src="${protocol}//${hostname}:${port}${path}"></script>`);
    });
  }
}
