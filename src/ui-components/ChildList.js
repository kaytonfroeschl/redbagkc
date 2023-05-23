import { Flex, Table, TableCell, TableRow } from '@aws-amplify/ui-react';

function ChildList() {
   
    return (
        <Flex direction="row">            
            <Table size="small">
            <TableRow className='Header' fontStyle={'italic'} fontSize={'small'}>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Red Bag Lady</TableCell>
                <TableCell>Sponsor</TableCell>
            </TableRow >
            <TableRow className='Data' >
            <   TableCell>A123</TableCell>
                <TableCell>Jamal</TableCell>
                <TableCell>8</TableCell>
                <TableCell>Kayton Froeschl</TableCell>
                <TableCell>Bill Froeschl</TableCell>
            </TableRow>
            </Table>
        </Flex>
    )
};

export default ChildList;