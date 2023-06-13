/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
      id
      FirstName
      LastName
      Children {
        items {
          id
          Firstname
          ChildID
          rblID
          sponsorID
          ShirtSize
          PantSize
          Gender
          Age
          ShoeSize
          RBL {
            id
            LastName
            FirstName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Sponsor {
            id
            FirstName
            LastName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSponsors = /* GraphQL */ `
  query ListSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        Children {
          items {
            id
            Firstname
            ChildID
            rblID
            sponsorID
            ShirtSize
            PantSize
            Gender
            Age
            ShoeSize
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSponsors = /* GraphQL */ `
  query SyncSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSponsors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FirstName
        LastName
        Children {
          items {
            id
            Firstname
            ChildID
            rblID
            sponsorID
            ShirtSize
            PantSize
            Gender
            Age
            ShoeSize
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRBL = /* GraphQL */ `
  query GetRBL($id: ID!) {
    getRBL(id: $id) {
      id
      LastName
      FirstName
      Children {
        items {
          id
          Firstname
          ChildID
          rblID
          sponsorID
          ShirtSize
          PantSize
          Gender
          Age
          ShoeSize
          RBL {
            id
            LastName
            FirstName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Sponsor {
            id
            FirstName
            LastName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRBLS = /* GraphQL */ `
  query ListRBLS(
    $filter: ModelRBLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRBLS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        LastName
        FirstName
        Children {
          items {
            id
            Firstname
            ChildID
            rblID
            sponsorID
            ShirtSize
            PantSize
            Gender
            Age
            ShoeSize
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRBLS = /* GraphQL */ `
  query SyncRBLS(
    $filter: ModelRBLFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRBLS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        LastName
        FirstName
        Children {
          items {
            id
            Firstname
            ChildID
            rblID
            sponsorID
            ShirtSize
            PantSize
            Gender
            Age
            ShoeSize
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChild = /* GraphQL */ `
  query GetChild($id: ID!) {
    getChild(id: $id) {
      id
      Firstname
      ChildID
      rblID
      sponsorID
      ShirtSize
      PantSize
      Gender
      Age
      ShoeSize
      RBL {
        id
        LastName
        FirstName
        Children {
          items {
            id
            Firstname
            ChildID
            rblID
            sponsorID
            ShirtSize
            PantSize
            Gender
            Age
            ShoeSize
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Sponsor {
        id
        FirstName
        LastName
        Children {
          items {
            id
            Firstname
            ChildID
            rblID
            sponsorID
            ShirtSize
            PantSize
            Gender
            Age
            ShoeSize
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listChildren = /* GraphQL */ `
  query ListChildren(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildren(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Firstname
        ChildID
        rblID
        sponsorID
        ShirtSize
        PantSize
        Gender
        Age
        ShoeSize
        RBL {
          id
          LastName
          FirstName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Sponsor {
          id
          FirstName
          LastName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChildren = /* GraphQL */ `
  query SyncChildren(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChildren(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Firstname
        ChildID
        rblID
        sponsorID
        ShirtSize
        PantSize
        Gender
        Age
        ShoeSize
        RBL {
          id
          LastName
          FirstName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Sponsor {
          id
          FirstName
          LastName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const childrenByRblID = /* GraphQL */ `
  query ChildrenByRblID(
    $rblID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    childrenByRblID(
      rblID: $rblID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Firstname
        ChildID
        rblID
        sponsorID
        ShirtSize
        PantSize
        Gender
        Age
        ShoeSize
        RBL {
          id
          LastName
          FirstName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Sponsor {
          id
          FirstName
          LastName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const childrenBySponsorID = /* GraphQL */ `
  query ChildrenBySponsorID(
    $sponsorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    childrenBySponsorID(
      sponsorID: $sponsorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Firstname
        ChildID
        rblID
        sponsorID
        ShirtSize
        PantSize
        Gender
        Age
        ShoeSize
        RBL {
          id
          LastName
          FirstName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Sponsor {
          id
          FirstName
          LastName
          Children {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
