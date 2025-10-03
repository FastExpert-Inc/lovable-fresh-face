const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="#" 
            className="hover:text-primary transition-colors hover:underline underline-offset-4"
          >
            About
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors hover:underline underline-offset-4"
          >
            Contact Us
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors hover:underline underline-offset-4"
          >
            Terms
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors hover:underline underline-offset-4"
          >
            Privacy
          </a>
        </nav>
        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} BSell Real Estate Agents. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
