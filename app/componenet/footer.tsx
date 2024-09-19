export default function Footer() {
  return (
    <footer className=" py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-thin">
            Samer<span className="font-extrabold">Alaws</span>
          </h1>
        </div>
        {/* Navigation Links */}
      
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/samalaws"
            className="text-gray-400 hover:text-white">
            <span className="sr-only">
              GitHub
            </span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path 
                fillRule="evenodd" 
                d="M12 2C6.48 2 2 6.58 2 12.07c0 4.43 2.87 8.19 6.84 9.51.5.09.68-.21.68-.47 0-.23-.01-.85-.01-1.67-2.78.6-3.37-1.36-3.37-1.36-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.66.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.83-2.35 4.67-4.58 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.47A10.07 10.07 0 0 0 22 12.07C22 6.58 17.52 2 12 2z" 
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/samer-alaws/"
            className="text-gray-400 hover:text-white">
            <span className="sr-only">
              LinkedIn
            </span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.3c0-1.28-.03-2.93-1.79-2.93-1.8 0-2.08 1.4-2.08 2.84v5.39H9.47v-10.86h3.41v1.48h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.19 2.33 4.19 5.37v6.86zM5.92 8.99c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.93 2.06-2.06 2.06zm1.78 11.46H4.14V9.59h3.55v10.86z" />
            </svg>
          </a>
          <a
            href="https://x.com/SamerAlaws"
            className="text-gray-400 hover:text-white">
            <span className="sr-only">
              Twitter
            </span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.46 2H18.17l-6.09 8.53L5.83 2H1.54l7.78 10.89L1.05 22h4.29l5.71-7.91L16.76 22h4.19l-8.27-9.43L22.46 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-400">
          &copy;{" "}
          {new Date().getFullYear()}{" "}
          SamerAlaws.
        </p>
      </div>
    </footer>
  );
}
