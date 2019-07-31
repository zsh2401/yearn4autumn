import React from 'react';
export default class NavBar extends React.Component
{
    // renderX(){
    //     return (
    //     <Menu mode="horizontal">
    //         <Menu.Item onClick={function(){window.location.href = '/fun'}}>库</Menu.Item>
    //         <Menu.Item onClick={function(){window.location.href = '/discover'}}>发现</Menu.Item>
    //         <Menu.Item onClick={function(){window.location.href = '/donate'}}>捐赠</Menu.Item>
    //         <Menu.Item onClick={function(){window.location.href = '/about'}}>关于</Menu.Item>
    //         <Menu.Item onClick={function(){window.location.href = '/about'}}>关于</Menu.Item>
    //         <Menu.Item onClick={function(){window.location.href = '/about'}}>关于</Menu.Item>
    //         <Menu.Item onClick={function(){window.location.href = '/about'}}>关于</Menu.Item>
    //     </Menu>
    //   )
    // }
    readonly brandStyle ={
        padding:'0px',
        height:'40px'
    }
    render(){
        return (<nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top" >
        <div className="container">
            <a className="navbar-brand" style={this.brandStyle} href="/">
                <img style={{maxHeight:'40px'}} src={require('../../../assests/brand.png')}></img>
            </a> 

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".targetMenu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse targetMenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/fstore">F-Store</a>
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
    renderXX(){
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
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/fun/">
                                <span className="glyphicon glyphicon-th-large"></span>
                                <span> 库</span>
                            </a>
                        </li>
                        <li>
                            <a href="/discover/">
                                <span className="glyphicon glyphicon-paperclip"></span>
                                <span> 发现</span>
                            </a>
                        </li>
                        <li>
                            <a href="/donate/">
                                <span className="glyphicon glyphicon-heart-empty"></span>
                                <span> 捐赠</span>
                            </a>
                        </li>
                        <li>
                            <a href="/about/">
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

