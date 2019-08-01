import React from 'react'
export interface ScriptTagProps{
    src?:string;
    async?:any;
    charset?:string;
    type?:string;
}
export class ScriptTag extends React.Component<ScriptTagProps>
{
    private readonly placeHolderId:string;
    constructor(props:ScriptTagProps,context:any){
        super(props,context);
        this.placeHolderId = this.generateId();
    }
    componentDidMount(){
        let placeholder = document.querySelector("#" + this.placeHolderId);
        let parent = placeholder.parentElement;

        let eleScript:HTMLScriptElement = document.createElement('script');
        eleScript.type = "text/javascript";
        eleScript.innerHTML = this.props.children;

        if(this.props.type)
            eleScript.src = this.props.src;
        if(this.props.type)
            eleScript.type = this.props.type;
        if(this.props.async)
            eleScript.async = true;
        if(this.props.charset)
            eleScript.charset = this.props.charset;
        
        parent.insertBefore(eleScript,placeholder);
        parent.removeChild(placeholder);
    }
    private generateId(){
        return "__" + S4();
    }
    render(){
        return <div id={this.placeHolderId}></div>
    }
}
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}