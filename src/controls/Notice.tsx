import React from 'react';
const notice = require("../../common/data-manager/notice.json");
export class Notice extends React.Component{
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