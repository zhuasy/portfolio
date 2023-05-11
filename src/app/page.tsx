"use client";

import DiscordStatus from "@/components/discordStatus";
import Image from "next/image";
import Link from "next/link";
import ResumeItem from "../components/resumeItem";
import { motion } from "framer-motion";
import { useLanyard } from "react-use-lanyard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8">
          <h1 className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold text-center">
            <span className="block">
              Hey!&nbsp;
              <motion.div
                style={{ display: "inline-block" }}
                initial={{ originY: 0.8, originX: 0.8 }}
                whileHover={{ rotateZ: [5, -10, 5] }}
                transition={{
                  repeat: 1,
                  repeatType: "reverse",
                  duration: 0.75,
                }}
              >
                👋
              </motion.div>
            </span>
            <span className="block">
              <span>I&apos;m&nbsp;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-start to-end">
                Alex Zhu
              </span>
            </span>
          </h1>

          <div>
            <p className="font-inter max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl text-center">
              <span>
                <span>A senior at the&nbsp;</span>
                <span className="text-black dark:text-white">
                  University of Michigan-Ann Arbor.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
