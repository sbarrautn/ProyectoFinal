import {defineStore} from "pinia"
import { database, auth } from "../firebaseConfig"
import { collection, doc, where, getDocs, getDoc, query } from "firebase/firestore"

export const useDatabaseStore = defineStore('databaseStore',{
    state: () => ({
        loadingRol: false,
        user:{rol: null, uid: null, id: null}
    }),
    actions:{
        async createUser(nombre, apellido, dni, telefono, prestador, aplicador){
            try{
                

            }catch(e){

            }
        },

        async getRoleUser(){
            this.loadingRol = true;
            try{
                const querystring = query(
                    collection(database,"usuarios"),
                    where("uid", "==", auth.currentUser.uid)
                );
                const docSnap =  await getDocs(querystring);
                docSnap.forEach((doc) => {
                   // console.log(doc.id, doc.data());
                    //FUNCIONA OKOK DE 10
                    this.user = { uid: doc.id, rol: doc.data().rol }
                    // console.log("este es el rol");
                    // console.log(this.user.rol);
                }); 
            }catch(e){
                console.log(e);
            }finally{
                this.loadingRol = false;
            }
        }
    }
})