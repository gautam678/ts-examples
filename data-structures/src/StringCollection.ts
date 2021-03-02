import { Sorter } from "./Sorter";

export class StringCollection extends Sorter {
  data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }

  // This is a getter
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;

    this.data = characters.join("");
  }
}

// //How to call getters
// const data = new NumbersCollection([1, 2, 3]);
// // Calls the getter
// data.length;
