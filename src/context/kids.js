import { createContext, useState, useCallback } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listChildren } from "../graphql/queries";

const KidsContext = createContext();

function Provider ({children}){
    const [kids, setKids] = useState([]);

    const unstableFetchKids = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listChildren));
            const kids = response.data.listChildren.items;
            setKids(kids);
        } 
        catch (err) { 
            console.log('error in Provider: await API.graphql(graphqlOperation(listChildren))'); 
        };        
    };

    const fetchKids = useCallback(unstableFetchKids, []);

    const valuesToShare = {
        kids,
        fetchKids,
    };

    return (
        <KidsContext.Provider value={valuesToShare}>
            {children}
        </KidsContext.Provider>
    );
}

export {Provider};
export default KidsContext;