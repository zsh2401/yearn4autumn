import React, { ReactText } from 'react'
export interface ScriptTagProps{
    src?:string;
    async?:any;
    charset?:string;
    type?:string;
    id?:string;
}
export class ScriptTag extends React.Component<ScriptTagProps>
{
    private readonly placeHolderId:string;
    constructor(props:ScriptTagProps,context:any){
        super(props,context);
        this.placeHolderId = this.generateId();
    }
    componentDidMount(){
        let placeholder = document.querySelector("#" + this.placeHolderId) as Element;
        let parent = placeholder.parentElement as Element;

        let eleScript:HTMLScriptElement = document.createElement('script');
        
        parent.insertBefore(eleScript,placeholder);
        parent.removeChild(placeholder);
        if(this.props.id)
            eleScript.id = this.props.id;
       
        if(this.props.type)
            eleScript.type = this.props.type;
        if(this.props.async)
            eleScript.async = this.props.async;
        if(this.props.charset)
            eleScript.charset = this.props.charset;
        if(this.props.src)
            eleScript.src = this.props.src;
        if(this.props.children)
            eleScript.innerHTML = (this.props.children as string);
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