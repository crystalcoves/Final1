import "./programList.css";
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {programRows} from '../../../Dummydata/dummyData';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function ProgramList()
{
    const[data, setData] = useState(programRows); //get and set the data stored in the incentive programs table
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !==id))
    } //removes an incentive program from table
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
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/incentiveprogram/" +params.row.id}>
                    <button className={"programView"}>View</button>
                            </Link>
                <DeleteOutlineIcon className="programDelete" onClick = {()=>handleDelete(params.row.id)}/>
            </>
                )
            }
        }

    ];

    return (
        <div className={"programList"}>
            <div className={"viewProgramsContainer"}>
                <h1 className={"programTitle"}>View Incentive Programs</h1>
                <Link to= "/newProgram">
                    <button className={"addProgramButton"}>Add</button>
                </Link>
            </div>
               <DataGrid className={"viewProgramsTable"}
                rows={programRows} disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                     hideFooterPagination
                         sx={{

                             boxShadow: 2,
                             border: 2,
                             borderColor: 'orange',
                             '& .MuiDataGrid-cell:hover': {
                                 color: 'orange',
                             }, backgroundColor: 'cornsilk',
                         }}
            />
        </div>
    )
}