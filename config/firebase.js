// Your web app's Firebase configuration
var firebase=require('firebase');
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};    
function app_fireBase() {
    firebase.initializeApp(firebaseConfig) ;
    return firebase
}
var app=null;

exports.firebase_app=()=>{
    if(app==null)
        app=app_fireBase();
    return app;
}
