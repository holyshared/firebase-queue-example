const firebase = require('./firebase').client();
const ref = firebase.database().ref('queue/tasks');

ref.push({
  'foo': 'bar'
});
