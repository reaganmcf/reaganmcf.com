import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  tags
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const navigateToGithub = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    window.open(githubUrl, "_blank");
  };

  const cardContent = (
    <div className="flex flex-col">
      <img src={imageUrl} alt={title} className="w-full max-h-48 object-cover" />
      <div className="m-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm lg:h-12">{description.slice(0, 100)}{description.length > 100 ? '...' : ''}</p>
        <div className="flex lg:mt-0 sm:mt-4">
          <div className="grow">
            <div className="flex gap-2">
              {tags.map(tag => <Tag tag={tag} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const expandedContent = (
    <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded w-full h-auto max-h-64 object-cover" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-sm mb-6">{description}</p>
          <div className="grow"></div>
        </div>
        <button
          onClick={navigateToGithub}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition-colors duration-200"
        >
          View on GitHub
        </button>
        <button onClick={toggleExpanded}>
          close
        </button>
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        layout
        onClick={toggleExpanded}
        className="border border-gray-300 rounded cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {cardContent}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={toggleExpanded}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="fixed inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-white rounded-lg p-4 w-full max-w-3xl">
                {expandedContent}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

