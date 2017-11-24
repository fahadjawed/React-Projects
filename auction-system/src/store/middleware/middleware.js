import Action  from'../actions/actions'
import {
    BrowserRouter as Router,
    Route,
    Link
    
  } from 'react-router-dom'
  import * as firebase from 'firebase'
import '../../config/fbconfig'  
export default class Middleware{
    static signin(data){
        return (dispatch)=>{
            firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((user)=>{
                dispatch(Action.Signin(user))
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ...
              });
            

        }
    }
    static signout(){
        return (dispatch)=>{
            firebase.auth().signOut().then(()=>{
                dispatch(Action.Signout())
            })
        }
    }
    static signup(data){
        var urll ;
        return(dispatch)=>{
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((user)=>{
                user.updateProfile({
                    phoneNumber: "12345678998",
                    displayName:data.name,})
                var ref = firebase.storage().ref().child(`users/${firebase.auth().currentUser.uid}`);
                var file = data.photo 
                ref.put(file).then(function(snapshot) {
                  firebase.storage().ref().child(`users/${firebase.auth().currentUser.uid}`).getDownloadURL().then(function(url) {
                      
                   
                user.updateProfile({
                  
                    photoURL:url
                
                }).then(()=>{
                    dispatch(Action.Signup(user)) 
                })

                           
                
                })
                })
            
            
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ...
              });
        }
    }
    static post(data){
        return(dispatch)=>{
            var ref = firebase.storage().ref().child(`products/${data.photo.name}`);
            var file = data.photo // use the Blob or File API
            ref.put(file).then(function(snapshot) {
            firebase.storage().ref().child(`products/${data.photo.name}`).getDownloadURL().then(function(url) {
            
    firebase.database().ref(`users/`).push({
        Name:data.name,
        description:data.description,
        photo:url,
        contact:data.number,
        city:data.city,
        uid:firebase.auth().currentUser.uid,
        date:data.date,
        price:data.price,
        username:firebase.auth().currentUser.displayName,
        email:firebase.auth().currentUser.email,
        category :data.value,
        useruid:firebase.auth().currentUser.uid
    }).then(()=>{
        dispatch(Action.Post(data))
    }) 
})
})
}  }
    static get(){
        return(dispatch)=>{
            firebase.database().ref('users/').on('value',(snapshot)=>{
                let data = snapshot.val()
                dispatch(Action.Get(data))
            })
        }
    }
    static buyings(){
        return(dispatch)=>{
            firebase.database().ref(`buyings/${firebase.auth().currentUser.uid}`).on('value',(snapshot)=>{
                let data = snapshot.val()
                dispatch(Action.Buyings(data))
            })
        }
    }
    static update (data){
        return(dispatch)=>{
            if(data.photo){
            var ref = firebase.storage().ref().child(`products/${data.photo.name}`);
            var file = data.photo // use the Blob or File API
            ref.put(file).then(function(snapshot) {
            firebase.storage().ref().child(`products/${data.photo.name}`).getDownloadURL().then(function(url) {



                firebase.database().ref(`users/${data.keys[data.ind]}`).update({
                    Name:data.name,
                    category:data.value,
                    description:data.description,
                    contact:data.number,
                    city:data.city,
                    price:data.price,
                    photo:url,
                }).then(()=>{
                    dispatch(Action.Update(data))
                })
            })})}
            else{
                firebase.database().ref(`users/${data.keys[data.ind]}`).update({
                    Name:data.name,
                    category:data.value,
                    description:data.description,
                    contact:data.number,
                    city:data.city,
                    price:data.price,
                }).then(()=>{
                    dispatch(Action.Update(data))
                })

            }
        }
    }
}