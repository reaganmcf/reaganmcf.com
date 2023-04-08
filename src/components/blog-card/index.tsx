import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tag from './../tag'; // Assuming you have created a 'Tag' component earlier

export interface IBlogPostMetaData {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  date: Date;
  readingTime: number;
}

const BlogPreview: React.FC<IBlogPostMetaData> = ({
  title,
  description,
  slug,
  tags,
  date,
  readingTime,
}) => {
  const navigate = useNavigate();

  const navigateToPost = () => {
    navigate(`/blog/${slug}`);
  };

  return (
    <motion.div
      onClick={navigateToPost}
      className="border border-gray-300 rounded p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
      <div className="grow"></div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="mt-2 text-sm flex justify-between">
        <span className="italic">{date.toLocaleDateString()}</span>
        <span className="italic">Reading time: {readingTime} min</span>
      </div>
    </motion.div>
  );
};

export default BlogPreview;

