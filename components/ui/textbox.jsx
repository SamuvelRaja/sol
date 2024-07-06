"use client"
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Textbox = ({props}) => {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
  //   try {
  //     const response = await axios.post("/api/sol", { message });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  try {
      const response = await axios.post("/api/mistral", { message });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="relative">
        <Textarea
          placeholder="tell Sol..."
          name="message"
          id="message"
          rows={1}
          className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute w-8 h-8 top-3 right-3"
        >
          <ArrowUpIcon className="w-4 h-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </form>
  );
}

export default Textbox;

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}