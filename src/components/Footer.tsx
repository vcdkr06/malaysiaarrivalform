const Footer = () => {
  return (
    <footer className="py-12 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-primary-foreground font-bold text-sm uppercase tracking-wide">
                Malaysia Digital Arrival Card
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Your data is securely encrypted with SSL technology.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-primary-foreground/50 font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li>
                <a href="/#faq" className="hover:text-primary-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-primary-foreground/50 font-semibold mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li>
                <a href="/legal#terms" className="hover:text-primary-foreground transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/legal#privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal#cookies" className="hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <div className="bg-primary-foreground/[0.06] border border-primary-foreground/10 rounded-xl p-5 mb-6">
            <p className="text-xs font-semibold text-primary-foreground/70 mb-2 uppercase tracking-wider">
              Official Notice
            </p>
            <p className="text-xs text-primary-foreground/40 leading-relaxed">
              This website is a private service dedicated to assisting travelers with their Malaysia Digital Arrival
              Card (MDAC) applications. We are not affiliated with the Government of Malaysia. For a service fee, we
              provide 24/7 support and application verification. You may also choose to apply independently through the
              official government portal at no cost.
            </p>
          </div>
          <p className="text-xs text-center text-primary-foreground/30">© 2025 malaysia.earrivalform.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
