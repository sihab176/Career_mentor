"use client";
import EmtyState from "@/app/ai_career_chat/_components/EmtyState";
import { Send, SendHorizontal } from "lucide-react";
import React, { useState } from "react";

const CareerBot = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!userInput || loading) return;

  //   setLoading(true);
  //   const res = await fetch("/api/career_chat_agent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userMessage: userInput }),
  //     // body: JSON.stringify({ userInput }),
  //   });
  //   const data = await res.json();
  //   console.log("response ai", data);
  //   setUserInput("");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput || loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/career_chat_agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: userInput }),
      });

      const data = await res.json();
      console.log("response ai", data);
      // if(!data.reply){
      //   setAiResponse("Something went wrong")
      // }
      setAiResponse(data);
      // setUserInput("");
    } catch (err) {
      console.error("ai error message", err);
    } finally {
      setLoading(false);
    }
  };
  console.log(aiResponse.error);

  return (
    <section className="h-dvh bg-white shadow-xl max-w-6xl mx-auto my-21 rounded-2xl md:py-3 md:px-16 px-5">
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
        <div>
          <EmtyState setUserInput={setUserInput} />
        </div>
        {/*//todo message list */}
        <div className="flex-1 overflow-y-auto ">
          <div className="flex flex-col gap-4 p-1 mt-4 max-w-3xl mx-auto">
            {/* User Message (Right Side) */}
            {userInput && (
              <div className="self-end bg-gray-200 text-black p-2 rounded-lg max-w-[80%]">
                <p>{userInput}</p>
              </div>
            )}

            {/* AI Message (Left Side) */}
            
              <div className="self-start bg-gray-50 text-black p-2 rounded-lg max-w-[80%]">
                <p>
                  {loading ? "Thinking..." : ""}
                  {aiResponse.error}
                </p>
              </div>
            
          </div>
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
            className="w-full h-24  border border-gray-400 p-6 shadow-2xl  rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-600"
          ></textarea>
          <button
            onClick={handleSubmit}
            disabled={!userInput || loading}
            className="cursor-pointer  hover:text-blue-950  text-primary absolute top-3/6 right-2 transform  mt-2  mr-4 text-4xl"
          >
            {" "}
            <SendHorizontal size={30} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default CareerBot;
