'use strict'

let employ = [];
let result = 0;
const tax = 0.07;

function Employee(id, fullName, department, level, image) {
    this.employee_Id = id;
    this.full_Name = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    // this.salary=salary;

    employ.push(this);
}
Employee.prototype.sal = function () {
    if (this.level = "Senior") {
        result = getRndInteger(1500, 2000);
    } else if (this.level = "Mid-Senior") {
        result = getRndInteger(1000, 1500);
    } else if (this.level = "Junior") {
        result = getRndInteger(500, 1000);
    }
    let netSalary = result - (result * tax);
    this.salary = netSalary;
}

Employee.prototype.render = function () {
    document.write(`<h3> the name of Employess ${this.full_Name} and the Salary is ${this.salary} <h3>`);
}

employ[0] = new Employee ("1000" ,"Ghazi Samer","Administration","Senior","empImage.jpg");
employ[1] = new Employee ("1001" ,"Lana Ali","Finance","Senior","empImage.jpg");
employ[2] = new Employee ("1002" ,"Tamara Ayoub","Marketing","Senior","empImage.jpg");
employ[3] = new Employee ("1003" ,"Safi Walid" ,"Administration","Mid-Senior","empImage.jpg");
employ[4] = new Employee ("1004" ,"Omar Zaid","Development","Senior","empImage.jpg");
employ[5] = new Employee ("1005" ,'Rana Saleh',"Development","Junior","empImage.jpg");
employ[6] = new Employee ("1006" ,"Hadi Ahmad","Finance","Mid-Senior","empImage.jpg");

for (let i = 0; i < 6;i++){
    employ[i].sal();
    employ[i].render();
    console.table(employ[i]);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}