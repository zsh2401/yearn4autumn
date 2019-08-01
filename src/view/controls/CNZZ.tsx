import React from 'react';
export class CNZZ extends React.Component{
    componentDidMount(){
        let cnzzC = document.querySelector("#fuck");
        let eleScript = document.createElement('script');
        eleScript.src = "http://s23.cnzz.com/z_stat.php?id=1277812477&show=pic";
        eleScript.type = "text/javascript";
        cnzzC.appendChild(eleScript);
    }
    render(){
        return (
        <div id="fuck">
            <span id='cnzz_stat_icon_1277812477'></span>
        </div>)
    }
}