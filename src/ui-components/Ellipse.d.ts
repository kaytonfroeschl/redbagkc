/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EllipseOverridesProps = {
    Ellipse?: PrimitiveOverrideProps<ViewProps>;
    Dots?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 9"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 10"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 11"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EllipseProps = React.PropsWithChildren<Partial<ViewProps> & {
    color?: "Black" | "gray";
} & {
    overrides?: EllipseOverridesProps | undefined | null;
}>;
export default function Ellipse(props: EllipseProps): React.ReactElement;
