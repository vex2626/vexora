import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FloatingLines from "../components/FloatingLines";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Services, Products, and Courses moved to their own pages

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-slate-100">
      <Background />
      <Navbar />
      <div className="relative">
        <Hero />
        <FloatingLines
          linesGradient={["#e947f5","#2f4ba2","#2fe1d6"]}
          topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
        />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
