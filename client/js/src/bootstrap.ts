import "regenerator/runtime";

import "jquery";
import "bootstrap";

if (process.env.NODE_ENV !== "production") {
  if (process.env.BROWSER_SYNC_SNIPPETS !== "undefined") {
    (<string[]>process.env.BROWSER_SYNC_SNIPPETS).forEach(s => {
      document.write(`<script src="${s}"></script>`);
    });
  }
}
