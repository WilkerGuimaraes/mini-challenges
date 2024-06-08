export interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
}
