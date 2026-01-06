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
      TailScape is a modern web UI project focused on clean design,
      responsiveness, and component reusability.
    </p>

    <Image
      src="/tailscape.png"
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
      Find My spot is parking detector
    </p>

    <Image
      src="/findmyspot.png"
      alt="findmyspot preview"
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
    src: "/findmyspot.png",
    content: <Findmyspot />,
    githubUrl: "https://github.com/miniprj24/find-my-spot",
  },

    {
    category: "WEB DEVELOPMENT",
    title: "todo-SpringBoot",
    src: "/todolist.png",
    content: <Todo />,
    githubUrl: "https://github.com/Durvankur-Rajam/todo-app-Spring-Boot-",
  },

];
