/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSponsor = /* GraphQL */ `
  mutation CreateSponsor(
    $input: CreateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    createSponsor(input: $input, condition: $condition) {
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
export const updateSponsor = /* GraphQL */ `
  mutation UpdateSponsor(
    $input: UpdateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    updateSponsor(input: $input, condition: $condition) {
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
export const deleteSponsor = /* GraphQL */ `
  mutation DeleteSponsor(
    $input: DeleteSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    deleteSponsor(input: $input, condition: $condition) {
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
export const createRBL = /* GraphQL */ `
  mutation CreateRBL(
    $input: CreateRBLInput!
    $condition: ModelRBLConditionInput
  ) {
    createRBL(input: $input, condition: $condition) {
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
export const updateRBL = /* GraphQL */ `
  mutation UpdateRBL(
    $input: UpdateRBLInput!
    $condition: ModelRBLConditionInput
  ) {
    updateRBL(input: $input, condition: $condition) {
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
export const deleteRBL = /* GraphQL */ `
  mutation DeleteRBL(
    $input: DeleteRBLInput!
    $condition: ModelRBLConditionInput
  ) {
    deleteRBL(input: $input, condition: $condition) {
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
export const createChild = /* GraphQL */ `
  mutation CreateChild(
    $input: CreateChildInput!
    $condition: ModelChildConditionInput
  ) {
    createChild(input: $input, condition: $condition) {
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
export const updateChild = /* GraphQL */ `
  mutation UpdateChild(
    $input: UpdateChildInput!
    $condition: ModelChildConditionInput
  ) {
    updateChild(input: $input, condition: $condition) {
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
export const deleteChild = /* GraphQL */ `
  mutation DeleteChild(
    $input: DeleteChildInput!
    $condition: ModelChildConditionInput
  ) {
    deleteChild(input: $input, condition: $condition) {
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
