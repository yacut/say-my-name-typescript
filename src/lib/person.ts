export class FullName {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (this.firstName == null || this.lastName == null) {
      return "";
    }

    return `Your name is ${this.firstName} ${this.lastName}!`;
  }
}

export class Address {
  country: string;
  city: string;
  street: string;
  zipCode: number;

  constructor(country: string, city: string, street: string, zipCode: number) {
    this.country = country;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  toString(): string {
    return `${this.country} ${this.city} ${this.street} ${this.zipCode}`;
  }
}
