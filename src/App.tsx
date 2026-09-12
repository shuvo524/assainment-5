import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import type { Technology } from "./types";
import techData from "./data/technologies.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(techData);
    setLoading(false);
  }, []);

  function handleAdd(tech: Technology) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  }

  function handleRemove(id: string) {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Technology removed from stack.");
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Stack cleared.");
  }

  if (loading) {
    return <p className="text-center py-20">Loading technologies...</p>;
  }

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <TechGrid
              technologies={technologies}
              stack={stack}
              onAdd={handleAdd}
            />
          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>

      <ToastContainer position="top-right" />
      <Footer></Footer>
    </>
  );
}

export default App;