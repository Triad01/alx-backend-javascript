const getListStudentIds = (arrayObject)=>{
    if (!Array.isArray(arrayObject)){
        return []
    }
    const new_array = arrayObject.map((obj)=> obj.id)
    return new_array
}

export default getListStudentIds