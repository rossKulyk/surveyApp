const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("createProxyMiddleware: ", createProxyMiddleware);

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5001",
    })
  );
};
