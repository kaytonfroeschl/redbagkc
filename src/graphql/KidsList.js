export const listKids = /* GraphQL */ `
  query ListKids(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKids(filter: $filter, limit: $limit, nextToken: $nextToken) {      
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
      nextToken
      startedAt
    }
  }
`;