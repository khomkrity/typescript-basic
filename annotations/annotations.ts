// array type
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
// generic array type
let foods: Array<string> = ['Pizza', 'Steak', 'Burrito'];

// union type
let empId: string | number;
empId = 111; // OK
empId = 'E111'; // OK

// multi type array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or
let anotherValues: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
