require('./babel');

import Express from 'express';

let app = Express();

/* Points */
app.use('*', chunkRouter.router);


/* Run */
app.listen(serverConfig.expressPort, function() {
  console.log('\nExpress server run on port ' + serverConfig.expressPort);
});
