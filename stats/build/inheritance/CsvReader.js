"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvReader = /** @class */ (function () {
    function CsvReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvReader.prototype.read = function () {
        var _this = this;
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: "utf-8" })
            .split("\n")
            .map(function (item) {
            return item.split(",");
        })
            .map(function (row) { return _this.mapRow(row); });
    };
    return CsvReader;
}());
exports.CsvReader = CsvReader;
