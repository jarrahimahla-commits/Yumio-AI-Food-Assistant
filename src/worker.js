export default {
  async fetch(request, env) {
    if (request.method === "GET") {
      return new Response("Yumio AI is running!");
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const update = await request.json();
      const message = update.message;

      if (!message?.text) return new Response("OK");

      const chatId = message.chat.id;
      const userText = message.text.trim();

      const sendMessage = async (text) => {
        await fetch(
          https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text
            })
          }
        );
      };

      if (userText === "/start") {
        await sendMessage(
          "سلام! من Yumio هستم 🍳\nمواد غذایی خونه‌ات رو بفرست تا سه غذای مناسب پیشنهاد بدم!"
        );
        return new Response("OK");
      }

      if (userText === "/help") {
        await sendMessage(
          "مواد غذایی، زمان آشپزی و سلیقه غذایی خودت رو بنویس تا کمکت کنم."
        );
        return new Response("OK");
      }

      await fetch(
        https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendChatAction,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            action: "typing"
          })
        }
      );

      const result = await env.AI.run(
        "@cf/meta/llama-3.1-8b-instruct-fast",
        {
          messages: [
            {
              role: "system",
              content: `تو Yumio، دستیار هوشمند آشپزی هستی.
همیشه فارسی و دوستانه جواب بده.
با توجه به مواد غذایی کاربر سه غذا پیشنهاد کن.
زمان پخت و مواد لازم را بنویس.
حساسیت‌ها و محدودیت‌های غذایی را رعایت کن.
اگر کاربر دستور پخت خواست، مراحل آن را توضیح بده.`
            },
            {
              role: "user",
              content: userText
            }
          ]
        }
      );

      await sendMessage(
        (result.response || "لطفاً دوباره امتحان کن!").slice(0, 4000)
      );

      return new Response("OK");

    } catch (error) {
      console.error("Yumio Error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};
