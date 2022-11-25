import React, { useEffect } from 'react';

const Blogs = () => {
    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="lg:py-10 py-14 px-2">
            <h2 className=" text-center font-bold text-3xl my-3 lg:my-5">Frequently Asked Questions</h2>
            <div className="lg:py-10 py- lg:my-4 my-2 h-auto">
                <div className="collapse collapse-plus border border-base-300 bg-[#e6e6e6] rounded-box mx-auto lg:w-1/2 my-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p className='font-semibold my-1'> There are Four Kinds of React State to Manage</p>
                        <div className="flex my-1">
                            <div className="w-auto px-2 font-semibold">Local (UI) state :</div>
                            <div className="flex-1">Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex my-1">
                            <div className="w-auto px-2 font-semibold">Global (UI) state :</div>
                            <div className="flex-1">Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex my-1">
                            <div className="w-auto px-2 font-semibold">Server state :</div>
                            <div className="flex-1">Data that comes from an external server that must be integrated with our UI state.</div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex my-1">
                            <div className="w-auto px-2 font-semibold">URL State :</div>
                            <div className="flex-1">Data that exists on our URLs, including the pathname and query parameters.</div>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus border border-base-300  bg-[#e6e6e6] rounded-box mx-auto lg:w-1/2 my-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <span className='font-semibold'>Prototypical inheritance</span> allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
                    </div>
                </div>
                <div className="collapse collapse-plus border border-base-300  bg-[#e6e6e6] rounded-box mx-auto lg:w-1/2 my-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        A <span className='font-semibold'>unit test</span> is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </div>
                </div>
                <div className="collapse collapse-plus border border-base-300  bg-[#e6e6e6] rounded-box mx-auto lg:w-1/2 my-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>
                                <span className='font-semibold'>React</span> is open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.React allows developers to reuse blocks of code for a simple function. React, though tougher than Vue, has a less steep learning curve than Angular JS. The crucial difference between the library and framework is about control. This is where React is ahead of Angular- it is highly customizable. You are in control and you incorporate the parts of the library you need, unlike Angular, which does not allow much modification.
                            </li>
                            <div className="divider"></div>
                            <li> <span className='font-semibold'>Angular</span>Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.
                            </li>
                            <div className="divider"></div>
                            <li>
                                <span className='font-semibold'>Vue</span> is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps.
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blogs;