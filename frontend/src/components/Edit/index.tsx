import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { updateStudent } from '../../actions/index';

import './style.css';

interface ParamTypes {
    id: string
}

const Edit: React.FC = () => {

    const dispatch = useDispatch();

    const { id } = useParams<ParamTypes>();

    const state = useSelector((state: RootStateOrAny) => state.students.list.filter((item: { _id: string; }) => item._id === id));

    let editState = state[0];

    const handleChange = (e: any) => {
        e.preventDefault();
        let {name, value} = e.target;
        switch(name) {
            case 'name':
                editState.name = value;
                break;
            case 'date': 
                editState.date = value;
                break;
            case 'estimate':
                editState.estimate = value;
                break;
        }
    }

    const onSubmit = () => {
        dispatch(updateStudent(editState));
    }

    return (
        <div className="edit-student">
            <Button component={Link} to="/" color="primary">
                    Назад
            </Button>
            <TextField margin="normal" defaultValue={state[0].name} fullWidth label="Введите ФИО" name="name" onChange={handleChange} />
            <TextField type="date" defaultValue={state[0].date} margin="normal" fullWidth label="Дата рождения" name="date" onChange={handleChange} />
            <TextField margin="normal" defaultValue={state[0].estimate} fullWidth label="Успеваемость" name="estimate" onChange={handleChange} />
            <Button onClick={onSubmit} variant="contained" color="primary">Обновить</Button>
        </div>
    )
}

export default Edit;