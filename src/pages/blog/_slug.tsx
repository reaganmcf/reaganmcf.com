import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import matter from "front-matter";

import PageLayout from "../layout";
import MenuBar from "../../components/menu-bar";
import Tag from "../../components/tag";
import { IBlogPostMetaData } from "../../components/blog-card";

const BlogPost = () => {
  const location = useLocation();
  const slug = location.pathname.split("/").at(-1);

  const [attributes, setAttributes] = useState<IBlogPostMetaData | null>(null);

  const [markdown, setMarkdown] = useState<string | null>(null);

  const loadBlog = async () => {
    const markdown = await fetch(`/blog_posts/${slug}.md`).then((res) =>
      res.text()
    );

    const matterResult = matter(markdown);
    setAttributes(matterResult.attributes as any);

    const trimmedMd = markdown
      .split("\n")
      .filter((_, i) => i > matterResult.bodyBegin - 2)
      .join("\n");

    console.log(trimmedMd);

    setMarkdown(trimmedMd);
  };

  useMemo(() => {
    loadBlog();
  }, []);

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="font-sans min-h-screen w-screen max-w-screen-lg mx-auto pb-32 px-8"
      >
        <header className="flex justify-end py-8">
          <MenuBar />
        </header>
        <div className="bg-white rounded-lg border border-gray-300 p-8 shadow">
          {attributes != null ? (
            <div className="pb-4 flex flex-col gap-4">
              <h1 className="text-4xl font-bold">{attributes.title}</h1>
              <p className="italic">Read time: {attributes.readingTime} min</p>
              <div className="flex gap-2">
                {(attributes.tags || []).map((tag) => (
                  <Tag tag={tag} />
                ))}
              </div>
            </div>
          ) : null}
          {markdown == null ? <div>Loading...</div> : null}
          {markdown != null ? (
            <article className="prose prose-sm md:prose-lg max-w-none mx-auto ">
              <ReactMarkdown
                children={markdown}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        language={match[1]}
                        showLineNumbers
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </article>
          ) : null}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default BlogPost;
