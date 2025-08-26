# 🤖 Discord Stock Bot

<div align="center">

![Discord Stock Bot](https://img.shields.io/badge/Discord-Stock%20Bot-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

*An advanced Discord bot for real-time stock market analysis, portfolio tracking, and automated trading insights*

[🚀 **Live Demo**](#demo) • [📚 **Documentation**](#documentation) • [🛠️ **Setup Guide**](#installation)

</div>

## 📈 Overview

The Discord Stock Bot is a sophisticated trading companion that brings Wall Street to your Discord server. Built with Python and powered by machine learning algorithms, it provides real-time market data, technical analysis, and intelligent trading recommendations.

### ✨ Key Features

- 📊 **Real-time Market Data**: Live stock prices, volume, and market movements
- 🧠 **ML-Powered Analysis**: Advanced algorithms for trend prediction and pattern recognition
- 📱 **Portfolio Tracking**: Monitor your investments with detailed performance metrics
- 🔔 **Smart Alerts**: Customizable notifications for price targets and market events
- 📈 **Technical Indicators**: RSI, MACD, Moving Averages, and more
- 💼 **Paper Trading**: Practice strategies without financial risk
- 🎯 **Risk Management**: Automated stop-loss and take-profit recommendations

## 🎥 Demo

<div align="center">

*[Add GIF/Video demonstration here]*

**Example Commands:**
```
!stock AAPL          # Get Apple stock info
!portfolio           # View your tracked stocks  
!alert TSLA 250      # Set price alert for Tesla
!analyze NVDA        # Get ML analysis and predictions
```

</div>

## 🛠️ Tech Stack

- **Backend**: Python 3.9+, Discord.py
- **Data Sources**: Alpha Vantage API, Yahoo Finance
- **ML/Analytics**: Pandas, NumPy, scikit-learn, TA-Lib
- **Database**: SQLite/PostgreSQL for user data persistence
- **Deployment**: Docker, AWS/Heroku

## 🚀 Installation

### Prerequisites
- Python 3.9 or higher
- Discord Bot Token
- Alpha Vantage API Key (free tier available)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/chuk1123/discord-stock-bot.git
   cd discord-stock-bot
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your tokens and API keys
   ```

4. **Run the bot**
   ```bash
   python main.py
   ```

### Docker Deployment

```bash
docker build -t discord-stock-bot .
docker run -d --env-file .env discord-stock-bot
```

## 📊 Features Deep Dive

### Market Analysis Engine
The bot employs multiple technical indicators and machine learning models:

- **Trend Analysis**: Moving averages, trend lines, support/resistance levels
- **Momentum Indicators**: RSI, MACD, Stochastic oscillators
- **ML Predictions**: Linear regression, LSTM networks for price forecasting
- **Sentiment Analysis**: News sentiment impact on stock movements

### Portfolio Management
- Track unlimited stocks across multiple portfolios
- Performance analytics with detailed metrics
- Risk assessment and diversification recommendations
- Historical performance tracking with visual charts

### Alert System
- Price-based alerts (above/below thresholds)
- Technical indicator alerts (RSI oversold/overbought)
- News and earnings notifications
- Custom webhook integrations

## 🔧 Configuration

### Environment Variables
```env
DISCORD_TOKEN=your_discord_bot_token
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key
DATABASE_URL=your_database_connection_string
LOG_LEVEL=INFO
```

### Bot Permissions
Ensure your Discord bot has these permissions:
- Send Messages
- Embed Links
- Attach Files
- Use Slash Commands

## 📖 Commands Reference

| Command | Description | Example |
|---------|-------------|---------|
| `!stock <symbol>` | Get current stock information | `!stock AAPL` |
| `!chart <symbol>` | Generate technical analysis chart | `!chart TSLA 1M` |
| `!portfolio` | View tracked stocks | `!portfolio` |
| `!add <symbol>` | Add stock to portfolio | `!add NVDA` |
| `!remove <symbol>` | Remove from portfolio | `!remove AAPL` |
| `!alert <symbol> <price>` | Set price alert | `!alert MSFT 300` |
| `!analyze <symbol>` | Get ML analysis | `!analyze QQQ` |
| `!news <symbol>` | Latest stock news | `!news AMZN` |

## 🧪 Testing

```bash
# Run unit tests
python -m pytest tests/

# Run integration tests
python -m pytest tests/integration/

# Generate coverage report
coverage run -m pytest && coverage report
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
# Install development dependencies
pip install -r requirements-dev.txt

# Install pre-commit hooks
pre-commit install

# Run linting
flake8 src/
black src/
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/chuk1123/discord-stock-bot/issues)
- **Email**: chuk1123@berkeley.edu
- **Discord**: [Join our server](discord-invite-link)

## 🙏 Acknowledgments

- Alpha Vantage for market data API
- Discord.py community for excellent documentation
- Technical Analysis Library (TA-Lib) contributors

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Kevin Chu](https://github.com/chuk1123)

</div>
