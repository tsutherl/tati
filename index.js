'use strict';

const express = require('express')
const app = express();
const path = require('path')
const nunjucks = require('nunjucks')

nunjucks.configure('views', { noCache: true })

module.exports = app

  .set('view engine', 'html')
  .engine('html', nunjucks.render)


  // Serve static files from ../public
  .use(express.static(path.join(__dirname, '/public')))

  // Send index.html for all requests
  .get('*', (req, res) => res.status(200).render('index.html'))

  .listen(1337, () => console.log('Server listening on port', 1337))