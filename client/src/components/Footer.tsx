import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card-foreground text-card border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">HELALINK</h3>
            <p className="text-card/80 text-sm leading-relaxed">
              Your success partner! Earn online using your smartphone from the comfort of your home, place, school or from anywhere you are.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-card/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#articles" className="text-card/80 hover:text-primary transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="https://helalink.com/register.php?ref=VinM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card/80 hover:text-primary transition-colors"
                >
                  Create Account
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/254713332676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card/80 hover:text-primary transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  +254 713 332 676
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-card/80">support@helalink.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-card/80">East Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 mt-8 pt-8 text-center text-sm text-card/60">
          <p>&copy; {new Date().getFullYear()} HELALINK Agencies. All rights reserved.</p>
          <p className="mt-2">Official Launch: 13th September 2025 @ 2PM E.A.T</p>
          <p className="mt-4">
            Blog made by{" "}
            <a
              href="https://wa.me/254741033338"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline transition-colors font-semibold"
              data-testid="link-footer-creator"
            >
              this guy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
