import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isClosed, setIsClosed] = useState(false);

    return (
        <div className={`hidden md:flex px-6 py-1 bg-gradient-to-r from-violet-900 to-cyan-700 ${isClosed && "md:hidden"}`}>
            <div className="flex items-center mx-auto container justify-center py-2">
                <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
                    <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
                </svg>
                <span>&nbsp;Get up to 50% off for your first order + free shipping,&nbsp;</span>
                <Link to={'register'} className="hover:underline font-semibold">sign up&nbsp;</Link>today!
            </div>
            <button onClick={() => setIsClosed(true)} className='mx-5 font-bold'>x</button>
        </div>
    );
};

export default Header;