//create class 
class Triangle{
    constructor(time,work,number){
        this.time = this.time;
        this.work = this.work;
        this.number = number;
        console.log("Triangle class constructor called");
    }

    getSquare(){
        let square = this.number * this.number ;
        return square;
    }

    getqube(){
        let qube = this.number * this.number * this.number ;
        return qube;
    }

    getpower(){
        let power = this.work / this.time;
        return power;
    }
}
//export class 
module.exports = Triangle;

//  getSquare()
// getQube()
// getPower()


