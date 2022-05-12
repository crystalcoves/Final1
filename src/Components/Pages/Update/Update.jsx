import React from 'react';
import './Update.css';
import {FileUpload} from "react-ipfs-uploader";
import {useState} from "react";
import Web3 from 'web3';
import { callmintfunction } from '../../../App.js';



const Update=()=>
{
    const [fileUrl, setFileUrl] = useState('')
    async function checkData() {

        var answer1 = String(document.getElementById("question1").value);
        var answer2 = String(document.getElementById("question2").value);
        var answer3 = String(document.getElementById("question3").value);

        if(answer1=="4", answer2=="cats", answer3=="20")
        {
            {callmintfunction() };
        }
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);

    }

    return(
        <div className={"updateProgram"}>
            <div className={"updateProgramTitleContainer"}>
                <h1 className={"programTitle"}>Update Incentive Program</h1>
            </div>
            <div className={"updateProgramContainer"}>
                <div className={"updateProgramDetails"}>
                <span className={"uploadProgramTitle"}>Update Incentive Program Progress</span>
                <div className={"programBottom"}>
                    <form className={"updateIncentiveForm"}>
                        <div className={"uploadIncentiveLeft"}>
                            <div className={"updateIncentiveItem"}>
                                <label>What is 2+2?</label>
                                <input type="text"
                                       required
                                       placeholder={"Write your answer here"}
                                       className={"programUpdateInput"}
                                       id= "question1"
                                       // value={values.question1}
                                       // onChange={handleChange1("question1")}
                                       // margin="normal"
                                       // error={error1}
                                />
                            </div>
                            <div className={"updateIncentiveItem"}>
                                <label>What is the opposite of dogs?</label>
                                <input type="text"
                                       required
                                       placeholder={"Write your answer here"}
                                       className={"programUpdateInput"}
                                       id= "question2"
                                       // value={values.question2}
                                       // onChange={handleChange2("question2")}
                                       // margin="normal"
                                       // error={error2}
                                />
                            </div>
                            <div className={"updateIncentiveItem"}>
                                <label>What is 10+10?</label>
                                <input type="text" required
                                       placeholder={"Write your answer here"}
                                       className={"programUpdateInput"}
                                       id= "question3"
                                       // value={values.question3}
                                       // onChange={handleChange3("question3")}
                                       // margin="normal"
                                       // error={error3}
                                />
                            </div>
                        </div>
                        <button className={"programUpdateButton"} type ="button"onClick={checkData}>Update</button>
                    </form>
                </div>
                </div>
                <div className={"updateIncentiveContainer"}>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update