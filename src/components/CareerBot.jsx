// "use client";
// import EmtyState from "@/app/ai_career_chat/_components/EmtyState";
// import { Send, SendHorizontal } from "lucide-react";
// import React, { useState } from "react";
// import Markdown from "react-markdown";

// const CareerBot = () => {
//   const [userInput, setUserInput] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!userInput || loading) return;

//   //   setLoading(true);
//   //   const res = await fetch("/api/career_chat_agent", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({ userMessage: userInput }),
//   //     // body: JSON.stringify({ userInput }),
//   //   });
//   //   const data = await res.json();
//   //   console.log("response ai", data);
//   //   setUserInput("");
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!userInput || loading) return;

//     setLoading(true);

//     try {
//       const res = await fetch("/api/career_chat_agent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userMessage: userInput }),
//       });

//       const data = await res.json();
//       console.log("response ai", data);
//       // if(!data.reply){
//       //   setAiResponse("Something went wrong")
//       // }
//       setAiResponse(data);
//       // setUserInput("");
//     } catch (err) {
//       console.error("ai error message", err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log(aiResponse.error);

//   return (
//     <section className="h-dvh bg-white shadow-xl max-w-6xl mx-auto my-21 rounded-2xl md:py-3 md:px-16 px-5">
//       <header className="flex justify-between items-center ">
//         <div>
//           <h1 className="font-semibold text-2xl">AI Career Q/A Chat</h1>
//           <p className="text-sm text-muted-foreground ">
//             Get tailored career advice, real-time market insights, and
//             personalized recommendations to help you make informed decisions.
//           </p>
//         </div>
//         <button className="px-3 py-2 bg-primary text-white rounded text-[12px] inline-block text-nowrap">
//           + New chart
//         </button>
//       </header>
//       <section className="flex flex-col h-[76vh] ">
//         {/*//todo emty sate options */}
//         <div>
//           {!userInput && <EmtyState setUserInput={setUserInput} />}
//         </div>
//         {/*//todo message list */}
//         <div className="flex-1 overflow-y-auto ">
//           <div className="flex flex-col gap-4 p-1 mt-4 max-w-3xl mx-auto">
//             {/* User Message (Right Side) */}
//             {userInput && (
//               <div className="self-end bg-gray-200 text-black p-2 rounded-lg max-w-[80%]">
//                 <p>{userInput}</p>
//               </div>
//             )}

//             {/* AI Message (Left Side) */}

//             <div className="self-start bg-gray-50 text-black p-2 rounded-lg max-w-[80%]">
//               <p>
//                 {loading ? "Thinking..." : ""}
//                 <Markdown>
//                   {aiResponse.error ? aiResponse.error : aiResponse.reply}
//                 </Markdown>
//               </p>
//             </div>
//           </div>
//         </div>
//         {/*//todo input field */}
//         <div className="flex items-center gap-2 relative">
//           <textarea
//             name="aibot"
//             id=""
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             required
//             placeholder="Write your carrer related questions"
//             className="w-full h-24  border border-gray-400 p-6 shadow-2xl  rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-600"
//           ></textarea>
//           <button
//             onClick={handleSubmit}
//             disabled={!userInput || loading}
//             className="cursor-pointer  hover:text-blue-950  text-primary absolute top-3/6 right-2 transform  mt-2  mr-4 text-4xl"
//           >
//             {" "}
//             <SendHorizontal size={30} />
//           </button>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default CareerBot;

"use client";
import EmtyState from "@/app/ai_career_chat/_components/EmtyState";
import { SendHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

const CareerBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  //!------------------------------- hadle submit-------------------------------->
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!input.trim() || loading) return;

  //   const userMessage = {
  //     role: "user",
  //     content: input,
  //   };

  //   setMessages((prev) => [...prev, userMessage]);
  //   setInput("");
  //   setLoading(true);

  //   try {
  //     const res = await fetch("/api/career_chat_agent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ userMessage: input }),
  //     });

  //     const data = await res.json();

  //     const aiMessage = {
  //       role: "assistant",
  //       content: data?.reply || "Something went wrong 😢",
  //     };

  //     setMessages((prev) => [...prev, aiMessage]);
  //   } catch (err) {
  //     setMessages((prev) => [
  //       ...prev,
  //       { role: "assistant", content: "Server error occurred" },
  //     ]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input,
      createdAt: new Date(),
    };

    // 1️⃣ UI তে user message দেখাও
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // 2️⃣ AI API call
      const res = await fetch("/api/demoChatBot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: input }),
      });

      const data = await res.json();
      // console.log("data", data.reply);

      const aiMessage = {
        role: "assistant",
        content: data || "Something went wrong 😢",
        createdAt: new Date(),
      };

      // 3️⃣ Final messages array (user + ai)
      const updatedMessages = [...messages, userMessage, aiMessage];

      // 4️⃣ UI update
      setMessages(updatedMessages);

      console.log("updateMessage", updatedMessages);

      // 🔥 5️⃣ SAVE TO MONGODB (POST REQUEST)
      // await fetch("/api/chat/save", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     messages: updatedMessages,
      //   }),
      // });
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Server error occurred 😢" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-dvh bg-gray-950 text-white shadow  shadow-blue-950 max-w-6xl mx-auto rounded-3xl px-5 md:px-16 py-4 mt-21 pb-20">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-[19px]">
            <span className="text-blue-700">AI </span> Career Q/A Chat
          </h1>
          <p className="text-[11px] text-muted-foreground text-gray-600">
            Personalized career guidance powered by AI
          </p>
        </div>
      </header>

      {/* Chat Body */}
      <section className="flex flex-col h-[76vh] ">
        {!messages.length && <EmtyState setUserInput={setInput} />}

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-lg text-[12px] ${
                  msg.role === "user"
                    ? "self-end bg-primary text-white"
                    : "self-start bg-gray-900 text-blue-200"
                }`}
              >
                <Markdown>{msg.content}</Markdown>
              </div>
            ))}

            {loading && (
              <div className="self-start bg-gray-900 p-3 rounded-lg text-sm animate-pulse">
                <div className="flex items-center justify-center gap-2">
                  
                  <div className="flex space-x-2 ">
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{
                        animationDelay: "0ms",
                        animationDuration: "600ms",
                      }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{
                        animationDelay: "150ms",
                        animationDuration: "600ms",
                      }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{
                        animationDelay: "300ms",
                        animationDuration: "600ms",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="relative mt-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your career question..."
            className="w-full h-18 resize-none border border-blue-950 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={!input || loading}
            className="absolute right-4 bottom-4 text-blue-300 disabled:opacity-50"
          >
            <SendHorizontal size={28} />
          </button>
        </form>
      </section>
    </section>
  );
};

export default CareerBot;
