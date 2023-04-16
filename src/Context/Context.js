import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();

const auth = getAuth(app)
const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProviderHandle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const createSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutHandle = () => {
        setLoading(true);
        return signOut(auth);
    }
    const emailUpdate = () => {

        return sendEmailVerification(auth.currentUser);
    }
    const updateProfileHandle = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth changed', currentUser);

            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unsubscribe()
        }
    })


    const userInfo = {

        user,
        register,
        createSignIn,
        logoutHandle,
        emailUpdate,
        updateProfileHandle,
        googleProviderHandle,
        loading

    }
    return (
        <div>
            <AuthContext.Provider
                value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;