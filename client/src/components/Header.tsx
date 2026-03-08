import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Programs", href: "#programs" },
    { label: "Staff", href: "#staff" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      {/* Top Info Bar */}
      <div className="bg-primary/5 border-b border-border hidden md:block">
        <div className="container flex items-center justify-between py-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+35725252444" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+357 2525 2444</span>
            </a>
            <a href="mailto:mummy-cool@live.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>mummy-cool@live.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-4 h-4" />
            <span>Skiada 4, Limassol, Cyprus</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MCK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                Mummy Cool
              </h1>
              <p className="text-xs text-muted-foreground">Kindergarten</p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-md hover:scale-105 transition-all duration-300 text-sm"
        >
          Enroll Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-center text-sm hover:shadow-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
