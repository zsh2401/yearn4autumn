import React from 'react';
const notice = require("../../data/notice.json");
export default class Notice extends React.Component{
    render()
    {
        if(notice.enable){
            return (
            <div>
                <br></br>
                <div className={"text-center alert alert-" + notice.level}>{notice.text}</div>
            </div>
            )
        }else{
            return null;
        }
    }
}