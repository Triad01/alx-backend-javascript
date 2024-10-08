/* eslint-disable no-unused-vars */
/* eslint-disable */

import {uploadPhoto, createUser} from "./utils"

export default function handleProfileSignup(){
    
    return Promise.all([uploadPhoto(), createUser()])
    .then((data)=>{
        const [photo, user] = data
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`)
    })
    .catch(()=>{
        console.log("Signup system offline")
    })
}