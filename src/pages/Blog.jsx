import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { blogs } from "../constants";
import CTA from "../components/CTA";

const Blog = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Blog's
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="overflow-hidden text-ellipsis">
          Welcome to my blog — a space where I share what I learn as a
          developer. From solving real-world problems to exploring new tech and
          building cool projects, this blog is all about documenting my journey
          and giving back to the dev community. Whether it's coding tips,
          debugging stories, or just thoughts on tech, you’ll find it all here!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {blogs.map((blog) => (
          <div className="lg:w-[400px] w-full" key={blog.name}>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {blog.name}
              </h4>
              <p className="mt-2 text-slate-500">{blog.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Learn more...
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Blog;
