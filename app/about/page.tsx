"use client";

import { motion } from "framer-motion";
import { BookOpen, Star, Sparkles, MessageCircle } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function About() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white pb-20 relative overflow-x-hidden">
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/about_bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/60 to-bg"></div>
        </motion.div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-outfit mb-8 text-text leading-tight">
              Hey, Shreyul Kankariya <br/>this side..
            </h1>
            <p className="text-2xl md:text-4xl text-sage font-outfit italic">I write. But not just on paper.</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div {...fadeIn} className="space-y-8 text-xl md:text-2xl text-text-light font-inter leading-relaxed">
          <p>I write in poems, in stories, in lyrics and sometimes, in ideas that turn into content people can’t scroll past.</p>
          <p>I’m an author, a poet, and a lyricist. But I’m also a <span className="text-accent font-semibold">content creator</span> who understands one simple thing:</p>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blush bg-opacity-10 border-l-8 border-blush p-8 rounded-r-3xl my-12"
          >
            <p className="text-2xl md:text-3xl font-outfit text-text italic">
              "Attention is earned. Emotion is remembered."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Platform & Voice Section */}
      <section className="py-24 bg-sage bg-opacity-5 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-bg to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-4xl font-outfit text-sage">My work lives across platforms—</h2>
              <p className="text-lg text-text-light">Instagram, YouTube, LinkedIn… different formats, different audiences, different speeds.</p>
              <p className="text-lg text-text-light">But the core stays the same: I create to make people feel, think, and pause even in a world that’s constantly scrolling.</p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <a href="https://www.instagram.com/yuuuiiiiii08?igsh=dG03a2djNnZ6dzRq" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm border border-sage border-opacity-20 hover:scale-110 transition-transform block">
                  <FaInstagram className="text-accent" size={28} />
                </a>
                <a href="https://youtu.be/8QYv4wUdGdU?si=fCIb3yK3yk9WhJy0" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm border border-sage border-opacity-20 hover:scale-110 transition-transform block">
                  <FaYoutube className="text-red-500" size={28} />
                </a>
                <a href="https://www.linkedin.com/in/shreyul-kankariya-8aa746330?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm border border-sage border-opacity-20 hover:scale-110 transition-transform block">
                  <FaLinkedin className="text-blue-700" size={28} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent opacity-20 blur-3xl group-hover:opacity-40 transition-opacity rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl border border-blush border-opacity-20 overflow-hidden"
              >
                <img 
                  src="/images/about_profile.jpg" 
                  alt="Shreyul Kankariya" 
                  className="w-full h-auto rounded-[2.5rem] object-cover"
                />
              </motion.div>
              
              <div className="mt-12 space-y-4 text-lg text-text-light px-4">
                <h3 className="text-3xl font-outfit text-accent flex items-center gap-3">
                  <Sparkles /> A Voice
                </h3>
                <p>Over time, I’ve built more than just content. I’ve built a voice.</p>
                <p>A voice that can be poetic one moment, sharp and analytical the next, and unexpectedly honest when it matters the most.</p>
                <p>Because personal branding, to me, is not about being loud. It’s about being consistent enough to be recognizable.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center space-y-8 mb-20">
          <h2 className="text-4xl font-outfit">Depth & Reach</h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto italic">
            "I don’t believe in choosing between depth and reach. I believe in building both."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Entertains", color: "bg-sage" },
            { title: "Questions", color: "bg-blush" },
            { title: "Stays With You", color: "bg-accent text-white" }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${item.color} ${item.color.includes('text-white') ? '' : 'bg-opacity-10'} p-8 rounded-3xl text-center`}
            >
              <p className="text-xl font-bold uppercase tracking-widest">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn} className="mt-20 p-12 bg-gray-50 rounded-[3rem] text-center">
          <p className="text-2xl font-outfit mb-4">And some of it… <span className="text-accent font-bold">performs.</span></p>
          <p className="text-lg text-text-light">Because storytelling today is not just about writing well. It’s about understanding people, platforms, and timing.</p>
        </motion.div>
      </section>

      {/* Living Archive Section */}
      <section className="py-24 bg-text text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-outfit mb-8">This website is not just a portfolio.</motion.h2>
          <motion.p {...fadeIn} className="text-2xl text-gray-300 font-light mb-16 leading-relaxed max-w-4xl mx-auto">
            It’s a living archive of ideas, experiments, expressions, and evolving thoughts.
          </motion.p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Reader", text: "You'll find words" },
              { label: "Listener", text: "You'll find rhythm" },
              { label: "Brand", text: "You'll find perspective" },
              { label: "Curious", text: "You'll find something unexpected" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="border border-white border-opacity-20 p-6 rounded-2xl"
              >
                <p className="text-accent font-bold mb-2 uppercase tracking-tighter">{item.label}</p>
                <p className="text-sm text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-16 pt-16 border-t border-white border-opacity-10">
            <p className="text-3xl font-outfit italic">"This is not just what I do. This is how I think."</p>
            <p className="text-5xl font-outfit mt-8 text-sage">Welcome in.</p>
          </motion.div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-32 max-w-5xl mx-auto px-6 space-y-32">
        {/* Indradhanush */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="order-2 md:order-1">
            <h2 className="text-5xl font-outfit mb-8 text-accent">Indradhanush</h2>
            <div className="space-y-6 text-lg text-text-light">
              <p>Indradhanush is not just a collection of poems. It is a timeline of who I was becoming.</p>
              <p>Written over four years from 2020 to 2024 this book holds emotions that did not arrive all at once. They grew, broke, healed, and transformed… slowly.</p>
            </div>
            
            <div className="mt-12 space-y-8">
              {[
                { title: "Prem", color: "border-blush", text: "Where love exists in its rawest, most vulnerable form. Not just romance, but attachment, longing, and everything in between." },
                { title: "Dharma", color: "border-sage", text: "Where thoughts turn inward. Questions, beliefs, identity, and the silent battles we fight within ourselves." },
                { title: "Satranga", color: "border-accent", text: "Where everything blends. Seven shades of emotion, much like a rainbow, where no feeling exists alone." }
              ].map((section) => (
                <div key={section.title} className={`border-l-4 ${section.color} pl-6 py-2`}>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-text-light">{section.text}</p>
                </div>
              ))}
            </div>

            <motion.div {...fadeIn} className="mt-12 p-8 bg-gray-50 rounded-3xl italic">
              "This book is not written from one phase of life. It is written through phases. Which means you won’t just read it. You’ll find different versions of yourself inside it."
            </motion.div>
          </motion.div>
          <motion.div {...fadeIn} className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="/images/indradhanush.jpg" 
                alt="Indradhanush Book" 
                className="w-full max-w-sm rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Nakshatra */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-sage opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="/images/nakshatra.jpg" 
                alt="Nakshatra Book" 
                className="w-full max-w-sm rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
          <motion.div {...fadeIn}>
            <h2 className="text-5xl font-outfit mb-8 text-sage">Nakshatra</h2>
            <div className="space-y-6 text-lg text-text-light">
              <p>If Indradhanush was a journey across time, Nakshatra is a moment captured in intensity.</p>
              <p>Written entirely in 2025, this book is faster, sharper, and more instinctive. It doesn’t pause to organize emotions it lets them flow.</p>
              <p>There are no rigid sections here. No boundaries. Just expression in its most direct form.</p>
            </div>

            <div className="mt-12 p-10 bg-sage bg-opacity-5 rounded-[3rem] space-y-6 border border-sage border-opacity-10">
              <h3 className="text-2xl font-outfit text-sage flex items-center gap-2">
                <Star size={24} /> Beyond Writing
              </h3>
              <p className="text-text-light">What makes Nakshatra different is not just the writing but how it is experienced.</p>
              <p className="text-text-light">Each poem is accompanied by an image. Not as decoration, but as interpretation. The visuals don’t just support the poetry. They reveal it.</p>
            </div>

            <motion.p {...fadeIn} className="mt-12 text-2xl font-outfit italic border-l-4 border-blush pl-6">
              "If Indradhanush is something you read slowly, Nakshatra is something you feel instantly."
            </motion.p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
