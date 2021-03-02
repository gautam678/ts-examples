"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var Utils_1 = require("./Utils");
var matchReader = /** @class */ (function (_super) {
    __extends(matchReader, _super);
    function matchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    matchReader.prototype.mapRow = function (row) {
        return [
            Utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    };
    return matchReader;
}(CsvReader_1.CsvReader));
exports.matchReader = matchReader;
