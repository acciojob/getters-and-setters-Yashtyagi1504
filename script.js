//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		// this.age = age;
	}
	age(newAge){
		this.age = newAge
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
