const Footer = () => {
  return <footer className="bg-primary py-12 font-quicksand">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Your personal information is securely encrypted using SSL.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center p-1">
                <img src="https://www.svgrepo.com/show/510183/secure.svg" alt="Secure" className="w-full h-full filter brightness-0 invert" />
              </div>
              <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center p-1">
                <img src="https://www.svgrepo.com/show/383769/security-protection-ssl-certificate.svg" alt="SSL Certificate" className="w-full h-full filter brightness-0 invert" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/#faq" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact us</a></li>
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/legal#terms" className="hover:text-primary-foreground transition-colors">Terms of Use</a></li>
              <li><a href="/legal#privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/legal#cookies" className="hover:text-primary-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <h3 className="font-semibold text-primary-foreground mb-4 text-center">Legal Disclaimer</h3>
          <p className="text-sm text-center text-primary-foreground/80 leading-relaxed">
            This website is a private, independent service provider and is not affiliated with, endorsed by, or operated by any government agency. We are not part of or connected to any official immigration or border authority.
          </p>
          <p className="text-sm text-center text-primary-foreground/80 mt-4 leading-relaxed">
            Our service provides optional assistance to help travelers complete and submit arrival card applications accurately and efficiently. You may choose to complete the official process directly through the relevant government website at no cost.
          </p>
          <p className="text-sm text-center text-primary-foreground/80 mt-4 leading-relaxed">
            Use of our service is entirely voluntary, and all fees charged are for the convenience and support we provide in preparing and processing your application.
          </p>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-sm text-center text-primary-foreground/80">
          © 2025 malaysia.earrivalform.com All rights reserved.
        </div>
      </div>
    </footer>;
};
export default Footer;