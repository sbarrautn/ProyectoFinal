import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signOut } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineStore, mapActions } from "pinia";
import { auth } from "../firebaseConfig";
import router from "../router";

export const useUserStore = defineStore("userStore",{
    state: () => ({
            userData: null,
            loadingUser: false,
            loadingSession: false,
    }),
    actions: {
        async registerUser(email, password){
            this.loadingUser = true
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid};
                router.push('/dashboard');

                // console.log ("El user es:");
                // console.log (user);

                // console.log ("El userData es:");
                // console.log (this.userData);

            } catch (error) {
                console.log(error);
            }finally{
                this.loadingUser = false;
            }
        },
        async loginUser(email, password){
            this.loadingUser = true
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid};
                router.push('/home');
            } catch (error) {
                console.log(error);
            }finally{
                this.loadingUser = false;
            }
        },
        async logoutUser(){
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login');
            } catch (error) {
                console.log(error);
            }
        },
        ///Promesa que Verifica si existe o no una sesión Activa
        currentUser(){
            return new Promise((resolve, reject) =>{
                const unsuscribe = onAuthStateChanged(auth, user =>{
                    if(user){
                        this.userData = {email: user.email, uid: user.uid};
                    }else{
                        this.userData = null;
                    }
                    resolve(user);
                }, e => reject(e))
                unsuscribe();
            })
        }
    },
});