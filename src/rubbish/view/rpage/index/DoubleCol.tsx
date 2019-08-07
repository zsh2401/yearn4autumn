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
        return <div>
            {this.getPCPart()}
            {this.getMobilePart()}
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
    private getPCPart():ReactElement{
        return <div className="d-none d-md-block">
            <div className="row" style={this.rowStyle}>
                {this.getPart()}
                {this.getPart()}
            </div>
        </div>
    }
    private getMobilePart():ReactElement{
       return <div className="d-sm-none">
            <div className="row" style={this.rowStyle}>
                <div className="col-md-6 col-sm-12 align-self-center">{this.props.children}</div>
                <div className="col-md-6 col-sm-12 align-self-center"><img src={this.props.pictureSrc}  style={this.imgStyle} className="img-responsive d-block mx-auto"></img></div>
            </div>
        </div>
    }
}