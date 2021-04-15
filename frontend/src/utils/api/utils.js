const urljoin = require("url-join");

export const apiServer = "http://localhost:8001/";

export function getUrl(...args) {
  return urljoin(apiServer, ...args)
}