
const Testimonial = () => {
  return (
    <section className="p-8 md:py-12 bg-fixed bg-cover text-white" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1512747646639-ed824d861e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")` }}>

      <div className="mx-2 md:mx-0 container flex flex-col items-center pb-6 mb-4 md:p-7 md:px-12">
        <h1 className="text-3xl font-semibold leading-none text-center text-white lg:text-4xl">What our customers are saying about us</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="flex">
          <div className="pt-1 mr-6 text-center">
            <div className="px-2 pb-1 mb-1 border-b border-gray-400">
              <p className="text-sm text-blue-gray-700">Jul</p>
            </div>
            <div className="px-2">
              <p className="text-lg font-bold">18</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-white lg transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Amazing
              </a>
            </div>
            <p className="mb-5 text-gray-200">
              I love my new sofa! It's so comfortable and it arrived in perfect condition. I would definitely recommend this company to anyone.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Tarek Rafik
                </a>

              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-1 mr-6 text-center">
            <div className="px-2 pb-1 mb-1 border-b border-gray-400">
              <p className="text-sm text-blue-gray-700">May</p>
            </div>
            <div className="px-2">
              <p className="text-lg font-bold">6</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-white lg transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Gorgeous
              </a>
            </div>
            <p className="mb-5 text-gray-200">
              This chair is amazing! It's so comfortable and stylish, and it fits perfectly in my living room. I would highly recommend buying from here.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Alex Stratulat
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-1 mr-6 text-center">
            <div className="px-2 pb-1 mb-1 border-b border-gray-400">
              <p className="text-sm text-blue-gray-700">Feb</p>
            </div>
            <div className="px-2">
              <p className="text-lg font-bold">27</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-white lg transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                I love it!
              </a>
            </div>
            <p className="mb-5 text-gray-200">
              This storage has given me peace of mind and allowed me to focus on the things that are important to me. Highly recommended!
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Susie Loren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Testimonial;