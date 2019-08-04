import React, { ReactNode, ReactElement } from 'react';
export interface IDoubleColProps{
    contentPosition?:"left" | "right"
    pictureSrc:string;
}
export class DoubleCol extends React.Component<IDoubleColProps>{
    constructor(props){
        super(props);
    }
    readonly rowStyle={
        paddingTop:"25px",
        minHeight:'300px'
    }
    readonly imgStyle = {
        paddingTop:'20px',
        paddingBottom:'20px',
        maxHeight:'300px',
        maxWidth:'100%'
    }
    render(){
        return <div className="row" style={this.rowStyle}>
                {this.getPart()}
                {this.getPart()}
        </div>
    }
    private gotLeft:boolean = false;
    private getPart():ReactElement{
        if(!this.gotLeft){
            this.gotLeft = true;
            return this.props.contentPosition == null || this.props.contentPosition ===  "left" ? this.getContentPart() : this.getPicPart()
        }else{
            return this.props.contentPosition == null || this.props.contentPosition ===  "left" ? this.getPicPart() : this.getContentPart();
        }
    }
    private getPicPart():ReactElement{
        return <div className="col-md-6 col-sm-12 align-self-center"><img src={this.props.pictureSrc}  style={this.imgStyle} className="img-responsive d-block mx-auto"></img></div>
    }
    private getContentPart():ReactElement{
        return <div className="col-md-6 col-sm-12 align-self-center">{this.props.children}</div>;
    }
}