import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './style.css';

import { addStudent } from '../../actions/index';
 
const Create: React.FC = () => {

    const [name, setName] = React.useState<string>('');
    const [date, setDate] = React.useState<string>('');
    const [estimate, setEstimate] = React.useState<string>('');

    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        e.preventDefault();
        let {name, value} = e.target;
        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'date': 
                setDate(value);
                break;
            case 'estimate':
                setEstimate(value);
                break;
        }
    }

    const onSubmit = () => {
       if(name && date && estimate) {
            dispatch(addStudent({ name, date, estimate }));
            setName('');
            setDate('');
            setEstimate('');
       }
    }

    return (
        <div className="create-student">
                <Button component={Link} to="/" color="primary">
                    Назад
                </Button>
            <TextField onChange={handleChange} defaultValue={name} name="name" margin="normal" fullWidth label="Введите ФИО" />
            <TextField onChange={handleChange} name="date" margin="normal" fullWidth label="Дата рождения" type="date" defaultValue="2020-01-01" />
            <TextField onChange={handleChange} defaultValue={estimate} name="estimate" margin="normal" fullWidth label="Успеваемость" />
            <Button onClick={onSubmit} variant="contained" color="primary">Добавить</Button>
        </div>
    )
}

export default Create;