const urljoin = require("url-join");

export const apiServer = "http://194.58.92.212:8001/";

export function getUrl(...args) {
  return urljoin(apiServer, ...args)
}