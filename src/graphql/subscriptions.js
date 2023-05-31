/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onCreateSponsor(filter: $filter) {
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
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onUpdateSponsor(filter: $filter) {
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
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onDeleteSponsor(filter: $filter) {
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
export const onCreateRBL = /* GraphQL */ `
  subscription OnCreateRBL($filter: ModelSubscriptionRBLFilterInput) {
    onCreateRBL(filter: $filter) {
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
export const onUpdateRBL = /* GraphQL */ `
  subscription OnUpdateRBL($filter: ModelSubscriptionRBLFilterInput) {
    onUpdateRBL(filter: $filter) {
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
export const onDeleteRBL = /* GraphQL */ `
  subscription OnDeleteRBL($filter: ModelSubscriptionRBLFilterInput) {
    onDeleteRBL(filter: $filter) {
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
export const onCreateChild = /* GraphQL */ `
  subscription OnCreateChild($filter: ModelSubscriptionChildFilterInput) {
    onCreateChild(filter: $filter) {
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
export const onUpdateChild = /* GraphQL */ `
  subscription OnUpdateChild($filter: ModelSubscriptionChildFilterInput) {
    onUpdateChild(filter: $filter) {
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
export const onDeleteChild = /* GraphQL */ `
  subscription OnDeleteChild($filter: ModelSubscriptionChildFilterInput) {
    onDeleteChild(filter: $filter) {
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
