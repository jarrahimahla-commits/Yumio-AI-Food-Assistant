🍳 Yumio – AI-Powered Telegram Cooking Assistant

Yumio is an AI-powered Telegram cooking assistant that suggests personalized recipes based on available ingredients, cooking time, food preferences, and dietary restrictions using Cloudflare Workers AI.

✨ Features

* Suggests three meals based on available ingredients
* Provides cooking time and required ingredients
* Explains cooking instructions
* Supports Persian language
* Considers food preferences and dietary restrictions
* Responds to Telegram commands

🛠 Technologies

* JavaScript
* Telegram Bot API
* Cloudflare Workers
* Cloudflare Workers AI
* Webhooks

🏗 Project Structure

Yumio-AI-Food-Assistant/
├── src/
│   └── worker.js
├── documentation/
│   └── Technical-Documentation.md
└── README.md

⚙️ How It Works

1. The user sends ingredients or a food-related request to the Telegram bot.
2. Telegram sends the message to Cloudflare Worker through a Webhook.
3. Cloudflare Workers AI processes the request.
4. Yumio generates personalized food suggestions.
5. The response is sent back to the user through Telegram.

🚀 Setup

1. Create a Telegram bot using BotFather.
2. Create a Cloudflare Worker.
3. Enable the Workers AI binding named AI.
4. Add the Telegram bot token as a secret named TELEGRAM_BOT_TOKEN.
5. Deploy the Worker.
6. Configure the Telegram Webhook with the Worker URL.

Important: Never publish your Telegram bot token or other secret credentials in this repository.

💬 Example

User:
I have eggs, potatoes, and tomatoes. What can I cook?

Yumio:
Yumio suggests three suitable meals and provides cooking instructions.

🔮 Future Improvements

* Save user preferences
* Add a database using Cloudflare D1
* Support food image recognition
* Add daily meal planning
* Improve recipe personalization

📄 Documentation

Technical documentation is available in the documentation folder.

👩‍💻 Developer

Created as an educational project to demonstrate the use of Artificial Intelligence and Cloud Computing.

Powered by Cloudflare Workers AI
