import { createContext, useState, useCallback } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listChildren } from "../graphql/queries";

const KidsContext = createContext();

function Provider ({children}){
    //console.log("kids.js: Provider: Begin");

    const [kids, setKids] = useState([]);
    
    const flattenKids = (kidsLevels) => {
        const flatKids = [];
        if (kidsLevels.length !== 0) {
            //flatten the result to: 
            //ChildID, Firstname, Gender, Age, ShirtSize, PantSize, ShoeSize, RBLName, SponsorName            
            kidsLevels.map((kid) => {
                var rbl = "";
                if (kid.RBL !== null) {
                    rbl = kid.RBL.FirstName + " " + kid.RBL.LastName;
                };

                var sponsor = "";
                if (kid.Sponsor !== null) {
                    sponsor = kid.Sponsor.FirstName + " " + kid.Sponsor.LastName;
                };

                const flatKid = {
                    ChildID: kid.ChildID, 
                    Firstname: kid.Firstname, 
                    Gender: kid.Gender, 
                    Age: kid.Age, 
                    ShirtSize: kid.ShirtSize, 
                    PantSize: kid.PantSize, 
                    ShoeSize: kid.ShoeSize, 
                    RBL: rbl, 
                    Sponsor: sponsor
                };

                flatKids.push(flatKid);
            });
        };
        //console.log(newKids);
        return flatKids;
    };

    const unstableFetchKids = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listChildren));
            //console.log("Kids.js: Provider. response has " + response.data.listChildren.items.length + " elements");
            const flat = flattenKids(response.data.listChildren.items);
            //console.log("Kids.js: Provider. flatKids has " + flat.length + " elements");
            setKids(flat);
        } 
        catch (err) { 
            console.log('error in Provider: await API.graphql(graphqlOperation(listChildren))'); 
        };        
    };

    //console.log("Kids.js: Provider. After 'setKids(flatKids), Kids has " + kids.length + " elements");
    
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