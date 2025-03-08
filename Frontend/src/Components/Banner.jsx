function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16 pt-10 dark:bg-slate-900 dark:text-white">
        {/* Left Side */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          {/* Heading */}
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-4xl font-bold text-pink-500">
                new everyday!!!
              </span>
            </h1>
            {/* Paragrapgh */}
            <p className="text-xl">
              A book is a medium for recording information in the form of
              writing or images. Modern books are typically in codex format,
              composed of many pages that are bound together and protected by a
              cover.
            </p>
            {/* Email field */}
            <label className="input validator dark:bg-slate-900 dark:text-white dark:border-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          {/* Button */}
          <button className="btn btn-secondary">Get Started</button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src="Banner2.png" className="w-180" />
        </div>

        
      </div>
    </>
  );
}

export default Banner;
