import * as React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {   
        Table,
        TableBody, 
        TableContainer, 
        TableHead,
        TableRow,
        TableCell  } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import './style.css';

import { getStudents, deleteStudent } from '../../actions/index';

const TableStudents: React.FC = () => {

    const dispatch = useDispatch();

    const state = useSelector((state: RootStateOrAny) => state.students);

    React.useEffect(() => {
        dispatch(getStudents());
    }, []);

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.getAttribute('data-id');
        console.log(id)
        dispatch(deleteStudent(id));
    }

    return (
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" width="50%">ФИО</TableCell>
                        <TableCell align="center" width="20%">Дата рождения</TableCell>
                        <TableCell align="center" width="20%">Успеваемость</TableCell>
                        <TableCell align="center" width="5%"></TableCell>
                        <TableCell align="center" width="5%"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.list.map((row: any , i: number)  => {
                        return (
                            <TableRow key={i}>
                                <TableCell align="left" width="50%">{row.name}</TableCell>
                                <TableCell align="center" width="20%">{row.date}</TableCell>
                                <TableCell align="center" width="20%">{row.estimate}</TableCell>
                                <TableCell align="center" width="5%">
                                    <div className="edit">
                                        <Link to={`/edit/${row._id}`}>
                                            <EditIcon />
                                        </Link>  
                                    </div>
                                </TableCell>
                                <TableCell align="center" width="5%">
                                    <div data-id={row._id} className="delete" onClick={handleDelete}>
                                        <DeleteIcon />
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        
    )
}

export default TableStudents;