import React from 'react';
export default class NavBar extends React.Component
{
    render(){
        let cst = {
            margin:"0px",
            padding: "0px",
        }
        return (
        <nav role="navigation" className="navbar navbar-default navbar-fixed-top noradius">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-c">
                        <span className="sr-only">切换导航</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" style={cst} className="navbar-brand">
                        <img id="brandImg" className="img-responsive"></img>
                    </a>
                </div>
                <div id="navbar-c" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <a href="/fun/">
                                <span className="glyphicon glyphicon-th-large"></span>
                                <span> 库</span>
                            </a>
                        </li>
                        <li>
                            <a href="/fun/">
                                <span className="glyphicon glyphicon-paperclip"></span>
                                <span> 发现</span>
                            </a>
                        </li>
                        <li>
                            <a href="/fun/">
                                <span className="glyphicon glyphicon-heart-empty"></span>
                                <span> 捐赠</span>
                            </a>
                        </li>
                        <li>
                            <a href="/fun/">
                                <span className="glyphicon glyphicon-link"></span>
                                <span> 关于</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}