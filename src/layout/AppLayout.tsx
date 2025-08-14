// layout/AppLayout.tsx
import { SidebarProvider } from "../context/SidebarContext";
import { Outlet } from "react-router-dom"; // ← use react-router-dom here
import AppHeader from "./AppHeader";

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        {/* Optional: make the header sticky */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
          <AppHeader />
        </div>

        <main className="flex-1 p-4 md:p-6 mx-auto w-full max-w-screen-2xl">
          {/* If you're using Tailwind arbitrary values, prefer max-w-[--breakpoint-2xl] */}
          {/* e.g. className="flex-1 p-4 md:p-6 mx-auto w-full max-w-[--breakpoint-2xl]" */}
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
