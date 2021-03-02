import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/consoleReports";
import { CsvReader } from "./CsvReader";
import { MatchReader } from "./MatchReader";

const CsvFileReader = new CsvReader("football.csv");
const matchReader = new MatchReader(CsvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
