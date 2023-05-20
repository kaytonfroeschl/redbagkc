/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Child, Sponsor, RBL } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, CheckboxFieldProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { EllipseProps } from "./Ellipse";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RowPrimOverridesProps = {
    RowPrim?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Assigned ID"?: PrimitiveOverrideProps<TextProps>;
    "Child Name"?: PrimitiveOverrideProps<TextProps>;
    Sex?: PrimitiveOverrideProps<TextProps>;
    Age?: PrimitiveOverrideProps<TextProps>;
    "Shirt Size"?: PrimitiveOverrideProps<TextProps>;
    "Pant Size"?: PrimitiveOverrideProps<TextProps>;
    Sponsor?: PrimitiveOverrideProps<TextProps>;
    Ellipse?: EllipseProps;
} & EscapeHatchProps;
export declare type RowPrimProps = React.PropsWithChildren<Partial<ViewProps> & {
    child?: Child;
    sponsor?: Sponsor;
    rBL?: RBL;
} & {
    action?: "Clicked" | "Default" | "Hover";
} & {
    overrides?: RowPrimOverridesProps | undefined | null;
}>;
export default function RowPrim(props: RowPrimProps): React.ReactElement;
