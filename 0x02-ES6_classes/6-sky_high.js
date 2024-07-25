/* eslint-disable no-unused-vars */
/* eslint-disable */
import Building from "./5-building"
class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super(sqft)
        this._floors = floors

        // if (this.constructor !== SkyHighBuilding && this.evacuationWarningMessage === undefined) {
        //     throw new Error('Evacuate slowly the NUMBER_OF_FLOORS floors');
        //   }
    }

    set floors(number) {
        return this._floors = number;
    }
    
    get floors() {
        return this._floors;
    }

    evacuationWarningMessage(){
        return "Evacuate slowly the NUMBER_OF_FLOORS floors"
    }
}

export default SkyHighBuilding