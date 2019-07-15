let Employee = function (name) {
    this.name = name;
    this.getName = () => this.name;
    this.setName = (name) => this.name = name;
}

let employee = new Employee("Mike");

employee.setName("david");
console.log(employee.getName());

employee.setName("Peter");
console.log(employee.name);

// we can improve on this by hiding name as a variable, called hiddenName, which is then maintained
// in the function closure. this is only accessible via getName and setName

let Employee2 = function (name) {
    let hiddenName = name;
    return  {
        getName: () => hiddenName,
        setName: (name) => hiddenName = name
    }
}

let employee2 = new Employee2("Ali");

employee2.setName("david");
console.log(employee2.getName());

console.log(employee2.hiddenName);