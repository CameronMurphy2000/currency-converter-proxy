const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

const options = {
    target:'https://v6.exchangerate-api.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
};

const exampleProxy = createProxyMiddleware(options);

app.use('/api', exampleProxy);

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
