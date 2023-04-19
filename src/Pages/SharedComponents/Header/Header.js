import React, { useState } from 'react';

const Header = () => {
    const [isClosed, setIsClosed] = useState(false);
    return (
        <div className={`bg-gradient-to-r from-violet-900 to-cyan-700 flex ${isClosed && "hidden"}`}>
            <p className='text-white text-center flex-1'>Get 20% discount on our advertised products, shop now🎉</p>
<button onClick={()=>setIsClosed(true)} className='mr-5 font-bold'>x</button>
        </div>
    );
};

export default Header;