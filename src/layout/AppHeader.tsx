// layout/AppHeader.tsx
import { Link } from "react-router-dom"; // ← make sure it's react-router-dom
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";

const AppHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Left: Title (kept your exact spelling) */}
        <Link
          to="/"
          className="text-base md:text-lg font-semibold tracking-wide text-gray-900 dark:text-white"
        >
          United Millitary Sports
        </Link>

        {/* Right: Color switcher */}
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default AppHeader;
