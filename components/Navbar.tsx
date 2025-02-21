import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="text-2xl font-bold flex items-center gap-x-2"
          >
            <Briefcase />
            <p>
              Job<span className="text-muted-foreground">DB.</span>
            </p>
          </Link>
          <nav className="flex items-center gap-x-4">
            <ThemeToggle />
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
