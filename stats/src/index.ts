import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from './MatchReader';
import {ConsoleReport} from "./ReportTargets/ConsoleReport";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {Summary} from "./Summary";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReade and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load(); // matchReader.matches

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport(),
)

summary.buildAndPrintReport(matchReader.matches);
