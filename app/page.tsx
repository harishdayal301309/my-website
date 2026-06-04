"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import StarryBackground from "@/components/StarryBackground";
import TiltCard from "@/components/TiltCard";
import SpinningBook from "@/components/SpinningBook";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loaderStep, setLoaderStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaderStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-blush flex items-center justify-center z-50 transition-colors duration-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={loaderStep}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-outfit text-white"
          >
            {loaderStep === 0 && <span>Writing...</span>}
            {loaderStep === 1 && <span>Thinking...</span>}
            {loaderStep === 2 && <span>Creating...</span>}
            {loaderStep === 3 && <span>Welcome.</span>}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white pb-20 relative overflow-x-hidden">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/images/media__1777805864897.jpg" 
          alt="Page Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div 
          className="flex-1 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-outfit mb-6 leading-tight text-sage">
            Shreyul Kankariya
          </h1>
          <div className="space-y-4 text-lg text-text-light font-inter">
            <p>I write. But not just on paper.</p>
            <p>I write in poems, in stories, in lyrics and sometimes, in ideas that turn into content people can’t scroll past.</p>
            <p>I’m an author, a poet, and a lyricist. But I’m also a content creator who understands one simple thing:</p>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-semibold text-text text-xl my-6 border-l-4 border-blush pl-4 bg-blush bg-opacity-10 py-2 rounded-r-lg"
            >
              Attention is earned. Emotion is remembered.
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="flex-1 flex justify-center z-10"
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
            {/* Attractive Landscape Blob Background */}
            <div className="absolute inset-0 bg-sage opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-10 bg-blush opacity-30 rounded-full blur-2xl"></div>
            
            <TiltCard className="w-64 h-64 md:w-80 md:h-80 glory-outline rounded-full relative z-10">
              <img 
                src="/images/profile_new.jpg" 
                alt="Shreyul Kankariya" 
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-white"
              />
            </TiltCard>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <motion.section 
        className="px-6 py-24 bg-sage bg-opacity-10 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-40 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-outfit text-sage mb-12 leading-relaxed"
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-4 relative">
                <img 
                  src="/images/college_event.png" 
                  alt="College Event" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-outfit text-lg">College Event</p>
                </div>
              </div>
              <p className="font-outfit text-sage font-semibold text-xl">College Event</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-4 relative">
                <img 
                  src="/images/book_club.png" 
                  alt="Achievements" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-outfit text-lg">Achievements</p>
                </div>
              </div>
              <p className="font-outfit text-accent font-semibold text-xl">Achievements</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-4 relative">
                <img 
                  src="/images/achiever_year.jpg" 
                  alt="Achiever of the Year" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-outfit text-lg">Achiever of the Year</p>
                </div>
              </div>
              <p className="font-outfit text-sage font-semibold text-xl">Achiever of the Year</p>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* CTAs & Brands */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button 
            onClick={() => router.push('/contact')}
            className="px-10 py-5 bg-blush text-text rounded-full font-semibold hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-3 text-lg"
          >
            <Briefcase size={24} /> Work With Me
          </button>
          <button 
            onClick={() => router.push('/blog')}
            className="px-10 py-5 bg-sage text-white rounded-full font-semibold hover:bg-opacity-80 hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-3 text-lg"
          >
            <BookOpen size={24} /> Explore My Content
          </button>
        </motion.div>

        <motion.div 
          className="bg-white p-12 rounded-[3rem] shadow-sm border border-blush border-opacity-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-sm tracking-widest uppercase text-text-light mb-10 font-semibold">Brands I've Collaborated With</h3>
          <div className="flex flex-wrap justify-center gap-16 items-center">
            <motion.a 
              href="https://www.instagram.com/paperboatzero?igsh=MTViOGxveDd1dWVibg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <span className="text-4xl font-bold font-outfit text-text group-hover:text-sage transition-colors">Paperboatzero</span>
              <span className="text-sm text-text-light font-medium bg-sage bg-opacity-10 px-3 py-1 rounded-full">2 collaborations</span>
            </motion.a>
            <div className="w-1 h-12 bg-gray-200 hidden md:block rounded-full"></div>
            <motion.a 
              href="https://www.instagram.com/paperboatzero?igsh=MTViOGxveDd1dWVibg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <span className="text-4xl font-bold font-outfit text-text group-hover:text-accent transition-colors">Ivoria</span>
              <span className="text-sm text-text-light font-medium bg-accent bg-opacity-10 px-3 py-1 rounded-full">1 collaboration</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Books Showcase */}
      <section className="py-32 space-y-32 w-full cosmic-theme relative overflow-hidden shadow-2xl">
        <StarryBackground />
        
        {/* Indradhanush */}
        <motion.div 
          className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 group relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 relative w-full flex flex-col items-center justify-center p-8 gap-8 perspective-[1200px]">
            <SpinningBook 
              frontImage="/images/indradhanush.jpg" 
              backImage="/images/indradhanush-back.jpg"
              className="w-full max-w-[280px] md:max-w-[340px] aspect-[2/3]"
            />
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://amzn.in/d/01wKZVNW" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-10 py-4 bg-white text-text rounded-full text-sm font-bold shadow-xl transition-transform duration-300 relative z-20"
            >
              Read on Amazon
            </motion.a>
          </div>
          <div className="flex-1 space-y-8 text-gray-200">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-outfit text-white"
            >
              Indradhanush
            </motion.h2>
            <p className="text-xl leading-relaxed">It is a timeline of who I was becoming. Written over four years, this book holds emotions that did not arrive all at once.</p>
            <ul className="space-y-6 text-lg">
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col"
              >
                <span className="font-bold text-accent text-xl">Prem</span> 
                <span className="text-gray-300 mt-1">Where love exists in its rawest, most vulnerable form.</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col"
              >
                <span className="font-bold text-sage text-xl">Dharma</span> 
                <span className="text-gray-300 mt-1">Where thoughts turn inward.</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col"
              >
                <span className="font-bold text-blush text-xl">Satranga</span> 
                <span className="text-gray-300 mt-1">Where everything blends.</span>
              </motion.li>
            </ul>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="italic text-black font-medium text-xl border-l-4 border-accent pl-4 py-3 bg-accent bg-opacity-10 rounded-r-lg shadow-sm"
            >
              You won’t just read it. You’ll find different versions of yourself inside it.
            </motion.p>
          </div>
        </motion.div>

        {/* Nakshatra */}
        <motion.div 
          className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 group relative z-10 pb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
            <div className="flex-1 relative w-full flex flex-col items-center justify-center p-8 gap-8 perspective-[1200px]">
              <SpinningBook 
                frontImage="/images/nakshatra.jpg" 
                backImage="/images/nakshatra-back.jpg"
                className="w-full max-w-[280px] md:max-w-[340px] aspect-[2/3]"
              />
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://amzn.in/d/03MZ0oWk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-10 py-4 bg-white text-text rounded-full text-sm font-bold shadow-xl transition-transform duration-300 relative z-20"
              >
                Read on Amazon
              </motion.a>
            </div>
            <div className="flex-1 space-y-8 text-gray-200">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-outfit text-white"
              >
                Nakshatra
              </motion.h2>
              <p className="text-xl leading-relaxed">If Indradhanush was a journey across time, Nakshatra is a moment captured in intensity.</p>
              <p className="text-xl leading-relaxed">Written entirely in 2025, this book is faster, sharper, and more instinctive. It doesn’t pause to organize emotions; it lets them flow.</p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-medium border-l-4 border-sage pl-6 text-xl py-3 bg-white bg-opacity-90 text-black rounded-r-lg shadow-sm"
              >
                Each poem is accompanied by an image. Not as decoration, but as interpretation.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="italic text-gray-400 font-medium text-lg"
              >
                If Indradhanush is something you read slowly, Nakshatra is something you feel instantly.
              </motion.p>
            </div>
          </motion.div>
      </section>
    </main>

  );
}
