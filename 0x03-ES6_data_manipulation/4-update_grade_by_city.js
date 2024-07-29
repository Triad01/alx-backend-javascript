#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
/**
 * Updates the grades of a list of students in a given city.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {*} city - The city of students.
* @param {{
*   studentId: Number,
*   grade: Number,
* }[]} newGrades - The new grades to be given to a student.
* @author Bezaleel Olakunori <https://github.com/B3zaleel>
* @returns {{id: Number, firstName: String, location: String}[]}
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentsToUpdate = students.filter((student) => student.location === city);
  
    const updatedStudents = studentsToUpdate.map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
  
    return updatedStudents;
  }