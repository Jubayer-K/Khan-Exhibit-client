const FindUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-slate-100 font-nunito">
        <div className="hero-content flex-col lg:gap-80 lg:flex-row-reverse">
          <img src="/find.png" className="lg:max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Find Us</h1>
            <p className="py-3">
              Address: 123 Art Avenue, Creativity City, Craftland
            </p>
            <p className="py-3">Email: info@khanexhibit.com</p>
            <p className="py-3">Phone: +1 (555) 123-4567</p>
            <p className="py-3">
              Social Media:
              <br />
              Facebook: www.facebook.com/khanexhibit
              <br />
              Instagram:@khanexhibit
              <br />
              Twitter: www.twitter.com/khanexhibit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
