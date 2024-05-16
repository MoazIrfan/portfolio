import { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { CONFIG } from '@/config';
import { getViewsCount } from '@/lib/queries';

import ViewCounter from './posts/view-counter';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-secondaryDarker"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      href={`/posts/${slug}`}
      className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col space-y-2">
        <span className="text-secondaryDark">{name}</span>
        <span className="text-secondaryDarker">
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </span>
      </div>

      <ArrowIcon />
    </Link>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

const socialBorder = `border group hover:border-secondaryDarker duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;
export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 gap-12 mb-8">
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-row items-center space-x-3">
              <Image
                src={CONFIG.headshot}
                alt=""
                width={200}
                height={200}
                className="rounded-full h-[48px] w-[48px]"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{CONFIG.name}</span>
                <span className="text-secondaryDarker">{CONFIG.title}</span>
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <a
                href="https://github.com/moazirfan"
                target="_blank"
                className={`${socialBorder}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="text-secondaryDarker group-hover:text-secondaryDark duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/moazirfan/"
                target="_blank"
                className={`${socialBorder}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="text-secondaryDarker group-hover:text-secondaryDark duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/MoazIrfan"
                target="_blank"
                className={`${socialBorder}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="text-secondaryDarker group-hover:text-secondaryDark duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <span className="text-secondaryDark leading-6 mt-10 mb-5">
            {CONFIG.description}
            
          </span>
          <Link href="/about" className=" text-sky-400 flex flex-row  items-center underline underline-offset-4">
              About Me
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-sky-500 ml-1"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                />
              </svg>
            
          </Link>
            
          
        </div>

        <div className="flex flex-col space-y-4">
          <span className="font-semibold md:px-6">Recent Projects</span>
          <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2">
            {CONFIG.projects.map((project, idx) => {
              if (project.featured) {
                return (
                  <Link
                    key={idx}
                    href={project.link}
                    target="_blank"
                    className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-row space-x-4">
                      <Image
                        src={project.image}
                        alt=""
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px]"
                      />
                      <div className="flex flex-col">
                        <span className="text-secondaryDark">
                          {project.name}
                        </span>
                        <span className="text-secondaryDarker">
                          {project.description}
                        </span>
                      </div>
                    </div>
                    <ArrowIcon />
                  </Link>
                );
              }
            })}
          </div>
          {/* <Link
            href="/projects"
            className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer"
          >
            <span className="text-secondary">All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="text-secondary group-hover:translate-x-1 duration-200"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                clipRule="evenodd"
              />
            </svg>
          </Link> */}
        </div>

        <div className="flex flex-col space-y-4">
          <span className="font-semibold md:px-6">Latest Articles</span>
          <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2">
            {/* <BlogLink slug="hello-world" name="Hello, World!" /> */}
            {CONFIG.posts.map((post, idx) => {
                return (
                  <Link
                    key={idx}
                    href={post.link}
                    target="_blank"
                    className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-row space-x-4">
                      <Image
                        src={post.image}
                        alt=""
                        width={250}
                        height={200}
                        className="w-[196px] h-[120px]"
                      />
                      <div className="flex flex-col">
                        <span className="text-secondaryDark">
                          {post.title}
                        </span>
                        <span className="text-secondaryDarker">
                          {post.date}
                        </span>
                      </div>
                    </div>
                    <ArrowIcon />
                  </Link>
                );
            })}
          </div>
          {/* <Link
            href="/posts"
            className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer"
          >
            <span className="text-secondary">All Posts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="text-secondary group-hover:translate-x-1 duration-200"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                clipRule="evenodd"
              />
            </svg>
          </Link> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
