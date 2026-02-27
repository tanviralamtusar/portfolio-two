"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const projectContent = [
  {
    title: "BotBhai",
    description:
      "A SaaS webapp for AI-powered conversations. Currently my main project featuring modern web technologies and AI integration. Built with Next.js, React, and AI capabilities to provide intelligent chat experiences.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">BotBhai</div>
          <div className="text-sm opacity-90">AI-Powered Conversations</div>
          <div className="flex gap-2 mt-4 justify-center">
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Next.js</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">AI</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">SaaS</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Product Pricing App",
    description:
      "An Android app for personal use, built as a fun project to explore mobile development with TypeScript. Features intuitive UI for tracking product prices and managing shopping lists efficiently.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
          className="h-full w-full object-cover"
          alt="Product Pricing App"
        />
      </div>
    ),
  },
  {
    title: "Color Picker Extension",
    description:
      "A browser extension for picking colors from any webpage. My exploration into browser extension development. Features include color history, hex code copying, and seamless integration with Chrome.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">Color Picker</div>
          <div className="text-sm opacity-90">Browser Extension</div>
          <div className="w-16 h-16 mx-auto mt-4 rounded-full bg-gradient-to-r from-red-400 via-green-400 to-blue-400"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Website Link Extractor",
    description:
      "A tool to extract and organize links from websites. Useful for content analysis and web scraping. Built with JavaScript to help developers quickly gather and analyze website structure.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">Link Extractor</div>
          <div className="text-sm opacity-90">Web Scraping Tool</div>
          <div className="mt-4 text-4xl">🔗</div>
        </div>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="py-10">
      <StickyScroll content={projectContent} />
    </div>
  );
}

export default StickyScrollRevealDemo;
