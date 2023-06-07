import { createContext, useState, useCallback } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listChildren } from "../graphql/queries";

const KidsContext = createContext();

function Provider ({children}){
    const [kids, setKids] = useState([]);

    const unstableFetchKids = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listChildren));
            setKids(response.data.listChildren.items);
            console.log("kids.js: Provider: called API.graphql");
            console.log(kids);
        } 
        catch (err) { 
            console.log('error in Provider: await API.graphql(graphqlOperation(listChildren))'); 
        };        
    };
    
    console.log("kids.js: Provider: fetchKids");
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