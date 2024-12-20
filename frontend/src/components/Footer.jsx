import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.408.593 24 1.324 24h11.495V14.708h-3.11v-3.599h3.11V8.414c0-3.077 1.877-4.752 4.622-4.752 1.313 0 2.441.098 2.771.142v3.214h-1.904c-1.493 0-1.783.71-1.783 1.75v2.295h3.565l-.465 3.599h-3.1V24h6.068c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.408 0 22.676 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.965 13.965 0 011.671 3.149a4.92 4.92 0 001.524 6.573 4.902 4.902 0 01-2.229-.616v.062a4.919 4.919 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.924 4.924 0 004.6 3.417 9.868 9.868 0 01-7.29 2.035 13.93 13.93 0 007.548 2.209c9.057 0 14.007-7.513 14.007-14.007 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.77 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.23 0 22.23 0zM7.06 20.45H3.56V9H7.06v11.45zM5.31 7.58a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.5v-5.74c0-1.37-.03-3.12-1.9-3.12-1.9 0-2.19 1.49-2.19 3.02v5.84h-3.5V9h3.36v1.56h.05c.47-.9 1.6-1.85 3.3-1.85 3.53 0 4.18 2.32 4.18 5.34v6.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
