import React from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from '../../../Dummydata/userData.js';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function UserList()
{

    const[data, setData] = useState(userRows);
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Program Name', width: 150 },
        {
            field: 'criteria',
            headerName: 'Criteria',
            width: 90,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 840,
        },
        {
            field: "action",
            headerName: "Options",
            width: 300,
            renderCell: (params)=>{
                return(
                    <div>
                        <button className={"userRegister"}>Register</button>
                        <Link to= {"/update/" + params.row.id}>
                            <button className={"userUpdate"}>Update</button>
                        </Link>
                        <button className="userDelete" onClick = {()=>handleDelete(params.row.id)}>Deregister</button>
                        </div>
                )
            }
        }

    ];

    return (
        <div className={"userList"}>
            <div className={"viewUsersContainer"}>
                <h1 className={"userTitle"}>My Incentive Programs</h1>
            </div>
            <DataGrid className={"viewUsersTable"}
                rows={userRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{

                    boxShadow: 2,
                    border: 2,
                    borderColor: 'black',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'orange',
                    },
                }}
            />
        </div>
    )
}