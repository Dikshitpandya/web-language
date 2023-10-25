function CalcuateArea(length, width) {
    console.log("Calculate area function is called....");
    console.log(length, width);
    let area = length * width;
    return area;
}

//call function 
var area = CalcuateArea(100, 200);
console.log(area);