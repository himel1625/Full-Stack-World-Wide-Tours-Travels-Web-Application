const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-12'>
      <div className='container mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
        {/* Branding */}
        <div>
          <h2 className='text-3xl font-bold text-purple-500 mb-4'>
            World Wide Tours & Travels
          </h2>
          <p className='text-sm leading-relaxed'>
            Embark on unforgettable adventures with us. Your partner in
            exploring the world, one destination at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
          <ul className='space-y-3 text-sm'>
            <li>
              <a href='#home' className='hover:text-purple-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#destinations' className='hover:text-purple-400'>
                Destinations
              </a>
            </li>
            <li>
              <a href='#tours' className='hover:text-purple-400'>
                Tours
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-purple-400'>
                About Us
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-purple-400'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-4'>Contact Us</h3>
          <p className='text-sm mb-2'>
            <i className='fas fa-envelope mr-2'></i>
            <a
              href='mailto:info@worldwidetours.com'
              className='hover:text-purple-400'
            >
              info@worldwidetours.com
            </a>
          </p>
          <p className='text-sm mb-2'>
            <i className='fas fa-phone mr-2'></i>
            <a href='tel:+123456789' className='hover:text-purple-400'>
              +1 234 567 89
            </a>
          </p>
          <p className='text-sm'>
            <i className='fas fa-map-marker-alt mr-2'></i>
            123 Adventure Lane, Wanderlust City
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-4'>
            Stay Updated
          </h3>
          <p className='text-sm mb-4'>
            Subscribe to our newsletter for travel tips, exclusive deals, and
            more.
          </p>
          <form>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3'
            />
            <button
              type='submit'
              className='w-full py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white font-semibold'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500'>
        <p>
          &copy; {new Date().getFullYear()} World Wide Tours & Travels. All
          rights reserved.
        </p>
        <div className='mt-4 space-x-4'>
          <a href='#facebook' className='hover:text-purple-400'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#twitter' className='hover:text-purple-400'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#instagram' className='hover:text-purple-400'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#linkedin' className='hover:text-purple-400'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
