import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SocialGallerySection from "@/components/SocialGallerySection";
import LiveChat from "@/components/LiveChat";
import Footer from "@/components/Footer";
import NowPlayingBar from "@/components/NowPlayingBar";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>

      {/* Moving mesh gradient background */}
      <div className="mesh-gradient-bg" aria-hidden="true"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main id="main-content" tabIndex={-1} className="px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <HeroSection />
            <AboutSection />
            <ScheduleSection />
            <SocialGallerySection />
            <LiveChat />
          </div>
        </main>
        <Footer />
        <NowPlayingBar />
        <FloatingChatButton />
      </div>
    </div>
  );
};

export default Index;
