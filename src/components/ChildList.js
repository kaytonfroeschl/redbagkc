import { Table, TableBody, TableHead, TableRow, TableCell, Flex } from "@aws-amplify/ui-react";
import UseKidsContext from "../hooks/use-kids-context";
import ChildShow from "./ChildShow";

function ChildList() {    
    const { kids } = UseKidsContext();

    const renderKids = kids.map((kid) => {
        return <ChildShow key={kid.id} kid={kid} />;
    });

    return (
        <div>           
            <Flex direction="column">
                <Table size="small" variation="striped">
                    <TableHead>
                        <TableRow>
                            <TableCell as="th">Child ID</TableCell>
                            <TableCell as="th">First Name</TableCell>
                            <TableCell as="th">Red Bag Lady</TableCell>
                            <TableCell as="th">Sponsor</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {renderKids}
                        </TableBody>
                </Table>
            </Flex>
        </div>
    );
    
};

export default ChildList;