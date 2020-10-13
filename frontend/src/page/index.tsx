import * as React from "react";
import { Typography } from "@material-ui/core";
import HeadTable from "../components/HeadTable/index";
import TableStudents from "../components/TableStudents/index";

const IndexPage: React.FC = () => {
  return (
    <div className="students-wrap">
      <Typography variant="h4">Список студентов</Typography>
      <HeadTable />
      <TableStudents />
    </div>
  );
};

export default IndexPage;
