import { Amplify } from 'aws-amplify';

export const ListChildrenQuery = 
`query getAllChildren {
  listChildren {
    items {
      ChildID
      Age
      Firstname
      RBL {
        FirstName
        LastName
      }
      Sponsor {
        FirstName
        LastName
      }
    }
  }
}
`;
