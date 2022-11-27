import React from 'react';

const Stats = () => {
    return (
        <div className="lg:py-10 p-8 bg-fixed bg-cover text-white" style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/sEJ5dD6AVoTAg62GwheKUo-1200-80.jpg")` }}>
            <div>
                <div className='p-4 md:p-0:'>
                    <h1 data-aos="fade-up" data-aos-duration="500" className='text-3xl font-bold text-center '>Our Stats</h1>
                    <p data-aos="fade-right" data-aos-duration="600" className='mx-auto text-center font-thin mt-4 my-1 max-w-2xl'>Some of our customers say that they trust us and buy our product without any hesitation because they believe us and always happy to buy our product.</p>
                </div>
                <div className="flex backdrop-blur bg-white/10 mx-auto  my-2 text-center stats-vertical lg:stats-horizontal shadow w-4/5">

                    <div className="stat">
                        <div className="stat-title">Page Visits</div>
                        <div className="stat-value">10K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Buyers</div>
                        <div className="stat-value">200</div>
                        <div className="stat-desc">↗︎20 (12%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Sellers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;