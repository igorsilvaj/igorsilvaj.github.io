"use client";

import React, { useState } from "react";
import { AiOutlineSend, AiFillCaretDown } from "react-icons/ai";

export default function Chat() {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState([
    { message: "Olá", owner: "", id: "asdfasdfasdf" },
  ]);
  const [message, setMessage] = useState("");
  return (
    <div className="containerTransparent">
      <div
        className={`${
          isActive ? "fixed" : "hidden"
        } bottom-5 right-5 bg-gray-700
        flex flex-col flex-wrap w-96 h-96 z-50 rounded-md`}
      >
        <button
          className="flex flex-row-reverse p-3"
          onClick={() => {
            setIsActive(false);
          }}
        >
          <AiFillCaretDown size="2em" color="white" />
        </button>
        <div className="chat flex flex-col flex-wrap items-center justify-between flex-1 pb-5">
          <div
            className="messagesDisplay bg-white w-80 h-52 overflow-y-auto
            flex flex-col flex-nowrap gap-y-2 py-2 px-1
            scrollbar-thin scrollbar-thumb-slate-500"
          >
            {messages.map((e) => (
              <div key={e.id}>
                Igor
                <div
                  className="flex flex-row flex-wrap break-all
              bg-blue-600 w-72 rounded p-2"
                >
                  {e.message}
                </div>
              </div>
            ))}
          </div>
          <div className="sendMessage flex items-center border-b-2 border-teal-500 p-2 relative w-80">
            <input
              className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Your message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-4"
              onClick={() => {
                setMessages([
                  ...messages,
                  { message: message, owner: "", id: new Date().toISOString() },
                ]);
                setMessage("");
              }}
            >
              <AiOutlineSend color="white" />
            </button>
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-5 right-5
        rounded-sm p-2 cursor-pointer bg-white"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        Contato
      </button>
    </div>
  );
}
