import { Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState<"sv" | "en">("sv");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="glass-card px-4 py-2">
          <div className="flex items-center gap-2 text-neon-cyan">
            <div className="flex items-center">
              <span className="text-lg">((</span>
              <span className="text-lg">•</span>
              <span className="text-lg">))</span>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <button
          onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
          className="glass-card px-4 py-2 flex items-center gap-2 hover:border-neon-cyan/50 transition-colors"
        >
          <Globe className="w-4 h-4 text-foreground" />
          <span className="text-sm font-medium">
            {language === "sv" ? "SE Svenska" : "EN English"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
