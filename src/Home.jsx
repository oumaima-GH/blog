import { useState } from "react";
import BlogList from "./BlogList";
import "./index.css";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog Post 1", content: "Lorem ipsum...", author: "Auth1", id: 1 },
    { title: "Blog Post 2", content: "Lorem ipsum...", author: "Auth2", id: 2 },
    { title: "Blog Post 3", content: "Lorem ipsum...", author: "Auth1", id: 3 },
  ]);

  const handleDelete = (id) => {
    const deletedBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(deletedBlog);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Auth1")}
        title="Author1's Blogs"
      />
    </div>
  );
};

export default Home;
