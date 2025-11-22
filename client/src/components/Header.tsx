import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center space-x-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3">
              <span className="text-2xl font-bold text-primary">HELALINK</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" data-testid="link-nav-home">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
            </Link>
            <Link href="/#articles" data-testid="link-nav-articles">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Articles
              </a>
            </Link>
            <a
              href="https://helalink.com/register.php?ref=VinM"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-create-account-header"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Create Account
              </Button>
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:hidden">
            <a
              href="https://helalink.com/register.php?ref=VinM"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-create-account-mobile"
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Join Now
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <Link href="/" data-testid="link-mobile-home">
              <a
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/#articles" data-testid="link-mobile-articles">
              <a
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Articles
              </a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
