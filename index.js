const compression = require('compression');
const express = require('express');
const path = require('path');
const requireHttps = require('./require-https')
const PORT = process.env.PORT || 5000;

express()
	.set('x-powered-by', false)
	.use(compression())
	.set('trust proxy', true)
	.use(requireHttps)
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));