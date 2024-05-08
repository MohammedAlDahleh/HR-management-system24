'use strict'
let allEmp = [];
function Employee(id, fullName, department, level, image) {
    this.employee_Id = id;
    this.full_Name = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    // this.salary=0;

    allEmp.push(this);
}


// objects:
new Employee("1000", "Ghazi Samer", "Administration", "Senior", "empImage.jpg");
new Employee("1001", "Lana Ali", "Finance", "Senior", "empImage.jpg");
new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "empImage.jpg");
new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "empImage.jpg");
new Employee("1004", "Omar Zaid", "Development", "Senior", "empImage.jpg");
new Employee("1005", 'Rana Saleh', "Development", "Junior", "empImage.jpg");
new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "empImage.jpg");

// methods:

Employee.prototype.newSalary = function (max, min) {
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
    document.write(`<h3> Employee name is: ${this.fullName} and the salary is: ${this.newSalary()}<h3>`);
}

renderAll();

// functions:

function renderAll() {
    for (let i = 0; i < allEmp.length; i++) {
        allEmp[i].render();
    }
}