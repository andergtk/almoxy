'use strict';

exports = module.exports = title;

/**
 * Gerencia o título do sistema.
 */
function title() {
  const format = '%title% - %base%';

  return (req, res, next) => {
		res.locals.name = req.app.get('name') || 'Sem nome';
    res.title = (title) => {
      title = title || 'Sem título';
      res.locals.pageTitle = title;
      res.locals.title = format.replace(/%title%/ig, title);
      res.locals.title = res.locals.title.replace(/%base%/ig, req.app.get('name'));
    }
    next();
  }
}
