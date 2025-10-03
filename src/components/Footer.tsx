const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a 
            href="#" 
            className="text-primary hover:underline underline-offset-4 transition-colors"
          >
            About
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="#" 
            className="text-primary hover:underline underline-offset-4 transition-colors"
          >
            Contact Us
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="#" 
            className="text-primary hover:underline underline-offset-4 transition-colors"
          >
            Terms
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="#" 
            className="text-primary hover:underline underline-offset-4 transition-colors"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
