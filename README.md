## Contract Address
```
0xD4E1cB0a99B34Cb81ce7FbC2252d4190337F15f6
```

## transaction hash
```
0xd0c0ff89b58ceea6abb58660181a3961f50663eb9eeff98dc8817b89d57a0555
```

## No libary used

## IPFS was not used

## Truffle version
v5.1.22

## Node version
v10.15.2

## UML Diagrams

UML diagrams are in uml folder

# USAGE
This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Prerequisites

- Truffle

- Metamask

### Clone the repository
```
https://github.com/rimbi/supply-chain-ethereum-dapp
```

- run 
```
npm install
```
- launch truffle development network

- run
```
truffle develop
```

- execute truffle tests on a separate terminal

- run
```
truffle compile
truffle migrate
truffle test
```
All 10 tests should pass

- launch the DApp
```
python -m SimpleHTTPServer 8000
```

- open DApp on browser
- Connect metamask to the truffle development network