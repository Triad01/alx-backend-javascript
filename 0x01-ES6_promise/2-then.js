/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function handleResponseFromAPI(promise){
    console.log("Got a response from the API")
  return promise
  .then(()=>{
    console.log('Got a response from the API');
    return {status:200, body: "success"}
  })
  .catch(()=>{
    console.log('Got a response from the API');
    return new Error()
  })
}
