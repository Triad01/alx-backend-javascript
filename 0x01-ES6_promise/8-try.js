/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function divideFunction(numerator, denominator) {
    try{
     
        if (denominator === 0) throw new Error("cannot divide by 0")
        else {
            const result = numerator / denominator
            return result
        }
    }
    catch{
        throw new Error("cannot divide by 0")
        
    }

}