"use client";

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "../components/projectcards";

export function FeaturedProject() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section className="pt-28 lg:pt-34">
      <h1 className="text-center font-bold text-[30px]">
        FEATURED PROJECTS
      </h1>
      <h2 className="text-center font-mono text-[#FF611D] mb-10">
        EXPLORE MY WORK
      </h2>

      <Carousel items={cards} />
    </section>
  );
}

/* ---------------- PROJECT CONTENT ---------------- */

const TailScape = () => (
  <div className="bg-[#1a1a1a] p-8 rounded-3xl">
    <p className="text-lg font-semibold max-w-3xl mx-auto">
      Tailscape is a web application that allows users to buy small pets and pet-related products, while also providing access to personalized veterinary care.
    </p>

    <Image
      src="/Tailscape.png"
      alt="TailScape preview"
      width={600}
      height={400}
      className="mt-6 mx-auto object-contain"
    />
  </div>
);

const Findmyspot = () => (
  <div className="bg-[#1a1a1a] p-8 rounded-3xl">
    <p className="text-lg font-semibold max-w-3xl mx-auto">
      Find My Spot is a smart parking detector designed to analyze parking areas and detect available spots, enabling faster and more efficient parking.
    </p>

    <Image
      src="/find_myspot.png"
      alt="findmyspot preview"
      width={600}
      height={400}
      className="mt-6 mx-auto object-contain"
    />
  </div>
);

const Ollama_chatbot = () => (
  <div className="bg-[#1a1a1a] p-8 rounded-3xl">
    <p className="text-lg font-semibold max-w-3xl mx-auto">
      Ollama Chatbot is an offline AI chatbot powered by the Ollama LLM that delivers ChatGPT-like conversational capabilities without requiring an internet connection.
    </p>

    <Image
      src="/Ollama_chatbot.png"
      alt="Ollama_chatbot preview"
      width={600}
      height={400}
      className="mt-6 mx-auto object-contain"
    />
  </div>
);

const Ai_image_detector = () => (
  <div className="bg-[#1a1a1a] p-8 rounded-3xl">
    <p className="text-lg font-semibold max-w-3xl mx-auto">
      AI Image Detector analyzes images to identify AI-generated content and automatically applies a watermark to detected AI-generated images
    </p>

    <Image
      src="/Ai_image_detector.png"
      alt="Ollama_chatbot preview"
      width={600}
      height={400}
      className="mt-6 mx-auto object-contain"
    />
  </div>
);

const Todo = () => (
  <div className="bg-[#1a1a1a] p-8 rounded-3xl">
    <p className="text-lg font-semibold max-w-3xl mx-auto">
      A simple Todo made using Spingboot
    </p>

    <Image
      src="/todolist.png"
      alt="todolist preview"
      width={600}
      height={400}
      className="mt-6 mx-auto object-contain"
    />
  </div>
);

/* ---------------- DATA ---------------- */

const data = [
  {
    category: "WEB DEVELOPMENT",
    title: "TailScape",
    src: "/Tailscape.png",
    content: <TailScape />,
    githubUrl: "https://github.com/miniprj24/tailscape",
  },

    {
    category: "Machine Learning",
    title: "Find My Spot",
    src: "/Find_myspot.png",
    content: <Findmyspot />,
    githubUrl: "https://github.com/Durvankur-Rajam/find-my-spot",
  },

    {
    category: "DEVELOPMENT",
    title: "Ollama_chatbot",
    src: "/Ollama_chatbot.png",
    content: <Ollama_chatbot />,
    githubUrl: "https://github.com/Durvankur-Rajam/LocalMate",
  },

  {
    category: "WEB DEVELOPMENT",
    title: "AI Image Detector",
    src: "/Ai_image_detector.png",
    content: <Ai_image_detector />,
    githubUrl: "https://github.com/Durvankur-Rajam/ai-image-detector",
  },
      {
    category: "WEB DEVELOPMENT",
    title: "todo-SpringBoot",
    src: "/todolist.png",
    content: <Todo />,
    githubUrl: "https://github.com/Durvankur-Rajam/todo-app-Spring-Boot-",
  },

];
