import { TableRow, TableCell, TableBody } from "@aws-amplify/ui-react";

function genRBL(kid) {
    if(kid.RBL !== null){
        return kid.RBL.FirstName + " " + kid.RBL.LastName;
    } else{
        return "";
    }
};

function genSponsor(kid) {
    if(kid.Sponsor !== null){
        return kid.Sponsor.FirstName + " " + kid.Sponsor.LastName;
    } else{
        return "";
    }
};

function ChildShow({kid}) {
    return (
        <TableRow>
            <TableCell>
                {kid.ChildID}
            </TableCell>
            <TableCell>
                {kid.Firstname}
            </TableCell>
            <TableCell>
                {genRBL(kid)}
            </TableCell>
            <TableCell>
                {genSponsor(kid)}
            </TableCell>
        </TableRow>
    );    
};

export default ChildShow;