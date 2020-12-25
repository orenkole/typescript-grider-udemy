import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HTMLReport } from "./ReportTargets/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  static winsAnalysisWithHtmlReport(teamName: string) {
    return new Summary(
      new WinsAnalysis(teamName),
      new HTMLReport()
    )
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
