import {CsvFileReader} from "./CsvFileReader";
const reader = new CsvFileReader("football.csv");
reader.read();


enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

let manUntedWins = 0;
for(let match of reader.data) {
  if(match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUntedWins++;
  } else if(match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUntedWins++;
  }
}
console.log(manUntedWins);
