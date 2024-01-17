import React from "react"

import Link from 'next/link';
import Image from "next/image"


export default function About() {
  return (
    <div className="my-10 mx-auto max-w-3xl px-4 md:px-0 sm:px-6 md:max-w-6xl flex flex-col  md:flex-row md:text-left">

      <div className="flex flex-col md:flex-row  px-4">
        <div className="md:w-1/2 md:pr-16">

          <Link
            href="/"
            className="flex flex-row space-x-2 items-center  group cursor-pointer mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-secondaryDarker">Back</span>
          </Link>

          <h1 className="text-3xl font-bold mb-6 md:text-left">
            Front-End Focused, Full-Stack Adept
          </h1>
          <p>
            Hi, I&#39;m Moaz Irfan. I&#39;ve been developing digital products for over half a decade. In my career, I&#39;ve had the opportunity to work on impactful projects for Fortune 100 companies. Authored software tools used by thousands of users. See them on <a target="_blank" rel="noreferrer" className="text-sky-400" href="https://github.com/moazirfan">GitHub</a>.
          </p>
          <br />
          <p>
            I&#39;ve always loved Computer Science and my passion for computer science naturally led me to pursue a career as a software engineer.
          </p>
          <br />
          <p>
            I focus on creating performant web applications, where I use my computer science background to craft software that is maintainable, scalable, and a pleasure to use.
          </p>
          <br />
          
        </div>

        <div className="md:w-1/2 md:flex md:justify-end">
          <Image
            src="/moaz-irfan.jpeg"
            alt="moaz-irfan"
            width={470}
            height={571}
            className="rounded"
          />
        </div>
      </div>
      
    </div>
  )
}
