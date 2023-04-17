const runApp = require('./view');

runApp()
  .then((server) => {
    console.log('Server started successfully');
  })
  .catch((error) => {
    console.error('Error starting server:', error);
  });
