"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import India1 from "./India1";
import India2 from "./India2";
import India3 from "./India3";

const tabs = [
  { id: "bridge", label: "Bridge Projects" },
  { id: "track", label: "Track Projects" },
  { id: "plants", label: "Plants" },
];

export default function IndiaBusinessSection() {
  const [activeTab, setActiveTab] = useState("bridge");
  const tabIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animation variants
  const slideInFromLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInScale: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Automatically cycle through tabs
  const changeTabAutomatically = () => {
    tabIndexRef.current = (tabIndexRef.current + 1) % tabs.length;
    setActiveTab(tabs[tabIndexRef.current].id);
  };

  // Setup auto-switch on mount
  useEffect(() => {
    intervalRef.current = setInterval(changeTabAutomatically, 5000); // every 5s
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Manual tab click resets timer
  const handleManualTabChange = (id: string, index: number) => {
    setActiveTab(id);
    tabIndexRef.current = index;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(changeTabAutomatically, 5000);
    }
  };

  return (
    <section className="w-full min-h-fit py-20 px-4 flex justify-center items-center bg-[var(--bgcolour)] font-monte">
      <div className="w-full max-w-7xl flex flex-col mx-auto">
        <nav className="flex gap-4 mb-12 px-5 md:px-0 font-raleway font-normal">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleManualTabChange(tab.id, index)}
              className={`w-[100px] h-[30px] sm:w-[130px] sm:h-[30px] lg:w-[161px] lg:h-[42px] rounded-2xl text-xs md:text-sm lg:text-lg transition-colors duration-300
                ${activeTab === tab.id
                  ? "bg-textorange text-white"
                  : "border border-[var(--textorange)] text-textorange hover:bg-[var(--bgcolour)]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {/* // 8 rem  */}
        <div className="flex flex-col lg:flex-row gap-[8rem] sm:gap-[16rem] lg:gap-[4rem]">
          {/* Left - India Map (Fixed) */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-[320px] h-[300px] lg:h-auto sm:w-[400px] lg:w-[480px]">
              {/* {activeTab === "bridge" ?
              <India1/> : activeTab=== "track"?   <India2/>    : <India3/>} */}
              <Image
                src={
                  activeTab === "bridge"
                    ? "/BridgeMap.gif"
                    : activeTab === "track"
                      ? "/TrackMap.gif"
                      : "/FactoryMap.gif"
                }
                alt="Map of India highlighting selected states with icons representing business locations"
                width={480}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right - Content (Animated) */}
          <div className="flex flex-col px-4 md:px-0 justify-start flex-1 md:ml-7 -mt-18">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInFromLeft}
              className="text-center md:text-left mt-4"
            >
              <h2 className="text-3xl font-semibold font-raleway text-textblue mb-3">
                <span>Busin</span>
                <span className="text-textorange">ess</span>
              </h2>
              <h3 className="text-[28px] font-monte font-medium text-textblue mb-6">
                Building Pan-India Presence
              </h3>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInFromLeft}
              className="text-sm font-medium text-textblue max-w-3xl mb-12 leading-relaxed lg:leading-[38px] text-justify "
            >
              We here at Anjali Elastomers Ltd. believe in the power of
              innovation to change the way we interact, connect, and prosper.
              Since our beginnings, we have been at the vanguard of crafting the
              future of transportation infrastructure, motivated by a rent-free
              pursuit of excellence and a dedication to create value for all
              stakeholders.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInScale}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 max-w-4xl"
            >
              <StatItem
                number={175}
                unit="KMS TRACKS"
                description="Our Projects include critical rail link connectivity projects and several metro projects. For linking mobility with daily lives."
              />
              <StatItem
                number={60}
                unit="BRIDGES"
                description="Our Projects brought forward mobility and connectivity connecting lands surfaces, hilly terrains, water bodies and cities."
              />
              <StatItem
                number={15}
                unit="YEARS OF EXPERIENCE"
                description="Our extensive history in manufacturing world-class items fosters security and safety as the first priority towards our GMP."
              />
              <StatItem
                number={4}
                unit="MANUFACTURING PLANTS"
                description="We operate across 4 plants in the India. Providing us the brand-width to accommodate bespoke and turn-key solutions."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  number,
  unit,
  description,
}: {
  number: number;
  unit: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);
  const animatedNumber = useCountUp(number, isVisible, 2000);

  return (
    <div className="flex gap-2 items-start" ref={ref}>
      <div className="text-textorange font-bold text-4xl w-36 break-words text-right">
        <div className="flex items-baseline-last justify-end gap-2">
          {animatedNumber}
          <Image
            src="/send.png"
            alt="send"
            width={25}
            height={4}
            className="animate-blink"
          />
        </div>
        <div className="uppercase text-sm font-semibold text-textblue mb-1">
          {unit}
        </div>
      </div>
      <div className="border-l-2 border-gray-400 pl-4 flex-1">
        <p className="text-xs font-medium text-textblue text-justify leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}

function useCountUp(target: number, start: boolean, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      // When not visible, reset the count if you want it to start from 0 every time
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      if (start) {
        // check if it should still be running
        setCount(Math.floor(percentage * target));
        if (progress < duration) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, start]);

  return count;
}

function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
