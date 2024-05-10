`use strict`
let empArr = [];
let sectionEl = document.getElementById("cardSection");
let formEl = document.getElementById("formID");

function Employee(id, full_name, department, level, image_URL, salary) {
    this.id = this.generateID();
    this.full_name = full_name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary = this.calculating();

    empArr.push(this);
}
Employee.prototype.calculating = function () {
    if (this.level === "Senior") {
        return Math.floor((Math.random() * (2000 - 1500 + 1) + 1500) * 7.5);
    } else if (this.level === "Mid-Senior") {
        return Math.floor((Math.random() * (1500 - 1000 + 1) + 1000) * 7.5);
    } else if (this.level === "Junior") {
        return Math.floor((Math.random() * (1000 - 500 + 1) + 500) * 7.5)
    }
}
Employee.prototype.generateID = function(){
 return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}
Employee.prototype.render = function () {


    let imageEl = document.createElement('img');
    imageEl.src= this.image_URL;
    imageEl.alt ="profile pic";
    sectionEl.appendChild(imageEl);
    imageEl.style.width = "70px";

 let full_name = document.createElement('h3');
 full_name.textContent = this.full_name;
 sectionEl.appendChild(full_name); 

 let id = document.createElement('h4');
 id.textContent = this.id;
 sectionEl.appendChild(id); 
 
 let department = document.createElement('p');
 department.textContent = this.department;
 sectionEl.appendChild(department);
 
 let level = document.createElement('p');
 department.textContent = this.level;
 sectionEl.appendChild(level);
 
 let salary = document.createElement('p');
 salary.textContent = this.salary;
 sectionEl.appendChild(salary);
}

// let Ghazi_Samer = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
// let Lana_Ali = new Employee(1001, "Lana Ali", "Finance", "Senior","./assets/Hadi.jpg");
// let Tamara_Ayoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Lana.jpg");
// let Safi_Walid = new Employee(1003,"Safi","Walid","Administration","Mid-Senior","./assets/Omar.jpg");
// let Omar_Zaid = new Employee(1004,"Omar Zaid","Development","Senior","./assets/Rana.jpg");
// let Rana_Saleh = new Employee(1005,"Rana Saleh","Development","Junior","./assets/Safi.jpg");
// let Hadi_Ahmad = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senio","./assets/Tamara.jpg");


function renderAll() {
for (let i = 0; i < empArr.length; i++) {
    empArr[i].render();
}

}

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
  let image_URL = event.target.image.value;
  let id = Employee.prototype.generateID();
  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let salary=Employee.prototype.calculating();

  let newEmp = new Employee(id,fullName,department,level,image_URL,salary);
  newEmp.render();
  
}
