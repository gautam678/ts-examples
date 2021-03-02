import fs from "fs";

export class CsvReader {
  data: String[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((item: string): string[] => {
        return item.split(",");
      });
  }
}
