import React, {useState} from 'react';
import './NewProgram.css';
import {FileUpload} from "react-ipfs-uploader";

const NewProgram=()=>
{
    const [fileUrl, setFileUrl] = useState('')
    return(
        <div className={"addProgram"}>
            <div className={"addProgramTitleContainer"}>
                <h1 className={"programTitle"}>Add Incentive Program</h1>
            </div>
            <div className={"addProgramContainer"}>
              <div className={"addProgramDetails"}>
                <span className={"programDetailsTitle"}>Enter Incentive Program Details</span>
                <form className={"addProgramForm"}>
                    <div className={"addProgramLeft"}>
                        <div className={"programAddItem"}>
                                <label>Incentive Program Name</label>
                                <input type="text"
                                       required
                                       placeholder={"Name"}
                                       className={"programUpdateInput"}/>
                        </div>
                        <div className={"programAddItem"}>
                            <label>Incentive Program Description</label>
                            <input type="text"
                                   required
                                   placeholder={"This is an incentive program"}
                                   className={"programUpdateInput"}/>
                        </div>
                        <label>Criteria</label>
                        <div className={"programCriteria"}>
                        <div className={"programAddCheckBox"}>
                            <input type="checkbox" required id={"cb1"} className={"programUpdateInput"}/>
                            <label htmlFor="cb1">Tasks Completed</label>
                        </div>
                        <div className={"programAddCheckBox"}>
                            <input type="checkbox" required id={"cb2"} className={"programUpdateInput"}/>
                            <label htmlFor="cb2">Health & Fitness</label>
                        </div>
                        <div className={"programAddCheckBox"}>
                            <input type="checkbox" required id={"cb3"} className={"programUpdateInput"}/>
                            <label htmlFor="cb3">Work Ethic</label>
                        </div>
                        <div className={"programAddCheckBox"}>
                            <input type="checkbox" required id={"cb4"} className={"programUpdateInput"}/>
                            <label htmlFor="cb4">Coffee Power</label>
                        </div>
                    </div>
                        <button className={"programAddButton"}>Add</button>
                    </div>
                </form>
            </div>
                <div className={"addIncentiveContainer"}>
                    <span className={"uploadIncentiveTitle"}>Upload Incentive</span>
                    <div className={"incentiveBottom"}>
                        <form className={"addIncentiveForm"}>
                            <div className={"uploadIncentiveLeft"}>
                                <div className={"addIncentiveItem"}>
                                    <label>Incentive Name</label>
                                    <input type="text" id="textName"
                                           required
                                           placeholder={"Name"}
                                           className={"programUpdateInput"}/>
                                </div>
                                <div className={"addIncentiveItem"}>
                                    <label>Incentive Description</label>
                                    <input type="text" id="textDescription"
                                           required
                                           placeholder={"This is an incentive program"}
                                           className={"programUpdateInput"}/>
                                </div>
                                <div className={"addIncentiveItem"}>
                                    <label>URI</label>
                                    <input type="text" required
                                           placeholder={"URI address"}
                                           className={"programUpdateInput"}/>
                                </div>
                            </div>
                                <div className={"incentiveUpload"}>
                                    <label>Upload Image</label>
                                    <div className={"fileUpload"}>
                                        <FileUpload setUrl={setFileUrl} />
                                        FileUrl: <a
                                        href={fileUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {fileUrl}
                                    </a>
                                    </div>
                                </div>
                            <button className={"incentiveAddButton"}>Upload</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewProgram
