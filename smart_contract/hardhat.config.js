require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/KRIn8ZOHlcFi0ae-4BI-uYYXNq68uOTx",
			accounts: [
				"f566db95ea7e59ff704513303cbec8186dae9916b13971b44a779b197ec162bc",
			],
		},
	},
};
