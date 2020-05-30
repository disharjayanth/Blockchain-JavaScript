const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()

const bc1 = {
    "chain": [
      {
        "index": 1,
        "timestamp": 1587028707946,
        "transactions": [],
        "nonce": 100,
        "hash": "0",
        "previousBlockHash": "0"
      },
      {
        "index": 2,
        "timestamp": 1587028752265,
        "transactions": [],
        "nonce": 18140,
        "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
        "previousBlockHash": "0"
      },
      {
        "index": 3,
        "timestamp": 1587028820000,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "3b5c0ca07fc311ea8538977a81ed5303",
            "transactionId": "55ca41107fc311ea8538977a81ed5303"
          },
          {
            "amount": 10,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "697c5e507fc311ea8538977a81ed5303"
          },
          {
            "amount": 20,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "7233f7607fc311ea8538977a81ed5303"
          },
          {
            "amount": 40,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "758286207fc311ea8538977a81ed5303"
          }
        ],
        "nonce": 126081,
        "hash": "000093510ee155b61cef1dd64cd82090fb2d0d207eebd4c10c679efc38d0c126",
        "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
      },
      {
        "index": 4,
        "timestamp": 1587028867953,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "3b5c0ca07fc311ea8538977a81ed5303",
            "transactionId": "7e26be407fc311ea8538977a81ed5303"
          },
          {
            "amount": 30,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "897e2f807fc311ea8538977a81ed5303"
          },
          {
            "amount": 50,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "8c8729c07fc311ea8538977a81ed5303"
          },
          {
            "amount": 60,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "8f3c37a07fc311ea8538977a81ed5303"
          },
          {
            "amount": 70,
            "sender": "HFGAS4534JGB",
            "recipient": "89EFWVCVXV135",
            "transactionId": "91ed4de07fc311ea8538977a81ed5303"
          }
        ],
        "nonce": 119458,
        "hash": "0000402d3d6fe9c9f657dcad463500019f4ddf2db0ea008b0c50359ba260e05c",
        "previousBlockHash": "000093510ee155b61cef1dd64cd82090fb2d0d207eebd4c10c679efc38d0c126"
      },
      {
        "index": 5,
        "timestamp": 1587028880458,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "3b5c0ca07fc311ea8538977a81ed5303",
            "transactionId": "9abb7c307fc311ea8538977a81ed5303"
          }
        ],
        "nonce": 148485,
        "hash": "0000ce206569b0e3016b78f54d6f7b71600ec827cf1d4f6b78084ff3ca8c0003",
        "previousBlockHash": "0000402d3d6fe9c9f657dcad463500019f4ddf2db0ea008b0c50359ba260e05c"
      },
      {
        "index": 6,
        "timestamp": 1587028881731,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "3b5c0ca07fc311ea8538977a81ed5303",
            "transactionId": "a22fbfd07fc311ea8538977a81ed5303"
          }
        ],
        "nonce": 20271,
        "hash": "0000f4fc2186dbd0108ef9a5b891e65a2725b50fb21b2b62dcc510167c3b5469",
        "previousBlockHash": "0000ce206569b0e3016b78f54d6f7b71600ec827cf1d4f6b78084ff3ca8c0003"
      }
    ],
    "pendingTransactions": [
      {
        "amount": 12.5,
        "sender": "00",
        "recipient": "3b5c0ca07fc311ea8538977a81ed5303",
        "transactionId": "a2f1d7507fc311ea8538977a81ed5303"
      }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
  }

console.log('VALID : ',bitcoin.chainIsValid(bc1.chain))