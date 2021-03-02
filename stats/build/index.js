"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var MatchReader_1 = require("./MatchReader");
var MatchResults_1 = require("./MatchResults");
var manUtdWins = 0;
var csvFileReader = new CsvReader_1.CsvReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if ((match[1] === "Man United" && match[5] === MatchResults_1.matchResults.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResults_1.matchResults.AwayWin)) {
        manUtdWins++;
    }
}
console.log("Man Utd won ", manUtdWins);
