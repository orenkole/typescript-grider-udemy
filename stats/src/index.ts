import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from './MatchReader';
import {ConsoleReport} from "./ReportTargets/ConsoleReport";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {Summary} from "./Summary";
import {HTMLReport} from "./ReportTargets/HTMLReport"

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReade and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load(); // matchReader.matches

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HTMLReport(),
// )

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
