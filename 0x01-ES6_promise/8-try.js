/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function divideFunction(numerator, denominator) {
    try{
        
        const result = numerator / denominator
        if (denominator === 0) throw new Error("cannot divide by 0")
        return result
    }
    catch{
        throw new Error("cannot divide by 0")
        
    }

}