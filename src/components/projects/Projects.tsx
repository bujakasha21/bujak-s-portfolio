import React, { Key, useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import MightyWeb from "@/assets/projects/Migthy.png";
import CrownWeb from "@/assets/projects/Crown.png";
import SportsBlog from "@/assets/projects/sports-blog.png";
import CoffeWeb from "@/assets/projects/coffe.png";
import GitHub from "@/assets/icons/github.png";
import Website from "@/assets/icons/world-wide-web.png";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

type Data = {
  id: Key;
  description: string;
  websiteImg: StaticImageData;
  name: string;
  class: string;
  github: StaticImageData;
  githubRepo: string;
  website: StaticImageData;
  websiteURL: string;
};

const Project: Data[] = [
  {
    id: 1,
    description:
      "Mighty Web App is a E-Commerce clothing shop, where you can make your own account and buy clothes from fakestoreapi.com. I've used React.js, React Redux, Tailwind CSS, Firebase, Framer Motion",
    websiteImg: MightyWeb,
    name: "Mighty App",
    class: "perspective-left",
    github: GitHub,
    githubRepo: "https://github.com/bujakasha21/Mighty-Shop-v2/tree/main",
    website: Website,
    websiteURL: "https://mighty-shop.netlify.app/",
  },
  {
    id: 2,
    description:
      "Logyy is the website of the digital agency I co-founded with my partner, built using Next.js and TypeScript, along with Tailwind CSS. In addition to showcasing our services and portfolio, the website also features informative blog posts, client testimonials, and case studies highlighting our successful projects and collaborations.",
    websiteImg: CoffeWeb,
    name: "Logyy",
    class: "perspective-right",
    github: GitHub,
    githubRepo: "https://github.com/Logyy-Dev/logyy",
    website: Website,
    websiteURL: "https://logyy-nekultivisans-projects.vercel.app/",
  },
  {
    id: 3,
    description:
      "Sport's Blog Website is an Blog Website, where i practiced my skills for blog sites and improved them. It's done with Next.js, TypeScript, Tailwind CSS",
    websiteImg: SportsBlog,
    name: "Sport's Blog",
    class: "perspective-left third",
    github: GitHub,
    githubRepo: "https://github.com/bujakasha21/WebBlog",
    website: Website,
    websiteURL: "https://sports-blogs.netlify.app/",
  },
  {
    id: 4,
    description:
      "Crown App is my first clothing shop app. It has functionality of making profile with Firebase and possibility of payment with Stripe JS. It's done with React JS, TypeScript and Styled Components",
    websiteImg: CrownWeb,
    name: "Crown App",
    class: "perspective-right fourth",
    github: GitHub,
    githubRepo: "https://github.com/bujakasha21/clothing-app",
    website: Website,
    websiteURL: "https://clothing-app-crwn2.netlify.app/",
  },
];

const Projects = () => {
  let viewportHeight: number;

  const triggering = useRef(null);
  const perspectiveRef = useRef(null);
  const animFirst = useRef(null);
  const animSecond = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    viewportHeight = window.innerHeight;
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: triggering.current!,
            start: "top top",
            end: `${viewportHeight * 4} bottom`,
            scrub: 1,
            pin: true,
            // snap: 1 / Project.length,
          },
        })
        .to(perspectiveRef.current, {
          transform: "translate3d(0, 0, 55rem)",
        })
        .set(
          animFirst.current,
          {
            opacity: 0,
          },
          0.25
        )
        .set(
          animSecond.current,
          {
            opacity: 0,
          },
          0.55
        );
    });

    return () => ctx.revert();
  }, []);
  //
  return (
    <div id="projects" className="">
      <div ref={triggering} className="perspective bg-secondaryCol">
        <div className="absolute w-full">
          <h1 className="font-bold text-center text-xl md:text-4xl text-darkerCol py-[8rem]">
            {`<My Projects />`}
          </h1>
        </div>

        <div ref={perspectiveRef} className="perspective-inner">
          {Project.map((project) => {
            const ref = project.id === 0 ? animFirst : animSecond;

            return (
              <div
                ref={ref}
                key={project.id}
                className={`${project.class} rounded-md bg-darkerCol`}
              >
                <Image
                  className="w-full rounded-t-md"
                  src={project.websiteImg}
                  alt={project.name}
                />
                <div className="flex flex-col p-1 md:p-4 gap-y-2">
                  <h3 className="font-bold text-lighterCol text-xs md:text-xl">
                    {project.name}
                  </h3>
                  <p className="text-[5px] text-secondaryCol md:text-[10px]">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-x-3">
                    <Link href={project.githubRepo}>
                      <Image src={project.github} alt="" className="w-6" />
                    </Link>
                    <Link href={project.websiteURL}>
                      <Image src={project.website} alt="" className="w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
