import { createContext, useState, useCallback } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listKids } from "../graphql/queries";

const KidsContext = createContext();

function Provider ({children}){
    const [kids, setKids] = useState([]);

    const unstableFetchKids = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listKids));
            const kids = response.data.listKids.items;
            setKids(kids);
        } 
        catch (err) { 
            console.log('error fetching kids'); 
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