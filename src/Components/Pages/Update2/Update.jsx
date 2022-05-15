import React from 'react';
import './Update.css';
import { FileUpload } from "react-ipfs-uploader";
import { useState } from "react";
import Web3 from 'web3';
import { callmintfunction } from '../../../App.js';
//Creating a new instance of Web3
const web3 = new Web3(window.ethereum);
// Declaring the contract ABI and the contract address, 2 constants that make up the smart contract
const contractABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const contractAddress = "0x0d04911E3e21D6A3c63C97aBAC19a77E0caE3701";
//Instantiating the smart contract in order to make use of all of its functions
const contract = new web3.eth.Contract(contractABI, contractAddress);


const Update = () => {
    const [fileUrl, setFileUrl] = useState('')
    // const [values, setValues] = React.useState({
    //     question1: "",
    //     question2: "",
    //     question3: ""
    // });
    // const handleChange1 = question1 => event => {
    //     setValues({ ...values, [question1]: event.target.value });
    // };
    // const handleChange2 = question2 => event => {
    //     setValues({ ...values, [question2]: event.target.value });
    // };
    // const handleChange3 = question3 => event => {
    //     setValues({ ...values, [question3]: event.target.value });
    // };
    //
    // const error1 = values.question1 !== "4";
    // const error2 = values.question2 !== "cats";
    // const error3 = values.question3 !== "20";
    //
    async function checkData() {
        var answer1 = String(document.getElementById("question1").value);
        var answer2 = String(document.getElementById("question2").value);
        var answer3 = String(document.getElementById("question3").value);
        if (answer1 == "Blockchain", answer2 == "2014", answer3 == "Ethereum") {
            { callmintfunction() };
        }
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
    }
    return (
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
                                    <label>What technology does NFTs use?</label>
                                    <input type="text"
                                           required
                                           placeholder={"Write your answer here"}
                                           className={"programUpdateInput"}
                                           id="question1"
                                        // value={values.question1}
                                        // onChange={handleChange1("question1")}
                                        // margin="normal"
                                        // error={error1}
                                    />
                                </div>
                                <div className={"updateIncentiveItem"}>
                                    <label>When was the first NFT minted?</label>
                                    <input type="text"
                                           required
                                           placeholder={"Write your answer here"}
                                           className={"programUpdateInput"}
                                           id="question2"
                                        // value={values.question2}
                                        // onChange={handleChange2("question2")}
                                        // margin="normal"
                                        // error={error2}
                                    />
                                </div>
                                <div className={"updateIncentiveItem"}>
                                    <label>Which network does Impact NFTs use?</label>
                                    <input type="text" required
                                           placeholder={"Write your answer here"}
                                           className={"programUpdateInput"}
                                           id="question3"
                                        // value={values.question3}
                                        // onChange={handleChange3("question3")}
                                        // margin="normal"
                                        // error={error3}
                                    />
                                </div>
                            </div>
                            <button className={"programUpdateButton"} type="button" onClick={checkData}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Update