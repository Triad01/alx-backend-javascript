const getStudentsByLocation = (students, location)=>{
    const students_by_location = students.filter((student)=>{
        return student.location === location
    })

    return students_by_location
}

export default getStudentsByLocation