import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const TableComponent = ({rowsData}) => {

    const history = useHistory();
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const handleRowClick = (event, rowId) => {
        history.push(`/posts/${rowId}`);
    }

    return (
        <div>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">User Id</TableCell>
                        <TableCell align="right">Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.title} onClick={(event) => handleRowClick(event, row.id)}>
                            <TableCell align="right" component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.userId}</TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rowsData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
    
        
}

export default TableComponent;