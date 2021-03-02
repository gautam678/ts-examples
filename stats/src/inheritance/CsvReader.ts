import fs from "fs";

export abstract class CsvReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((item: string): string[] => {
        return item.split(",");
      })
      .map((row: string[]): T => this.mapRow(row));
  }
}
