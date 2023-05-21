/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RBL as RBL0, Sponsor as Sponsor0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewChildInputValues = {
    Firstname?: string;
    ChildID?: string;
    ShirtSize?: string;
    PantSize?: string;
    Gender?: string;
    Age?: number;
    ShoeSize?: string;
    RBL?: RBL0;
    Sponsor?: Sponsor0;
};
export declare type NewChildValidationValues = {
    Firstname?: ValidationFunction<string>;
    ChildID?: ValidationFunction<string>;
    ShirtSize?: ValidationFunction<string>;
    PantSize?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    ShoeSize?: ValidationFunction<string>;
    RBL?: ValidationFunction<RBL0>;
    Sponsor?: ValidationFunction<Sponsor0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewChildOverridesProps = {
    NewChildGrid?: PrimitiveOverrideProps<GridProps>;
    Firstname?: PrimitiveOverrideProps<TextFieldProps>;
    ChildID?: PrimitiveOverrideProps<TextFieldProps>;
    ShirtSize?: PrimitiveOverrideProps<TextFieldProps>;
    PantSize?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    ShoeSize?: PrimitiveOverrideProps<TextFieldProps>;
    RBL?: PrimitiveOverrideProps<AutocompleteProps>;
    Sponsor?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type NewChildProps = React.PropsWithChildren<{
    overrides?: NewChildOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewChildInputValues) => NewChildInputValues;
    onSuccess?: (fields: NewChildInputValues) => void;
    onError?: (fields: NewChildInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NewChildInputValues) => NewChildInputValues;
    onValidate?: NewChildValidationValues;
} & React.CSSProperties>;
export default function NewChild(props: NewChildProps): React.ReactElement;
