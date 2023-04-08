import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./../../components/project-card";
import PageLayout from "../layout";
import MenuBar from "../../components/menu-bar";
import BlogPreview, { IBlogPostMetaData } from "../../components/blog-card";

const blogPosts: IBlogPostMetaData[] = [
  {
    title: "Memory Arenas: A Rust Programmer's Best Friend",
    date: new Date(Date.parse("2021-07-17")),
    description: "Why the memory arena is one of my favorite data structures and how I use it in nakala",
    slug: 'memory-arenas',
    tags: ["rust", "plt", "data structures"],
    readingTime: 10
  },
  {
    title: "4 months of Rust - what I've learned",
    date: new Date(Date.parse("2021-07-17")),
    description: "I started learning and using Rust just under 4 months ago. After reading a few books, watching hundreds of videos, and many projects later, here is what I have learned",
    slug: 'four_months_of_rust',
    tags: ["rust", "review", "programming"],
    readingTime: 10
  },
];


const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="font-sans min-h-screen"
      >
        <header className="flex justify-end p-8">
          <MenuBar />
        </header>

        <section className="p-8">
          <h1 className="text-4xl font-bold">Hi! 👋</h1>
          <p className="mt-4 text-lg">
            My name is Reagan McFarland. I'm a professional software engineer in the finance industry with a
            passion for programming languages, and solving complicated problems.
          </p>
        </section>

        <section className="p-8">
          <div>
            <h2 className="text-2xl font-semibold">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {blogPosts.map((post) => (
                <BlogPreview
                  key={post.slug}
                  {...post}
                />
              ))}
            </div>
          </div>
        </section>


        <section className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-lg mt-4">
              Here are some of my projects that I've been working on lately.
              Feel free to take a look and explore. If you'd like to see more,
              check out the{" "}
              <a
                href="/projects"
                className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Projects page
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Nakala"
              description="A dynamic programming language designed to feel familiar and be fun to use, written in Rust"
              imageUrl="/nakala.png"
              githubUrl="https://github.com/nakala-lang/nakala"
              tags={["rust", "programming languages", "plt"]}
            />
            <ProjectCard
              title="chipmunk"
              description="A CHIP-8 Emulator that can target different platform backends. Written during my live coding streams on Twitch"
              imageUrl="/chipmunk.png"
              githubUrl="https://github.com/example/project2"
              tags={["rust", "emulators", "low-level"]}
            />
            <ProjectCard
              title="Project 3"
              description="A short description of project 3."
              imageUrl="https://via.placeholder.com/150"
              githubUrl="https://github.com/example/project3"
              tags={["Rust", "Programming Languages"]}
            />
            <ProjectCard
              title="Project 4"
              description="A short description of project 4."
              imageUrl="https://via.placeholder.com/150"
              githubUrl="https://github.com/example/project4"
              tags={["Rust", "Programming Languages"]}
            />
          </div>
        </section>

      </motion.div>
    </PageLayout>
  );
};

export default HomePage;
