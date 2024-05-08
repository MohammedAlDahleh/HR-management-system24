'use strict'

let result = 0;
const tax = 0.07;

function Employee(id, fullName, department, level, image) {
    this.employee_Id = id;
    this.full_Name = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    // this.salary=salary
}

Employee.prototype.salary = function (max, min) {
    const tax = 0.07;
    let net = 0;
    if (this.level == "Senior") {
        max = 2000
        min = 1500
        net = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (this.level == "Mid-Senior") {
        max = 1500
        min = 1000
        net = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (this.level == "Junior") {
        max = 1000
        min = 500
        net = Math.floor(Math.random() * (max - min + 1)) + min;
    } return `${net - (net * (7.5 / 100))}`;
}
Employee.prototype.render = function () {
    document.write(`<h3> Employee name is: ${this.fullName} and the salary is: ${this.salary()}<h3>`);
}

let emp = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "empImage.jpg");
let emp1 = new Employee("1001", "Lana Ali", "Finance", "Senior", "empImage.jpg");
let emp2 = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "empImage.jpg");
let emp3 = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "empImage.jpg");
let emp4 = new Employee("1004", "Omar Zaid", "Development", "Senior", "empImage.jpg");
let emp5 = new Employee("1005", 'Rana Saleh', "Development", "Junior", "empImage.jpg");
let emp6 = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "empImage.jpg");

emp.render();
emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();

