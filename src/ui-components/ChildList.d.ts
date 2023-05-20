/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RowPrimProps } from "./RowPrim";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChildListOverridesProps = {
    ChildList?: PrimitiveOverrideProps<CollectionProps>;
    RowPrim?: RowPrimProps;
} & EscapeHatchProps;
export declare type ChildListProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => RowPrimProps;
} & {
    overrides?: ChildListOverridesProps | undefined | null;
}>;
export default function ChildList(props: ChildListProps): React.ReactElement;
