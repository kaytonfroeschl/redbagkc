import { Flex, Table, TableCell, TableRow } from '@aws-amplify/ui-react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { ListChildrenQuery } from '../graphql/queries/getAllChildren';


async function fetchChildren() {
    const apiData = await API.graphql({ query: ListChildrenQuery });
    console.log(apiData);
}

function ChildList() {
    fetchChildren();
    return (
        <div>Child List goes here</div>
    );
    
};

export default ChildList;