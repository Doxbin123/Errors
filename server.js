const express = require('express');
const app = express();
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

// Dein Telegram-Bot-Token von BotFather
const bot = new TelegramBot('7640914426:AAH5el4mWYfkZ34Fzrb00j55SIOo3D8gdhA', { polling: true });

// Serve the web app (HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Bot `/start` command handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Willkommen beim Deutschen Meme Generator! Klicke auf den Button, um zu starten.', {
        reply_markup: {
            inline_keyboard: [[{
                text: 'Starte Meme-Generator',
                web_app: { url: 'https://DEINE_WEBAPP_URL' }  // Setze hier deine Web-App-URL ein
            }]]
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
