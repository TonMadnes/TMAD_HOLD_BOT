# TMAD Telegram Bot

A Telegram bot that tracks and displays TOP 25 TMAD token holders with automatic hourly updates.

## Features

- 🏆 **TOP 25 Holders**: Displays the top 25 TMAD token holders
- ⏰ **Automatic Updates**: Posts updates every hour
- 💰 **TMAD Price Tracking**: Shows current TMAD price with 24h change
- 🏷️ **Special Address Labels**: Identifies important addresses (DEV TEAM, BURN, etc.)
- 📊 **Value Calculations**: Shows USD value of holdings
- 🎯 **Manual Commands**: Use `/hold` for instant updates

## Commands

- `/start` - Welcome message and bot information
- `/hold` - Get current TOP 25 holders
- `/stop` - Stop receiving automatic updates

## Special Addresses

The bot recognizes and labels these special addresses:

- **DEDUST POOL**: `0:a4f8d1f1be93c940ddf82cf86f451b99e6b709914a44ee40d7f8135538ef554c`
- **BURN**: `0:0000000000000000000000000000000000000000000000000000000000000000`
- **DEV TEAM**: `0:6dc6e2477305e65a35d3309f99e99cc61b5435d3c50928117b5eb52db4a26646`
- **TON RAFFLES LOCK**: `0:28c81ed276358733c261ff5dc11ddc9de3ffe2143ce8f00c7e8dfc1abc42e184`
- **THOR DEV**: `0:4f2a66fee52211972908c25d513479fa30c41ff227c26e3d0e0e69f6df019a78`

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the bot:
```bash
npm start
```

## Configuration

The bot token and special addresses are configured in `config.js`. The bot will automatically:
- Post updates every hour
- Track TMAD price from GeckoTerminal API
- Format holder addresses appropriately
- Handle errors gracefully

## Note

This bot currently uses mock data for demonstration. In a production environment, you would need to:
1. Connect to the actual TON blockchain API
2. Query the real TMAD token contract
3. Implement proper error handling for blockchain queries
4. Add rate limiting and caching for better performance

## License

MIT License