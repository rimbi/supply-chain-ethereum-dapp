var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      provider: function() {
        return new HDWalletProvider( "able tone desk pink angry shoulder unique habit shine sail story december", "https://rinkeby.infura.io/v3/9a0d98c5e778474f84a8f5d64146f350");
      },
      network_id:4
    }
  }
};