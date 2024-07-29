/* eslint-disable no-unused-vars */
/* eslint-disable */
const hasValuesFromArray = (set, array)=>{
    return array.every((arr)=>{
        return set.has(arr)
    })
}

export default hasValuesFromArray