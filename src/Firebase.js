import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.KEY,
    authDomain: process.env.DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
})

export const auth = app.auth()
export default app