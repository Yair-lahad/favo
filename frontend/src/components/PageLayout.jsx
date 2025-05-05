function PageLayout({ children }) {
    return (
      <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
        <div className="w-full max-w-md mx-auto">
          {children}
        </div>
      </div>
    );
  }
  
  export default PageLayout;
  