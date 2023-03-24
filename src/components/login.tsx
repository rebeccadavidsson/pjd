'use client'
import React, { ReactElement } from 'react';
import firebase from '../../firebase/firebaseClient';

interface Props {}

export default function Login({}: Props): ReactElement {

    async function signIn() {
        const userCredentials = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider);

        firebase.firestore().collection("users").doc(userCredentials.user?.uid).set({
            uid: userCredentials.user?.uid,
            email: userCredentials.user?.email,
            name: userCredentials.user?.displayName,
            provider: userCredentials.user?.providerData[0]?.providerId,
        });
    }
    return (
        <div>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}
