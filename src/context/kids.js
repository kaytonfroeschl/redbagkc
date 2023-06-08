import { createContext, useState, useCallback } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listChildren } from "../graphql/queries";

const KidsContext = createContext();

function Provider ({children}){
    const [kids, setKids] = useState([]);
    console.log("kids.js: Provider: Begin");
    const unstableFetchKids = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listChildren));
            setKids(response.data.listChildren.items);
            console.log("kids.js: Provider: called API.graphql");
        } 
        catch (err) { 
            console.log('error in Provider: await API.graphql(graphqlOperation(listChildren))'); 
        };        
    };
    
    console.log("kids.js: Provider: fetchKids useCallback");
    const fetchKids = useCallback(unstableFetchKids, []);

    if (kids.length !== 0) {
        //flatten the result
        //ChildID, Firstname, Gender, Age, ShirtSize, PantSize, ShoeSize, RBLName, SponsorName
        //I have no idea how to do this
        console.log(kids);
    }

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