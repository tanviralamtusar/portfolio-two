"use client";

import React from "react";

export default function AboutDemo() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 poppins-font">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                .poppins-font {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="About Us" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="community member"
                                className="size-9 rounded-full border-[3px] border-white dark:border-slate-800 hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="community member"
                                className="size-9 rounded-full border-[3px] border-white dark:border-slate-800 hover:-translate-y-1 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="community member"
                                className="size-9 rounded-full border-[3px] border-white dark:border-slate-800 hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white dark:border-slate-800 bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 ml-2">Join our developer community</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700 dark:text-slate-200">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you're launching a SaaS app, landing page, or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                    <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white font-medium">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
