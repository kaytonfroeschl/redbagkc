import { Component } from "react";
import Loading from "./Loading";
import DataTable from "./DataTable";
import UseKidsContext from "../hooks/use-kids-context";

const columns =  [
    {
        Header: "ChildID",
        accessor: "childID"
    },
    {
        Header: "First Name",
        accessor: "firstName"
    }, 
    {
        Header: "Red Bag Lady",
        accessor: "RBL"
    },
    {
        Header: "Sponsor",
        accessor: "sponsor"
    }
];

function ChildTable() {
    console.log("ChildTable: before");
    const { kids } = UseKidsContext();
    console.log("ChildTable: after");
    return (
        <div>
            <h1>Child Table Goes Here</h1>
            {/*<DataTable columns={columns} data={kids} />*/}
        </div>
    )
};

export default ChildTable;