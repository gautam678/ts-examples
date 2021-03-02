import { matchResults } from "./../MatchResults";
import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (
        (match[1] === "Man United" && match[5] === matchResults.HomeWin) ||
        (match[2] === "Man United" && match[5] === matchResults.AwayWin)
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
