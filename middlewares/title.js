'use strict';

module.exports = (format) => {
  format = format || '%title% - %base%';

  return (req, res, next) => {
		res.locals.name = req.app.get('name');

    res.title = (title) => {
			res.locals.pageTitle = title || 'Sem título';

      title = format.replace(/%title%/ig, title || 'Sem título');
      title = title.replace(/%base%/ig, req.app.get('title'));
      res.locals.title = title;
      return this;
    }
    next();
  }
}
