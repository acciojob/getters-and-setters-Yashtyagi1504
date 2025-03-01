class Person {
  constructor(name, age) {
    this._name = name; // Using _name to avoid direct property access
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    if (typeof newAge !== "number" || newAge < 0) {
      console.log("Invalid age");
      return;
    }
    this._age = newAge;
  }

  // Getter for age (needed for console.log(person.age))
  get age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
