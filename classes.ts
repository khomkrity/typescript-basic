class Vehicle {
  protected honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  start(): void {
    console.log('insert key...');
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.start();
