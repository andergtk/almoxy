'use strict';

module.exports = (format) => {
  format = format || '%title% - %base%';

  return (req, res, next) => {
    res.title = (title) => {
      title = format.replace(/%title%/ig, title || 'Sem título');
      title = title.replace(/%base%/ig, req.app.get('title'));
      res.locals.title = title;

      return this;
    }

    next();
  }
}
