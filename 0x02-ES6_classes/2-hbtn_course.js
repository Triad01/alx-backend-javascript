/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class HolbertonCourse{
    constructor(name, length, students){
        this._name = name,
        this._length = length,
        this._students = students
    }

    get name(){
        return this._name
    }
    set name (name){
        if (typeof(name) !== "string")
            throw new Error("Name must be a string")
        return this._name = name
    }

    get length(){
        return this._length
    }
    set length(length){
        if (typeof(length) !== "number")
            throw new Error("Length must be a number")
        return this._length = length
    }

    get students(){
        return this._students
    }

    set students(students){
        if (typeof(students) !== "string")
            throw new Error("Students must be a string")
        return this._students = students
    }
}