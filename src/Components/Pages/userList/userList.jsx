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
            width: 950,
        },
        {
            field: "action",
            headerName: "Options",
            width: 100,
            renderCell: (params)=>{
                return(
                    <div>
                        <Link to= {"/updateincentiveprogram/" + params.row.id}>
                            <button className={"userUpdate"}>Select</button>
                        </Link>
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
                    borderColor: 'orange',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'orange',
                    },backgroundColor: 'cornsilk',
                }}
            />
        </div>
    )
}