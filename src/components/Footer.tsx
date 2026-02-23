const Footer = () => {
  return (
    <footer className="bg-primary py-12 font-quicksand">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">Your data is securely encrypted with SSL technology.</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-foreground/60 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li><a href="/#faq" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-foreground/60 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li><a href="/legal#terms" className="hover:text-primary-foreground transition-colors">Terms of Use</a></li>
              <li><a href="/legal#privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/legal#cookies" className="hover:text-primary-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-8">
          <p className="text-xs text-center text-primary-foreground/35 leading-relaxed max-w-3xl mx-auto">
            This website is an independent service provider — not affiliated with any government agency. You may complete the official process at no cost through the relevant government website.
          </p>
        </div>
        <div className="mt-6 text-xs text-center text-primary-foreground/25">© 2025 malaysia.earrivalform.com</div>
      </div>
    </footer>
  );
};

export default Footer;
