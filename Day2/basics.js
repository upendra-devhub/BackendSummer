console.log('hello')

// variables
// three ways
// 1. let->block scoped
// 2. var->function scoped
// 3. const-> block scoped

//objects

const student={
    name:"Anshu",
    age:21,
    city:"Farrukhabad",
    code(){
        console.log(`${this.name} can code`);
    }
}

console.log(student.name);
console.log(student.city)

//other way to acces the key of the object 

console.log(student["name"])

const key="name";
console.log(student[key])
student.code();
console.log(student.eat)//would be getting undefined



