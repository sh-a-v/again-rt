console.log('RUN SERVER');

import Express from 'express';
import path from 'path';

import config from '../config';

let app = Express();

/* Points */
let pointRouter = Express.Router();
let template = path.join(__dirname, '../client', `index.html`);

pointRouter.get('*', function(req, res) {
  res.sendFile(template);
});

app.use('*', pointRouter);


/* Run */
app.listen(config.expressPort, function() {
  console.log(`Express server run on port ${config.expressPort}`);
});
