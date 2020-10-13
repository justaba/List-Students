import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './style.css';

const HeadTable: React.FC = () => {
    return (
        <div className="head-table">
            <Button component={Link} to="/create" variant="contained" size="large" color="primary">
                Добавить студента
            </Button>
        </div>
    )   
}

export default HeadTable;