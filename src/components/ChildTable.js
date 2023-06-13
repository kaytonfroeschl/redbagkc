import { useState } from "react";
import ChildCreate from "./ChildCreate";
import DataTable from "./DataTable";
import UseKidsContext from "../hooks/use-kids-context";
// filters
import { DropdownFilter, TextSearchFilter } from "../utilities/filters";

const columns =  [
    {
        Header: "Child ID",
        accessor: "ChildID",
        Filter: TextSearchFilter
    },
    {
        Header: "First Name",
        accessor: "Firstname",
        Filter: TextSearchFilter,
        isNumeric: false,
        filter: "rankedMatchSorter"
    }, 
    {
        Header: "Red Bag Lady",
        accessor: "RBL",
        Filter: DropdownFilter
    },
    {
        Header: "Sponsor",
        accessor: "Sponsor",
        Filter: DropdownFilter
    }
];

function ChildTable() {    
    const { kids, fetchKids } = UseKidsContext();
    const [createKid, setShowCreateKid] = useState(false);
        
    const handleNewChildClick = () => {        
        setShowCreateKid(true);
    };
    const handleNewChildClose = () => {
        setShowCreateKid(false);        
    };
    const handleNewChildSave = () => {
        fetchKids();
        setShowCreateKid(false);        
    };
    
    const handleFetchKidsClick = () => {
        fetchKids();        
    };

    let main = "";    

    if (createKid) {
        main = <ChildCreate onClose={handleNewChildClose} onSave={handleNewChildSave} />
    }else{ 
        console.log("ChildTable: kids has " + kids.length + " elements");
        main =
        <div>            
            <button onClick={handleNewChildClick}>New Child</button>
            <button onClick={handleFetchKidsClick}>Fetch Kids</button>
            <DataTable columns={columns} data={kids} />
        </div>;
    };

    return (
        <div>{main}</div>
    )
};

export default ChildTable;