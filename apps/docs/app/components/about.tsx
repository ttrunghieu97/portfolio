import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function About() {
  return (
    <>

      <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
        <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute -top-[98px] -z-10"
        />

        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Hello, <br />
              This is <span className=" text-pink-500">Hieu - Te Trung</span>
              {` , I'm a `}
              <span className=" text-[#16f2b3]">Bachelor of Information Technology</span>
            </h1>
            <h2 className="text-lg text-[#8b98a5] mt-4 lg:mt-6">
              I'm a recent graduate passionate about computer vision and have written several articles on the topic using Python. Besides, I enjoy developing web applications with Next.js and TypeScript, as well as exploring DevOps and managing servers. I love experimenting with new technologies, optimizing deployments, and building high-performance applications. Always eager to take on new challenges and expand my skill set!
            </h2>
            <div className="my-12 flex items-center gap-5">
              <Link
                href="https://github.com/ttrunghieu97"
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ttrunghieu97/"
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
              <Link
                href="https://www.facebook.com/ttrunghieu97/"
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                href="https://x.com/ttrunghieu97"
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={30} />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={16} />
                </button>
              </Link>

              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                target="_blank"
                href="https://drive.google.com/"
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src='/profile.png'
              width={550}
              height={550}
              alt="ttrunghieu97"
            />
          </div>
        </div>
      </section>
    </>
  );
}
