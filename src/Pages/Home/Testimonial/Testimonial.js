import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section className="p-8 bg-fixed bg-cover text-white" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1512747646639-ed824d861e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")` }}>
      <div className="mx-2 md:mx-0 container flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-3xl font-semibold leading-none text-center">What our customers are saying about us</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-5 lg:mx-0">
          <div className="relative text-center">
            <FaQuoteLeft />
            <p className="px-6 py-1 text-lg italic">I was so disappointed with my new coffee table. It arrived damaged, and the customer service was terrible. I would not recommend this company to anyone.</p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p>Leroy Canon</p>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-5 lg:mx-0">
          <div className="relative text-center">
            <FaQuoteLeft />
            <p className="px-6 py-1 text-lg italic">I love my new sofa! It's so comfortable and stylish, and it arrived in perfect condition. I would definitely recommend this company to anyone looking for new furniture.</p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p>Riyad Ahmed</p>
        </div>
      </div>
    </section >
  );
};

export default Testimonial;