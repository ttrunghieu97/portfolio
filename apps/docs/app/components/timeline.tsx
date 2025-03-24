import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "../assets/lottie/study.json";
import AnimationLottie from "./helper/animation-lottie";
import GlowCard from "./helper/glow-card";

export const timeline = [
  {
    id: 1,
    title: 'Unemployment',
    company: "",
    duration: "(Jan 2015 - May 2021)"
  },
  {
    id: 2,
    title: 'Student ',
    company: "Tan Trao University",
    duration: "(May 2021 - May 2025)"
  },
  {
    id: 3,
    title: 'Looking for Job ',
    company: "",
    duration: "(May 2021 - Present)"
  },
]

export default function Timeline() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Timeline
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} width="100%" />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {timeline.map((timeline) => (
                <GlowCard
                  key={timeline.id}
                  identifier={`timeline-${timeline.id}`}
                >
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {timeline.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {timeline.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {timeline.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
