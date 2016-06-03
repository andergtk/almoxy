'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'production'
, port: process.env.PORT || 3000
, db: {
    uri: 'mongodb://localhost/almoxy'
  }
, secret: {
    cookie: '2aEhAr5doPVwiCkdLGx8pcG5jTvmPodY2eM3SmbMc4xgNzgp'
  , session: 'oU44aFlsXMtwpgzrKklBdmpfYQOeKBerUONsQXcShQhwMuvg'
  }
}
