import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-20">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MCK</span>
              </div>
              <h3 className="font-bold text-lg">Mummy Cool</h3>
            </div>
            <p className="text-sm text-background/80">
              Premium kindergarten education in Limassol, Cyprus. Creating nurturing environments for young learners to grow and thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-background/80 hover:text-background transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#programs" className="text-background/80 hover:text-background transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#staff" className="text-background/80 hover:text-background transition-colors">
                  Our Staff
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+35725252444" className="text-background/80 hover:text-background transition-colors">
                  +357 2525 2444
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:mummy-cool@live.com" className="text-background/80 hover:text-background transition-colors">
                  mummy-cool@live.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Skiada 4, Agios Spyridonas<br />
                  Limassol, Cyprus
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Hours</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <span className="font-medium">Mon - Fri:</span><br />
                6:45 AM - 5:30 PM
              </li>
              <li>
                <span className="font-medium">Closed:</span><br />
                Weekends & Holidays
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-background/70">
            © {currentYear} Mummy Cool Kindergarten. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
