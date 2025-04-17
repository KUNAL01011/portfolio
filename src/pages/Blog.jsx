import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const subdomains = ["kunal-kumar.hashnode.dev"];

  const fetchBlogsFromAll = async () => {
    const query = `
      query GetPosts($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                title
                brief
                url
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    `;

    const allPosts = [];

    for (const subdomain of subdomains) {
      try {
        const res = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, variables: { host: subdomain } }),
        });

        const data = await res.json();
        const posts = data?.data?.publication?.posts?.edges || [];
        allPosts.push(...posts);
      } catch (error) {
        console.error(`Error fetching from ${subdomain}:`, error);
      }
    }

    setBlogs(allPosts);
  };

  useEffect(() => {
    fetchBlogsFromAll();
  }, []);

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Blog's
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Welcome to my blog — a space where I share what I learn as a
          developer. From solving real-world problems to exploring new tech and
          building cool projects, this blog is all about documenting my journey
          and giving back to the dev community. Whether it's coding tips,
          debugging stories, or just thoughts on tech, you’ll find it all here!
        </p>
      </div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-20 gap-16 ">
          {blogs.map((blog, index) => (
            <div key={index} className="pb-20">
              <div className="w-full h-[100%] m-auto">
                {blog.node.coverImage?.url && (
                  <img
                    src={blog.node.coverImage.url}
                    alt={blog.node.title}
                    className="h-[90%] flex justify-center"
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold font-black-500">
                {blog.node.title}
              </h3>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={blog.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Learn more
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-8">
          <p className="font-semibold text-3xl">Blog not found...</p>
        </div>
      )}
    </section>
  );
};

export default Blog;
