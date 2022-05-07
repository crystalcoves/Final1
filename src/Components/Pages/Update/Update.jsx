import React from 'react';
import './Update.css';
import PublishIcon from "@mui/icons-material/Publish";
export default function Update()
{
    return(
        <div className={"updateProgram"}>
            <div className={"updateProgramTitleContainer"}>
                <h1 className={"programTitle"}>Update Incentive Program</h1>
            </div>
            <div className={"updateProgramContainer"}>
              <div className={"updateProgramDetails"}>
                <span className={"programDetailsTitle"}>Incentive Program Details</span>
                <form className={"updateProgramForm"}>
                    <div className={"updateProgramLeft"}>
                        <div className={"programUpdateItem"}>
                                <label>Incentive Program Name</label>
                                <input type="text"
                                       required
                                       placeholder={"Name"}
                                       className={"programUpdateInput"}/>
                        </div>
                        <div className={"programUpdateItem"}>
                            <label>Incentive Program Description</label>
                            <input type="text"
                                   required
                                   placeholder={"This is an incentive program"}
                                   className={"programUpdateInput"}/>
                        </div>
                        <label>Criteria</label>
                        <div className={"programCriteria"}>
                        <div className={"programUpdateCheckBox"}>
                            <input type="checkbox" required id={"cb1"} className={"programUpdateInput"}/>
                            <label htmlFor="cb1">Tasks Completed</label>
                        </div>
                        <div className={"programUpdateCheckBox"}>
                            <input type="checkbox" required id={"cb2"} className={"programUpdateInput"}/>
                            <label htmlFor="cb2">Health & Fitness</label>
                        </div>
                        <div className={"programUpdateCheckBox"}>
                            <input type="checkbox" required id={"cb3"} className={"programUpdateInput"}/>
                            <label htmlFor="cb3">Work Ethic</label>
                        </div>
                        <div className={"programUpdateCheckBox"}>
                            <input type="checkbox" required id={"cb4"} className={"programUpdateInput"}/>
                            <label htmlFor="cb4">Coffee Power</label>
                        </div>
                    </div>
                        <button className={"programUpdateButton"}>Update</button>
                    </div>
                </form>
            </div>
                <div className={"updateIncentiveContainer"}>
                    <span className={"uploadIncentiveTitle"}>Incentive Details</span>
                    <div className={"incentiveBottom"}>
                        <form className={"updateIncentiveForm"}>
                            <div className={"uploadIncentiveLeft"}>
                                <div className={"updateIncentiveItem"}>
                                    <label>Incentive Name</label>
                                    <input type="text"
                                           required
                                           placeholder={"Name"}
                                           className={"programUpdateInput"}/>
                                </div>
                                <div className={"updateIncentiveItem"}>
                                    <label>Incentive Description</label>
                                    <input type="text"
                                           required
                                           placeholder={"This is an incentive program"}
                                           className={"programUpdateInput"}/>
                                </div>
                                <div className={"updateIncentiveItem"}>
                                    <label>URI</label>
                                    <input type="text" required
                                           placeholder={""}
                                           className={"programUpdateInput"}/>
                                </div>
                            </div>
                        </form>
                        <div className={"updateIncentiveRight"}>
                            <div className={"incentiveUpload"}>
                                <label>Upload Image</label>
                                <label htmlFor={"file"}><PublishIcon className={"uploadIncentiveIcon"}/></label>
                                <input type={"file"} required
                                       id={"file"}
                                       style={{display: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
