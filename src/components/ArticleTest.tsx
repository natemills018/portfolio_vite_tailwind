import React from "react";

// Define the types for the props
type ArticleProps = {
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
  onClick?: () => void;
};

const Article: React.FC<ArticleProps> = ({
  title,
  author,
  date,
  content,
  image,
  onClick,
}) => {
  return (
    <article
      className="max-w-3xl mx-auto overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
      onClick={onClick}
    >
      {/* Article Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64"
        />
      )}

      {/* Article Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        {/* Author and Date */}
        <div className="my-2 text-sm text-gray-500">
          <span>By {author}</span> | <span>{new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Content */}
        <p className="mt-4 text-gray-700 line-clamp-3">{content}</p>

        {/* Read More Button */}
        <button className="mt-4 text-blue-500 hover:underline">
          Read more
        </button>
      </div>
    </article>
  );
};

export default Article;
