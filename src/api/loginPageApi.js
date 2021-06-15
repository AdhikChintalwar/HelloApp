import firebase from 'react-native-firebase';

export function AddLoginCred(obj,addComplete){

firebase.firestore()
.collection('loginPage')
.doc('2k2jKp7P6jbPPymKWNBm')
.add({
    username:obj.username,
    password:obj.password,
    createdAt:firebase.firestore.FieldValue.serverTimestamp()
}).then((data)=>addComplete(data))
.catch((error)=>console.log(error));

}

export async function GetLoginCred(retriveData){

    var list=[]

    var snapshot = await firebase.firestore()
    .collection('loginPage')
    .get()

    snapshot.forEach((doc)=>{
        list.push(doc.data());
    });

    retriveData(list)

}