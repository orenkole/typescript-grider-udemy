import {CsvFileReader, ScvFileReader} from "./CsvFileReader";
import {MatchReader} from './MatchReader';
import {MatchResult} from "./MatchResult"

// Create an object that sitisfies tha 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReade and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load(); // matchReader.matches


console.log(manUnitedWins);
