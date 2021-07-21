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

// enum
enum PrintMedia {
  Newsletter = getPrintMediaCode('newsletter'),
  Magazine = Newsletter * 3,
  Newspaper = 0,
  Book,
}

function getMedia(mediaName: string): PrintMedia {
  if (mediaName === 'Forbes' || mediaName === 'Outlook') {
    return PrintMedia.Magazine;
  }
}

function getPrintMediaCode(mediaName: string): number {
  if (mediaName === 'newsletter') {
    return 5;
  }
}

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine; // returns 15

// any type
let arr: any[] = ['John', 212, true];
arr.push('Smith');
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ]
