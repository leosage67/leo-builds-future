const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">Leo Justice</h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time
            </p>
          </div>
          
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Leo Justice. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                Made with ❤️ and lots of ☕ by Leo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;