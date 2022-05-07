import React from 'react'
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Link} from 'react-router-dom';
export default function Sidebar()
{
    return (
        <div className="sidebar">
<div className="sidebarWrapper">
    <div className="sidebarMenu">
        <h3 className="sidebarTitle">Main Menu</h3>
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <Link to ='/incentiveprograms' style={{ textDecoration: 'none', color: 'white' }}>
                <LineStyleIcon className="sidebarIcon"/>
                View Incentive Programs
                </Link>
            </li>
            <li className="sidebarListItem">
                <Link to ="/newProgram" style={{ textDecoration: 'none', color: 'white'}}>
                <AddBoxIcon className="sidebarIcon" />
               Add Incentive Program
                </Link>
            </li>
            <li className="sidebarListItem">
                <Link to ="/employeeprograms" style={{ textDecoration: 'none', color: 'white'}}>
                    <AddBoxIcon className="sidebarIcon" />
                    Complete Incentive Program
                </Link>
            </li>
        </ul>
    </div>
</div>
        </div>
    )
}