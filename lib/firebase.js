const firebase = require('firebase');

const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const originalPrivateKey = privateKey.replace(/\\n/g, '\n');

function client() {
  firebase.initializeApp({
    serviceAccount: {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: originalPrivateKey
    },
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      canAddTasks: true,
      canProcessTasks: true,
      canAddSpecs: true
    }
  });
  return firebase;
}

function server() {
  firebase.initializeApp({
    serviceAccount: {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: originalPrivateKey
    },
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      canAddTasks: true,
      canProcessTasks: true,
      canAddSpecs: true
    }
  });
  return firebase;
}

module.exports.client = client;
module.exports.server = server;
