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

// another example

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} Year: ${this.year} Broken: ${this.broken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};
