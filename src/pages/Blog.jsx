import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const subdomains = [
    "sandeepatel010101.hashnode.dev",
    "sandeepatel010.hashnode.dev",
    "sandeepatel01.hashnode.dev",
    "sandeepatel0.hashnode.dev",
  ];

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
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

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
    </section>
  );
};

export default Blog;
