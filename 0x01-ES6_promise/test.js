// const myFirstPromise = new Promise((success, failure)=>{
//     setTimeout(()=>{
//         success("Yay! It was succesful")
//     }, 300)
// })

// myFirstPromise
// .then((msg)=>{
//     console.log("sussess!!!", msg)
//     return myFirstPromise
// })
// .then(()=>{
//     console.log("successful for the second time")
//     return myFirstPromise
// })
// .then(()=>{
//     console.log("successfull for the third time")
// })
// .catch((err)=>{
//     console.log("Failed with an error", err)
// })
// .finally(()=>{
//     console.log("Promise settled!")
// })

const fetchData = (url)=>{
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then((response)=>{
            if (!response.ok){
                throw new Error("Failed to fecth data")
            }
            return response.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=> reject("Failed", err))
    })
}