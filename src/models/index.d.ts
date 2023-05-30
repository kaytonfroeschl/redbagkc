import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Children?: (Child | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Children: AsyncCollection<Child>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sponsor = LazyLoading extends LazyLoadingDisabled ? EagerSponsor : LazySponsor

export declare const Sponsor: (new (init: ModelInit<Sponsor>) => Sponsor) & {
  copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}

type EagerRBL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RBL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LastName: string;
  readonly FirstName: string;
  readonly Children?: (Child | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRBL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RBL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LastName: string;
  readonly FirstName: string;
  readonly Children: AsyncCollection<Child>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RBL = LazyLoading extends LazyLoadingDisabled ? EagerRBL : LazyRBL

export declare const RBL: (new (init: ModelInit<RBL>) => RBL) & {
  copyOf(source: RBL, mutator: (draft: MutableModel<RBL>) => MutableModel<RBL> | void): RBL;
}

type EagerChild = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Child, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Firstname: string;
  readonly ChildID: string;
  readonly rblID?: string | null;
  readonly sponsorID?: string | null;
  readonly ShirtSize?: string | null;
  readonly PantSize?: string | null;
  readonly Gender?: string | null;
  readonly Age?: number | null;
  readonly ShoeSize?: string | null;
  readonly RBL?: RBL | null;
  readonly Sponsor?: Sponsor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChild = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Child, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Firstname: string;
  readonly ChildID: string;
  readonly rblID?: string | null;
  readonly sponsorID?: string | null;
  readonly ShirtSize?: string | null;
  readonly PantSize?: string | null;
  readonly Gender?: string | null;
  readonly Age?: number | null;
  readonly ShoeSize?: string | null;
  readonly RBL: AsyncItem<RBL | undefined>;
  readonly Sponsor: AsyncItem<Sponsor | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Child = LazyLoading extends LazyLoadingDisabled ? EagerChild : LazyChild

export declare const Child: (new (init: ModelInit<Child>) => Child) & {
  copyOf(source: Child, mutator: (draft: MutableModel<Child>) => MutableModel<Child> | void): Child;
}