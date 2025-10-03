const Footer = () => {
  return (
    <footer className="border-t bg-muted/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center items-center gap-3 text-sm">
          <a 
            href="#" 
            className="text-primary font-medium hover:text-accent hover:underline underline-offset-4 transition-all"
          >
            About
          </a>
          <span className="text-muted-foreground/40 font-light">|</span>
          <a 
            href="#" 
            className="text-primary font-medium hover:text-accent hover:underline underline-offset-4 transition-all"
          >
            Contact Us
          </a>
          <span className="text-muted-foreground/40 font-light">|</span>
          <a 
            href="#" 
            className="text-primary font-medium hover:text-accent hover:underline underline-offset-4 transition-all"
          >
            Terms
          </a>
          <span className="text-muted-foreground/40 font-light">|</span>
          <a 
            href="#" 
            className="text-primary font-medium hover:text-accent hover:underline underline-offset-4 transition-all"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
