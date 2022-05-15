import React, {useState} from 'react';
import './NewProgram.css';
import {FileUpload} from "react-ipfs-uploader";
import Web3 from 'web3';
import { create as ipfsHttpClient } from 'ipfs-http-client';

const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

//Creating a new instance of Web3
const web3 = new Web3(window.ethereum);

// Declaring the contract ABI and the contract address, 2 constants that make up the smart contract
const contractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "string", "name": "uri", "type": "string" }], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }];
const contractAddress = "0x0ecfec322aA38C5c78d8458648837252C75fDb7D";

//Instantiating the smart contract in order to make use of all of its functions
const contract = new web3.eth.Contract(contractABI, contractAddress);


const NewProgram = ({ setUrl }) =>
{
    const [file, setFile] = useState({})
    const [fileUrl, setFileUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    let uri = '';
    const uploadFile = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const added = await ipfs.add(file)
            const url = `https://ipfs.infura.io/ipfs/{added.path}`
            setUrl(url)
            setFileUrl(url)
            setUploaded(true)
        } catch (err) {
            console.log('Error uploading the file : ', err)
        }
        setLoading(false)
    }
    async function callSetFunction() {
        //const result = await contract.methods.safeMint("0x61d24Cb0D608Fc3d925950acBf895a454f922932", uri).send({ from: "0x61d24Cb0D608Fc3d925950acBf895a454f922932" });
        uri = { fileUrl }
        console.log(uri);
        //return result;
    }

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
                        </form>
                    </div>
                    <FileUpload setUrl={setFileUrl} />
                    FileUrl : {fileUrl}
                    <button value="submit"><span> Issue </span></button>
                </div>
            </div>
        </div>
    );
}
export default NewProgram
