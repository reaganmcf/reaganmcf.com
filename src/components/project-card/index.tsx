import React from "react";
import { motion } from "framer-motion";
import Tag from "../tag";

interface IProjectCard {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  tags,
}) => {
  const navigateToGithub = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    window.open(githubUrl, "_blank");
  };

  return (
    <motion.div
      layout
      onClick={navigateToGithub}
      className="border border-gray-300 rounded cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col">
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-48 object-cover border-b border-b-slate-200"
        />
        <div className="m-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm lg:h-12">
            {description.slice(0, 100)}
            {description.length > 100 ? "..." : ""}
          </p>
          <div className="flex lg:mt-0 sm:mt-4">
            <div className="grow">
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <Tag tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
