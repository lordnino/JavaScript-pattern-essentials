let db = function () {
    function SaveOriginalEmployee(employee) {};
    function GetEmployeeBySalary(salary) {};
    function GetEmployeesInCanda() {};
    function UpdateEmployeeWithSalaryIncrease(salary) {};
    function UpdateUserByName(first, last) {};
    function DeleteUserById(id) {};
    function SelectRecentsCustomers(timer) {};
    //...
}

// below is a much cleaner data access API that rarley needs change
let db2 = function () {
    function Select(criteria) {};
    function Save(object) {};
    function update(object) {};
    function Delete(object) {};
}