"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    title: "Marketing Manager",
    description:
      "tensorKit has transformed the way we create content for our marketing campaigns. The AI-generated content is not only high-quality but also saves us a lot of time. Highly recommended!",
    avatar: "RK", // Add the image URL for the avatar
  },
  {
    name: "Priya Sharma",
    title: "Blogger",
    description:
      "As a blogger, coming up with fresh and engaging content can be challenging. tensorKit has become my go-to tool for generating blog post ideas and attractive images. It has significantly increased my productivity.",
    avatar: "PS", // Add the image URL for the avatar
  },
  {
    name: "Amit Patel",
    title: "Social Media Manager",
    description:
      "Managing multiple social media accounts can be overwhelming. tensorKit has been a game-changer for us. The AI-generated videos and images have helped us boost our engagement and reach.",
    avatar: "AP", // Add the image URL for the avatar
  },
  {
    name: "Aishwarya Singh",
    title: "Content Strategist",
    description:
      "tensorKit is a game-changer for content strategists like me. It generates diverse content ideas and helps me create compelling visuals for our clients. The AI-powered features are simply amazing!",
    avatar: "AS", // Add the image URL for the avatar
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TESTIMONIALS.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
