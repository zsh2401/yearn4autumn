import React from 'react';
export class NavBar extends React.Component
{
    render(){
        return (<nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{background:"#3C8CE7"}} >
        <div className="container">
            <a className="navbar-brand text-white" href="/">慕秋 Y4A.FUN</a> 

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".targetMenu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse targetMenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-navbar" href="/fstore">Fun商店</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-navbar" href="/fav">库</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-navbar" href="/comment">留言板</a>
                    </li>
                </ul>
            </div>
            
            <div className="collapse navbar-collapse justify-content-end targetMenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-navbar" href="/donate">捐赠</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-navbar" href="/about">关于</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>)
    }
}

