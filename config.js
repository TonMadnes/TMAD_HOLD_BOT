module.exports = {
  BOT_TOKEN: '8056776286:AAFLpYO7ZiYTuDWA05ocSW1hg6KZtqiaYSg',
  
  // Special addresses with their labels
  SPECIAL_ADDRESSES: {
    '0:a4f8d1f1be93c940ddf82cf86f451b99e6b709914a44ee40d7f8135538ef554c': 'DEDUST POOL',
    '0:0000000000000000000000000000000000000000000000000000000000000000': 'BURN',
    '0:6dc6e2477305e65a35d3309f99e99cc61b5435d3c50928117b5eb52db4a26646': 'DEV TEAM',
    '0:28c81ed276358733c261ff5dc11ddc9de3ffe2143ce8f00c7e8dfc1abc42e184': 'TON RAFFLES LOCK',
    '0:4f2a66fee52211972908c25d513479fa30c41ff227c26e3d0e0e69f6df019a78': 'THOR DEV'
  },
  
  // Update interval (1 hour)
  UPDATE_INTERVAL: '0 * * * *', // Every hour at minute 0
  
  // GeckoTerminal API for TMAD price
  GECKOTERMINAL_API: 'https://api.geckoterminal.com/api/v2',
  TMAD_CONTRACT: 'EQBKSjiFlfSbd_osPOJ4TYoWfZ7a-w3E7PYB_XAKpz3LbTXK', // TMAD token contract address
  
  // TON API endpoints for real data
  TON_API_BASE: 'https://tonapi.io/v2',
  TONCENTER_API: 'https://toncenter.com/api/v3'
};