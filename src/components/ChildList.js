import { Table, TableBody, TableHead, TableRow, TableCell } from "@aws-amplify/ui-react";
import UseKidsContext from "../hooks/use-kids-context";
import ChildShow from "./ChildShow";

function ChildList() {    
    const { kids } = UseKidsContext();

    const renderKids = kids.map((kid) => {
        return <ChildShow key={kid.id} kid={kid} />
    });

    return (
        <div>
            {renderKids}
        </div>
    );
    
};

export default ChildList;