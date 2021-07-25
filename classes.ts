class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('BEEP!');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  start(): void {
    console.log('insert key...');
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'black');
car.start();
