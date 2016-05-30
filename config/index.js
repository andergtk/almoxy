module.exports = {
  env: process.env.NODE_ENV || 'production'
, port: process.env.PORT || 3000
, cookie_secret: '2aEhAr5doPVwiCkdLGx8pcG5jTvmPodY2eM3SmbMc4xgNzgp'
, session_secret: 'oU44aFlsXMtwpgzrKklBdmpfYQOeKBerUONsQXcShQhwMuvg'
, db: {
    uri: 'mongodb://localhost/almoxy'
  }
}
