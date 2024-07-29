/* eslint-disable no-unused-vars */
/* eslint-disable */

const getStudentIdsSum = (studentList)=>{
    const students = studentList.map((student)=>{
        return Number(student.id)
    })
    const studentSum = students.reduce((sum, acc)=>{
        return sum + acc
    }, 0)

    return studentSum
}

export default getStudentIdsSum