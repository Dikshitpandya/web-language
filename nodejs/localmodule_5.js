module.exports = function(name,fathername,surname){
    //properties
    this.name = name;
    this.fathername = fathername;
    this.surname = surname;

    //methods
    this.fullname = function(){
        return this.name + " " + this.fathername + " " + this.surname;
    }

    this.shortname = function(){
        return this.name + " " + this.surname;
    }
}