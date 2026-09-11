import bannerImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-16 gap-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-600 mt-4">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <button className="btn btn-secondary rounded-lg">
            Explore Technologies
          </button>
          <button className="btn btn-outline rounded-lg">Learn More</button>
        </div>
      </div>

      <img src={bannerImg} alt="Dev Stack" className="w-full md:w-1/2" />
    </section>
  );
}

export default Hero;