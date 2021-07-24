class Vehicle {
  drive(): void {
    console.log("let's go!!!");
  }

  honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
