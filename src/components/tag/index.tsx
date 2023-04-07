import React from 'react';

interface ITag {
  tag: string;
}

const colors = [
  'bg-red-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-pink-400',
];

const Tag: React.FC<ITag> = ({ tag }) => {
  const getColor = () => {
    const hashCode = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    };

    const index = Math.abs(hashCode(tag) % colors.length);
    return colors[index];
  };

  const colorClass = getColor();

  return (
    <div
      className={`text-white text-xs font-bold py-1 px-2 rounded ${colorClass}`}
    >
      {tag}
    </div>
  );
};

export default Tag;

