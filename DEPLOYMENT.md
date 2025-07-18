# 🚀 Deployment na Railway - Krok po Kroku

## 📋 Wymagania
- Konto GitHub
- Konto Railway (darmowe)
- Token Telegram Bot

## 🔧 Krok 1: Przygotowanie kodu

✅ Kod jest już przygotowany z plikami:
- `railway.json` - konfiguracja Railway
- `.env.example` - przykład zmiennych środowiskowych
- Zaktualizowany `package.json` z wymaganiami Node.js

## 🐙 Krok 2: Umieść kod na GitHub

1. **Utwórz nowe repo na GitHub:**
   ```
   https://github.com/new
   ```

2. **Skopiuj wszystkie pliki** z tego projektu do nowego repo

3. **Commit i push:**
   ```bash
   git add .
   git commit -m "Initial commit - TMAD Telegram Bot"
   git push origin main
   ```

## 🚂 Krok 3: Deployment na Railway

### 3.1 Załóż konto Railway
1. Idź na: https://railway.app
2. Kliknij **"Start a New Project"**
3. Zaloguj się przez GitHub

### 3.2 Połącz z GitHub
1. Wybierz **"Deploy from GitHub repo"**
2. Wybierz swoje repo z botem
3. Kliknij **"Deploy Now"**

### 3.3 Ustaw zmienne środowiskowe
1. W Railway dashboard, kliknij na swój projekt
2. Idź do zakładki **"Variables"**
3. Dodaj zmienne:

```
BOT_TOKEN = 8056776286:AAFLpYO7ZiYTuDWA05ocSW1hg6KZtqiaYSg
TMAD_CONTRACT = EQBKSjiFlfSbd_osPOJ4TYoWfZ7a-w3E7PYB_XAKpz3LbTXK
UPDATE_INTERVAL = 0 * * * *
```

### 3.4 Deploy
1. Railway automatycznie zbuduje i wdroży aplikację
2. Sprawdź logi w zakładce **"Deployments"**
3. Bot powinien być aktywny w ciągu 2-3 minut

## ✅ Krok 4: Weryfikacja

1. **Sprawdź logi Railway:**
   - Powinny pokazać: "🚀 TMAD Bot started successfully!"

2. **Testuj bota:**
   - Wyślij `/start` do @TMADHolder_bot
   - Wyślij `/hold` żeby sprawdzić holders

3. **Monitoruj:**
   - Bot będzie wysyłać automatyczne update co godzinę

## 🔧 Troubleshooting

**Problem: Bot nie odpowiada**
- Sprawdź logi w Railway
- Upewnij się, że BOT_TOKEN jest poprawny

**Problem: "UNKNOWN ADDRESS"**
- Sprawdź logi API calls
- Może być problem z TON API

**Problem: Crash po czasie**
- Railway automatycznie restartuje
- Sprawdź error logi

## 💰 Koszty

**Railway Free Tier:**
- $5 miesięcznie w kredytach
- Wystarczy dla małego bota
- Automatyczne skalowanie

## 🎯 Gotowe!

Twój bot działa teraz 24/7 na Railway! 🎉

**Przydatne linki:**
- Railway Dashboard: https://railway.app/dashboard
- Logi aplikacji: W Railway > Twój projekt > Deployments
- GitHub repo: Twoje repo z kodem