import { app } from '../services/firebaseConnect'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default function loginService(email, senha) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                reject(errorMessage)
            });
    })
}