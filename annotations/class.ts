class Vehicle {
  color: string = "red";

  constructor(color: string) {
    this.color = color;
  }

  protected drive(): void {
    console.log("chugga chugga");
  }
  public callDrive(): void {
    this.drive;
  }
  public honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  public drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("red");
