import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header id="header" className="fixed-top">
                <div className="container">

                    <div className="logo float-left">
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <h1 className="text-light"><a href="#header"><span>NewBiz</span></a></h1> */}
                        <a href="#intro" className="scrollto">TA-Dev</a>
                    </div>

                    <nav className="main-nav float-right d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#intro">עמוד הבית</a></li>
                            <li><a href="#about">מי אנחנו</a></li>
                            <li><a href="#services">שירותים</a></li>
                            <li><a href="#portfolio">תיק עבודות</a></li>
                            <li><a href="#team">הצוות</a></li>
                            {/* <li className="drop-down"><a href="#test">Drop Down</a>
                                <ul>
                                    <li><a href="#test">Drop Down 1</a></li>
                                    <li className="drop-down"><a href="#test">Drop Down 2</a>
                                        <ul>
                                            <li><a href="#test">Deep Drop Down 1</a></li>
                                            <li><a href="#test">Deep Drop Down 2</a></li>
                                            <li><a href="#test">Deep Drop Down 3</a></li>
                                            <li><a href="#test">Deep Drop Down 4</a></li>
                                            <li><a href="#test">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#test">Drop Down 3</a></li>
                                    <li><a href="#test">Drop Down 4</a></li>
                                    <li><a href="#test">Drop Down 5</a></li>
                                </ul>
                            </li> */}
                            <li><a href="#contact">צור קשר</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        )
    }
}