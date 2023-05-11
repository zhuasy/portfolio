"use client";

import Image from "next/image";
import Link from "next/link";
import ResumeItem from "../components/resumeItem";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section id="#home">
        <h1 className="pt-4 font-inter text-center text-10xl font-extrabold tracking-tightest leading-none select-none">
          <span className="relative block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-start to-end">
              Alex Zhu
            </span>
          </span>
        </h1>
        <h2 className="pb-14 font-inter text-center text-7xl font-extrabold tracking-tightest leading-none select-none">
          <span className="relative block">developer.</span>
          <span className="relative block">photographer.</span>
          <span className="relative block">home cook.</span>
        </h2>

        <div className="flex space-x-20">
          <div>
            <h2 className="font-inter text-3xl font-bold">
              <span>Hey! </span>
              <motion.div
                style={{ display: "inline-block" }}
                initial={{ originY: 0.8, originX: 0.8 }}
                animate={{ rotateZ: [5, -10, 5] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <span>👋</span>
              </motion.div>
              <span> I&apos;m Alex.</span>
            </h2>
            <p className="font-inter text-2xl">
              <span className="relative block">
                <span className="text-gray-300">A senior at the </span>
                <span className="text-white">
                  University of Michigan-Ann Arbor.
                </span>
              </span>
              <span className="relative block">
                <span className="text-gray-300">
                  I&apos;m experienced with{" "}
                </span>
                <span className="text-white">Backend</span>
                <span className="text-gray-300">, </span>
                <span className="text-white">Networking</span>
                <span className="text-gray-300">, and </span>
                <span className="text-white">DevOps</span>
                <span className="text-gray-300">.</span>
              </span>
              <span className="relative block">
                <span className="text-gray-300">
                  Recently, I&apos;ve been working with{" "}
                </span>
                <span className="text-white">Python </span>
                <span className="text-gray-300">and </span>
                <span className="text-white">C++</span>
                <span className="text-gray-300">.</span>
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-1 text-white hover:bg-white hover:text-black font-bold px-4 my-5 rounded">
              Get in touch!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
