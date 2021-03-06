import React from 'react';
export class TransparentNavBar extends React.Component
{
    render(){
        return (<nav className="navbar navbar-expand-sm navbar-dark fixed-top" style={{background:'transparent'}}>
        <div className="container">
            <a className="navbar-brand" href="/">
                慕秋 Y4A.FUN
            </a> 

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".targetMenu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse targetMenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/fstore">Fun商店</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/fav">库</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/comment">留言板</a>
                    </li>
                </ul>
            </div>
            
            <div className="collapse navbar-collapse justify-content-end targetMenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/donate">捐赠</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">关于</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>)
    }
}

