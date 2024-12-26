const TELEGRAM_BOT_API = process.env.NEXT_PUBLIC_API_TELEGRAM_BOT_API;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

export const handleSubmit = async (telegramNick: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_API}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `telegram username: ${telegramNick}`, // Исправлено: используем telegramNick
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json(); // Попытка получить детали ошибки от API
      console.error("Telegram API error:", errorData);
      return {
        success: false,
        error:
          errorData?.description ||
          `Telegram API returned status ${response.status}`,
      }; // Возвращаем ошибку
    }
    return { success: true };
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return {
      success: false,
      error: "An error occurred while sending the message.",
    };
  }
};
