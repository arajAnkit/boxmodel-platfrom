"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Moon,
  Sun,
  Menu,
  X,
  BookOpen,
  Gamepad2,
  GraduationCap,
  FileText,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-teal-400 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-fuchsia-600 to-teal-500 bg-clip-text text-transparent">
              BoxMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-foreground hover:text-fuchsia-500 transition-colors",
                pathname === "/" && "text-fuchsia-500"
              )}
            >
              Home
            </Link>
            <Link
              href="/theory"
              className={cn(
                "text-foreground hover:text-teal-500 transition-colors flex items-center space-x-1",
                pathname === "/theory" && "text-teal-500"
              )}
            >
              <span>Theory</span>
            </Link>
            <Link
              href="/demos"
              className={cn(
                "text-foreground hover:text-amber-500 transition-colors flex items-center space-x-1",
                pathname === "/demos" && "text-amber-500"
              )}
            >
              <span>Demos</span>
            </Link>
            <Link
              href="/game"
              className={cn(
                "text-foreground hover:text-fuchsia-500 transition-colors flex items-center space-x-1",
                pathname === "/game" && "text-fuchsia-500"
              )}
            >
              <span>Game</span>
            </Link>
            <Link
              href="/cheatsheet"
              className={cn(
                "text-foreground hover:text-teal-500 transition-colors flex items-center space-x-1",
                pathname === "/cheatsheet" && "text-teal-500"
              )}
            >
              <span>Cheat Sheet</span>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-fuchsia-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/theory"
                className="text-foreground hover:text-teal-500 transition-colors flex items-center space-x-1"
                onClick={() => setIsOpen(false)}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Theory</span>
              </Link>
              <Link
                href="/demos"
                className="text-foreground hover:text-amber-500 transition-colors flex items-center space-x-1"
                onClick={() => setIsOpen(false)}
              >
                <Zap className="w-4 h-4" />
                <span>Demos</span>
              </Link>
              <Link
                href="/game"
                className="text-foreground hover:text-fuchsia-500 transition-colors flex items-center space-x-1"
                onClick={() => setIsOpen(false)}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Game</span>
              </Link>
              <Link
                href="/cheatsheet"
                className="text-foreground hover:text-teal-500 transition-colors flex items-center space-x-1"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="w-4 h-4" />
                <span>Cheat Sheet</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
