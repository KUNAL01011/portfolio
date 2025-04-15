import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const sendContactForm = async ({ name, email, message }) => {
    console.log(name,email,email)
    try {
      const res = await fetch("https://mail-sender-d4no.onrender.com/api/v1/mail-sender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didnt receive your message",
          type: "danger",
        });
        hideAlert();
      } else {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
          hideAlert();
        }, [3000]);

      }

      return data; // you can show this in a toast or UI
    } catch (err) {
      setIsLoading(false);
      setCurrentAnimation("idle");
      showAlert({
        show: true,
        text: "I didnt receive your message",
        type: "danger",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    if(form){
      sendContactForm(form);
    }
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-full">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1  min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
