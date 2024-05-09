'use strict'

let result = 0;
const tax = 0.07;
let allEmp = [];
// let btnEl = document.getElementById("btnID");
let sectionEl = document.getElementById("cardSection");
let formEl = document.getElementById("formID");

function Employee(fullName, department, level, image) {
    this.employee_Id = this.generateID();
    this.full_Name = fullName;
    this.department = department;
    this.level = level;
    image = image;
    this.salary = this.calculating ();

    allEmp.push(this);
}

Employee.prototype.generateID = function () {
    return Math.floor(Math.random(100000) * 100000).toString().substring(1);
}
Employee.prototype.calculating = function (max, min) {
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
    // document.write(`<h3> Employee name is: ${this.fullName} and the salary is: ${this.salary}<h3>`);

    //Image section
    // let imageEl = document.createElement('img');
    // imageEl.src= this.image;
    // imageEl.alt ="profile pic";
    // sectionEl.appendChild(imageEl);
    // imageEl.style.width = "70px";

    // ID section
    let id = document.createElement("h4");
    id.textContent = `ID: ${this.employee_Id}`;
    sectionEl.appendChild(id);
    // name section
    let name = document.createElement("h3");
    name.textContent = `Name: ${this.full_Name}`;
    sectionEl.appendChild(name);
    // Department section
    let dept = document.createElement("h4");
    dept.textContent = this.department;
    sectionEl.appendChild(dept);

    // Level section
    let lev = document.createElement('h4');     
    lev.textContent = this.level;
    sectionEl.appendChild(lev);

    //Salary section
    let sal = document.createElement('h4');
    sal.textContent = `${this.salary} 💶`;
    sectionEl.appendChild(sal);

};



// let emp = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
// let emp1 = new Employee("1001", "Lana Ali", "Finance", "Senior", "./assets/Hadi.jpg");
// let emp2 = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./assets/Lana.jpg");
// let emp3 = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./assets/Omar.jpg");
// let emp4 = new Employee("1004", "Omar Zaid", "Development", "Senior", "./assets/Rana.jpg");
// let emp5 = new Employee("1005", 'Rana Saleh', "Development", "Junior", "./assets/Safi.jpg");
// let emp6 = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Tamara.jpg");

renderAll();

formEl.addEventListener("submit", handelSubmit);

// functions:

function renderAll() {
    for (let i = 0; i < allEmp.length; i++) {
        allEmp[i].render();
    }
}

function handelSubmit(event) {
    event.preventDefault();
    // console.log("from Event", event);

    // console.log("My name in event : ", event.target.fname.value);

    let empId = Employee.prototype.generateID();
    let fullName = event.target.fname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    // let image = event.target.image.value;
    let salary = Employee.prototype.calculating();

    let newEmp = new Employee(empId, fullName, department, level, salary);
    newEmp.render();
}