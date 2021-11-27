import { ReadAParticipe,ReadEstChoisi } from './bdd.js';

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJUUbbAAruvf_qgn4uCv0QrP2Gu35bqwE",
    authDomain: "santa-secret-b9e86.firebaseapp.com",
    databaseURL: "https://santa-secret-b9e86.firebaseio.com",
    projectId: "santa-secret-b9e86",
    storageBucket: "santa-secret-b9e86.appspot.com",
    messagingSenderId: "778056198175",
    appId: "1:778056198175:web:1ca928cd17e2c6e8cf8d2a"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
ReadAParticipe(db);
$('#choose-button').click(function(){
    ReadEstChoisi(db);
});
//ReadEstChoisi(db);

runTree();
launchPrompt();