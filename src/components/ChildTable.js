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
    const { newKids } = UseKidsContext();
        
    const handleNewChildClick = () => {        
        return <ChildCreate />
    };

    return (
        <div>
            <button onClick={handleNewChildClick}>New Child</button>
            <DataTable columns={columns} data={newKids} />
        </div>
    )
};

export default ChildTable;