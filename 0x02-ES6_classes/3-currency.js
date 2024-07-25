/* eslint-disable no-unused-vars */
/* eslint-disable */
class Currency{
    constructor(code, name){
        this._code = code,
        this._name = name
    }

    get code(){
        return this._code
    }

    set code(code){
        if (typeof(code) !== "number"){
            throw new TypeError("Code must be a number")
        }
        this._code = code
    }

    get name(){
        return this._name
    }

    set name(name){
        if (typeof(name) !== "string"){
            throw new TypeError("Name must be a string")
        }
    }

    displayFullCurrency(){
        return (`${this._name} (${this._code})`)
    }
}

export default Currency