import React from 'react'
import BottomNavigation from "@material-ui/core/BottomNavigation"
import Icon from "@material-ui/core/Icon"
import HomeIcon from '@material-ui/icons/home';
import FavoriteIcon from '@material-ui/icons/Attachment';
import DiscoverIcon from '@material-ui/icons/Search';
import OtherIcon from '@material-ui/icons/Code';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
export class BottomNavBar extends React.Component{
    render(){
        return <div>
            <BottomNavigation style={{background:"whitesmoke"}} showLabels={true}>
                <BottomNavigationAction label="慕秋" icon={<HomeIcon></HomeIcon>}/>
                <BottomNavigationAction label="发现" icon={<DiscoverIcon></DiscoverIcon>}/>
                <BottomNavigationAction label="库" icon={<FavoriteIcon></FavoriteIcon>}/>
                <BottomNavigationAction label="其它" icon={<OtherIcon></OtherIcon>}/>
            </BottomNavigation>
        </div>
    }
}