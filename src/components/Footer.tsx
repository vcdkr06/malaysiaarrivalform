const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 font-quicksand">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Your data is securely encrypted with SSL technology.</p>
            <div className="flex gap-3">
              <div className="w-8 h-6 bg-card rounded flex items-center justify-center p-1 border border-border">
                <img src="https://www.svgrepo.com/show/510183/secure.svg" alt="Secure" className="w-full h-full filter brightness-0 invert opacity-40" />
              </div>
              <div className="w-8 h-6 bg-card rounded flex items-center justify-center p-1 border border-border">
                <img src="https://www.svgrepo.com/show/383769/security-protection-ssl-certificate.svg" alt="SSL" className="w-full h-full filter brightness-0 invert opacity-40" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground/70 mb-4 text-xs uppercase tracking-widest">Resources</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/#faq" className="hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground/70 mb-4 text-xs uppercase tracking-widest">Legal</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/legal#terms" className="hover:text-accent transition-colors">Terms of Use</a></li>
              <li><a href="/legal#privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/legal#cookies" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-8">
          <p className="text-xs text-center text-muted-foreground/70 leading-relaxed max-w-3xl mx-auto">
            This website is a private, independent service provider and is not affiliated with any government agency. Our service provides optional assistance to help travelers complete arrival card applications. You may complete the official process directly through the relevant government website at no cost.
          </p>
        </div>
        <div className="mt-6 text-xs text-center text-muted-foreground/50">© 2025 malaysia.earrivalform.com — All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
