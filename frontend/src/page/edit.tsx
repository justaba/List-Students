import * as React from 'react';
import { Typography } from "@material-ui/core";
import Edit from '../components/Edit/index';

const EditPage: React.FC = () => {
    return (
        <div className="edit-wrap">
            <Typography variant="h4">Редактирование анкеты</Typography>
            <Edit />
        </div>
    )
}

export default EditPage;