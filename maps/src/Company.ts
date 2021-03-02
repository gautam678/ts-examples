import { Mappable } from "./CustomMap";
import faker from "faker";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
    this.color = "red";
  }

  markerContent(): string {
    return `Company name is ${this.companyName}`;
  }
}
