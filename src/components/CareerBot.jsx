"use client";
import EmtyState from "@/app/ai_career_chat/_components/EmtyState";
import { Send, SendHorizontal } from "lucide-react";
import React, { useState } from "react";

const CareerBot = () => {
  const [userInput, setUserInput] = useState("");
//   console.log(userInput);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/career_chat_agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });
    const data = await res.json();
    console.log("response ai", data);
    setUserInput("");
  };

  return (
    <section className="h-dvh bg-white shodow-xl shadow max-w-6xl mx-auto my-21 rounded-xl md:py-3 md:px-16 px-5">
      <header className="flex justify-between items-center ">
        <div>
          <h1 className="font-semibold text-2xl">AI Career Q/A Chat</h1>
          <p className="text-sm text-muted-foreground ">
            Get tailored career advice, real-time market insights, and
            personalized recommendations to help you make informed decisions.
          </p>
        </div>
        <button className="px-3 py-2 bg-primary text-white rounded text-[12px] inline-block text-nowrap">
          + New chart
        </button>
      </header>
      <section className="flex flex-col h-[76vh] ">
        {/*//todo emty sate options */}
        <div></div>
        {/*//todo message list */}
        <div className="flex-1">
          <EmtyState setUserInput={setUserInput} />
        </div>
        {/*//todo input field */}
        <div className="flex items-center gap-2 relative">
          <textarea
            name="aibot"
            id=""
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
            placeholder="Write your carrer related questions"
            className="w-full h-24 rounded border border-gray-400 p-4"
          ></textarea>
          <button
            onClick={handleSubmit}
            disabled={!userInput}
            className="cursor-pointer  hover:text-blue-950  text-primary absolute top-3/5 right-2 transform  mt-2 ml-1  text-4xl"
          >
            {" "}
            <SendHorizontal size={28} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default CareerBot;
