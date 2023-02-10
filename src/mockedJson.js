//Format of data:
// - if data has headers, then Map<string, array<string>>
// - if data does not have headers, then array<array<string>>
var headerData = {
    "id": ["1", "2", "3", "4", "5"],
    "city": ["Providence", "Boston", "Dallas", "Los Angeles", "San Francisco"],
    "state": ["RI", "MA", "TX", "CA", "CA"]
};
var noHeaderData = [
    ["1", "2", "3", "4", "5"],
    ["Providence", "Boston", "Dallas", "Los Angeles", "San Francisco"],
    ["RI", "MA", "TX", "CA", "CA"]
];
var dataMap = {
    "data/headerData.csv": headerData,
    "data/noHeaderData.csv": noHeaderData
};
export { dataMap };
