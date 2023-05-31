import { TableRow, TableCell } from "@aws-amplify/ui-react";

function ChildShow({kid}) {
    console.log(kid);
    return (
        <TableRow>
            <TableCell>
                {kid.ChildID}
            </TableCell>
            <TableCell>
                {kid.Name}
            </TableCell>
            <TableCell>
                {kid.RBL.Firstname + " " + kid.RBL.LastName}
            </TableCell>
            <TableCell>
                {kid.Sponsor.Firstname + " " + kid.Sponsor.Lastname}
            </TableCell>
        </TableRow>
    );    
};

export default ChildShow;