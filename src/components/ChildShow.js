import { TableRow, TableCell } from "@aws-amplify/ui-react";
import { useState } from "react";

function genRBL(kid) {
    if(kid.RBL !== null){
        return kid.RBL.FirstName + " " + kid.RBL.LastName;
    } else{
        return "null";
    }
}


function ChildShow({kid}) {
    console.log(kid);

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
            {/*<TableCell>
                {kid.Sponsor.Firstname + " " + kid.Sponsor.Lastname}
    </TableCell>*/}
        </TableRow>
    );    
};

export default ChildShow;