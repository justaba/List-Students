import * as React from 'react';
import { Typography } from "@material-ui/core";
import Create from '../components/Create/index';

const CreatePage: React.FC = () => {
    return (
        <div className="create-wrap">
            <Typography variant="h4">Добавление студента</Typography>
            <Create />
        </div>
    )
}

export default CreatePage;