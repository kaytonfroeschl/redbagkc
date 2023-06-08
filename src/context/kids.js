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

    const newKids = [];
    if (kids.length !== 0) {
        //flatten the result
        //ChildID, Firstname, Gender, Age, ShirtSize, PantSize, ShoeSize, RBLName, SponsorName
        //console.log(kids);        
        kids.map((kid) => {
            var rbl = "";
            if (kid.RBL !== null) {
                rbl = kid.RBL.FirstName + " " + kid.RBL.LastName;
            };

            var sponsor = "";
            if (kid.Sponsor !== null) {
                sponsor = kid.Sponsor.FirstName + " " + kid.Sponsor.LastName;
            };

            const newKid = {
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

            newKids.push(newKid);
        });
        //console.log(newKids);
    };

    const valuesToShare = {
        newKids,
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