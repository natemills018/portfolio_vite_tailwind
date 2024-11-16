import React from "react";
import Article from "./ArticleTest";

const App: React.FC = () => {
  // Define the article data with the appropriate types
  const articleData = {
    title: "React Components Explained",
    author: "Jane Doe",
    date: "2024-11-15",
    content:
      "Understanding components in React is crucial for building scalable web applications...",
    image: "https://via.placeholder.com/600x400",
  };

  // Function to handle the click event
  const handleArticleClick = (): void => {
    console.log("Article clicked!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Pass props to the Article component */}
      <Article {...articleData} onClick={handleArticleClick} />
    </div>
  );
};

export default App;
