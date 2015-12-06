import Express from 'express';

import localesHandler from '../tools/locales-handler';

let localeRouter = Express.Router();

localeRouter.get('/:locale', async (req, res) => {
  let localeJson = await localesHandler.getLocale(req.params.locale);
  res.json(localeJson);
});

export default localeRouter;
