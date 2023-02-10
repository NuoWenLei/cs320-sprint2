//Format of data:
// - if data has headers, then Map<string, array<string>>
// - if data does not have headers, then array<array<string>>

const headerData: {[key: string]: string[]} = {
	"id": ["1", "2", "3", "4", "5"],
	"city": ["Providence", "Boston", "Dallas", "Los Angeles", "San Francisco"],
	"state": ["RI", "MA", "TX", "CA", "CA"]
};

const noHeaderData: Array<Array<string>> = [
	["1", "2", "3", "4", "5"],
	["Providence", "Boston", "Dallas", "Los Angeles", "San Francisco"],
	["RI", "MA", "TX", "CA", "CA"]
];

const dataMap: {[key: string]: {[key: string]: string[]} | Array<Array<string>>} = {
	"data/headerData.csv": headerData,
	"data/noHeaderData.csv": noHeaderData
};

export { dataMap };