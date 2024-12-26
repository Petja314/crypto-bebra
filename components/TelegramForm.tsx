"use client";
import React, { useState } from "react";

const TelegramForm = () => {
  const [telegramNick, setTelegramNick] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendToTelegram = async () => {
    if (!telegramNick) {
      setMessage("Введите ваш Telegram username.");
      return;
    }

    setIsLoading(true);

    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_FORM_BOT_TOKEN; // Замените на ваш токен бота
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_FORM_CHATID; // Замените на ваш chat_id (ID чата, куда отправляется сообщение)

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const payload = {
        chat_id: chatId,
        text: `Новый пользователь: ${telegramNick}`,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Сообщение успешно отправлено!");
      } else {
        setMessage("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Произошла ошибка. Попробуйте снова.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">Отправить Telegram username</h1>
      <input
        type="text"
        placeholder="@telegram"
        value={telegramNick}
        onChange={(e) => setTelegramNick(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={sendToTelegram}
        disabled={isLoading || telegramNick.trim() === ""}
        className={`mt-4 px-4 py-2 rounded ${
          isLoading || telegramNick.trim() === ""
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        {isLoading ? "Отправка..." : "Отправить"}
      </button>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default TelegramForm;
