import { matchResults } from "./MatchResults";
import { CsvReader } from "./CsvReader";
import { dateStringToDate } from "./Utils";
type MatchData = [Date, string, string, number, number, matchResults, string];

export class matchReader extends CsvReader<MatchData> {
  mapRow(row: string): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResults,
      row[6],
    ];
  }
}
