import React from 'react';
import './ViewProgram.css';
import PublishIcon from "@mui/icons-material/Publish";
import {Link} from 'react-router-dom';
export default function ViewProgram()
{
    return(
        <div className={"viewProgram"}>
            <div className={"viewProgramTitleContainer"}>
                <h1 className={"programTitle"}>View Incentive Program</h1>
            </div>
            <div className={"viewProgramContainer"}>
              <div className={"viewProgramDetails"}>
                <span className={"programDetailsTitle"}>Incentive Program Details</span>
                <form className={"viewProgramForm"}>
                    <div className={"viewProgramLeft"}>
                        <div className={"programViewItem"}>
                                <label>Incentive Program Name</label>
                                <input type="text" placeholder={"Name"} className={"programUpdateInput"}/>
                        </div>
                        <div className={"programViewItem"}>
                            <label>Incentive Program Description</label>
                            <input type="text" placeholder={"This is an incentive program"} className={"programUpdateInput"}/>
                        </div>
                        <label>Criteria</label>
                        <div className={"programCriteria"}>
                        <div className={"programViewCheckBox"}>
                            <input type="checkbox" id={"cb1"} className={"programUpdateInput"}/>
                            <label htmlFor="cb1">Tasks Completed</label>
                        </div>
                        <div className={"programViewCheckBox"}>
                            <input type="checkbox" id={"cb2"} className={"programUpdateInput"}/>
                            <label htmlFor="cb2">Health & Fitness</label>
                        </div>
                        <div className={"programViewCheckBox"}>
                            <input type="checkbox" id={"cb3"} className={"programUpdateInput"}/>
                            <label htmlFor="cb3">Work Ethic</label>
                        </div>
                        <div className={"programViewCheckBox"}>
                            <input type="checkbox" id={"cb4"} className={"programUpdateInput"}/>
                            <label htmlFor="cb4">Coffee Power</label>
                        </div>
                    </div>
                        <Link to ="/incentiveprograms">
                        <button className={"programBackButton"}>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
                <div className={"viewIncentiveContainer"}>
                    <span className={"uploadIncentiveTitle"}>Incentive Details</span>
                    <div className={"incentiveBottom"}>
                        <form className={"viewIncentiveForm"}>
                            <div className={"uploadIncentiveLeft"}>
                                <div className={"viewIncentiveItem"}>
                                    <label>Incentive Name</label>
                                    <input type="text" placeholder={"Name"} className={"programUpdateInput"}/>
                                </div>
                                <div className={"viewIncentiveItem"}>
                                    <label>Incentive Description</label>
                                    <input type="text" placeholder={"This is an incentive program"} className={"programUpdateInput"}/>
                                </div>
                                <div className={"viewIncentiveItem"}>
                                    <label>URI</label>
                                    <input type="text" placeholder={""} className={"programUpdateInput"}/>
                                </div>
                            </div>
                        </form>
                        <div className={"viewIncentiveRight"}>
                            <label>NFT</label>
                            <div className={"incentiveNFT"}>
                                <img src={""} alt={""}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
