// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sponsor, RBL, Child } = initSchema(schema);

export {
  Sponsor,
  RBL,
  Child
};