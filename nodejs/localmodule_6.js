//create class 
class Triangle{
    constructor(base,height){
        this.base = base;
        this.height = height;
        console.log("Triangle class constructor called");
    }
    getArea(){
        //area is local variable
        let area = 0.5 * this.base * this.height;
        return area;
    }
}
//export class 
module.exports = Triangle;