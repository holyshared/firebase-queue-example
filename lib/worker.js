const firebase = require('./firebase');
const Queue = require('firebase-queue');

const ref = firebase.database().ref('queue');
const queue = new Queue(ref, (data, progress, resolve, reject) =>　{
  // Read and process task data
  console.log(data);

  // Do some work
  progress(50);

  // Finish the task asynchronously
  setTimeout(function() {
    resolve();
  }, 1000);
});
