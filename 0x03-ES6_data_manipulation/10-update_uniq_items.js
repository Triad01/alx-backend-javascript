/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function updateUniqueItems(map){
    for (const [key, value] of map){
        if (value === undefined){
            throw new Error("Cannot process")
        }
        else if( value === 1){
                map.set(key, 100)
        }
    }
    return map
}