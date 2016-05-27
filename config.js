'use strict';

module.exports = {
  env: process.env.ENVIRONMENT || 'production'
, port: process.env.PORT || 3000
, dbUri: 'mongodb://localhost/almoxy'
, cookieSecret: '2aEhAr5doPVwiCkdLGx8pcG5jTvmPodY2eM3SmbMc4xgNzgp'
, sessionSecret: 'oU44aFlsXMtwpgzrKklBdmpfYQOeKBerUONsQXcShQhwMuvg'
}
