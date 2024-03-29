import mob1 from '../../../assets/mob1.png';
import mob2 from '../../../assets/mob2.png';

const Ourapp = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col items-center justify-between w-full  lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
            </div>
            <h2 data-aos="fade-up" className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Download Now
            </h2>
            <p data-aos="fade-right" className="text-gray-700 text-base md:text-lg">Our app is now available on google play and apply store.</p>
          </div>
          <div className="flex items-center space-x-3">
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div data-aos="fade-right" className="w-2/5">
            <img className="object-cover" src={mob2} alt="" />
          </div>
          <div data-aos="fade-down" className="w-5/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src={mob1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourapp;