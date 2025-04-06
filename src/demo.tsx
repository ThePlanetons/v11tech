import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.max(0.8, 1 - scrollY / 500);
  const opacity = Math.max(0, 1 - scrollY / 300);
  const backgroundY = scrollY * 0.5;

  return (
    <>
      <section
        className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80')",
          backgroundAttachment: "fixed",
          backgroundPosition: `center ${-backgroundY}px`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "background-position 0.2s ease-out",
        }}
      >
        {/* Overlay for green tint */}
        <div className="absolute inset-0 bg-[#06b453] opacity-80 z-0" />

        <div
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
          className="text-center text-white backdrop-blur-sm p-6 rounded-xl relative z-10"
        >
          <p className="text-lg mb-2">Our Pricing</p>
          <h1 className="text-4xl sm:text-6xl font-bold max-w-4xl mx-auto bg">
            Transparent Plans for Every Need <br />
            Transparent Pricing Plans, Find the Perfect Fit for Your Needs
          </h1>
        </div>
      </section>

      <section className="h-screen bg-white flex items-center justify-center">
        <p className="text-xl">Scroll down content goes here</p>
      </section>
    </>
  );
};

export default HeroSection;
