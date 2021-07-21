// interface as type

interface Employee {
  id: number;
  name: string;
}

let emp: Employee = { id: 1, name: 'Steve' };

// interface as function type

interface EmployeeProcess {
  (id: number, name: string): void;
}

function printEmployee(id: number, name: string): void {
  console.log('Employee: id = ' + id + ', value = ' + name);
}

printEmployee(emp.id, emp.name); //Output: updateKeyValue: key = 2, value = Steve
