/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RBL as RBL0, Sponsor as Sponsor0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChildCreateFormInputValues = {
    Firstname?: string;
    ChildID?: string;
    Gender?: string;
    Age?: number;
    ShirtSize?: string;
    PantSize?: string;
    ShoeSize?: string;
    RBL?: RBL0;
    Sponsor?: Sponsor0;
};
export declare type ChildCreateFormValidationValues = {
    Firstname?: ValidationFunction<string>;
    ChildID?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    ShirtSize?: ValidationFunction<string>;
    PantSize?: ValidationFunction<string>;
    ShoeSize?: ValidationFunction<string>;
    RBL?: ValidationFunction<RBL0>;
    Sponsor?: ValidationFunction<Sponsor0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChildCreateFormOverridesProps = {
    ChildCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    Firstname?: PrimitiveOverrideProps<TextFieldProps>;
    ChildID?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    Gender?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    ShirtSize?: PrimitiveOverrideProps<SelectFieldProps>;
    PantSize?: PrimitiveOverrideProps<SelectFieldProps>;
    ShoeSize?: PrimitiveOverrideProps<SelectFieldProps>;
    RBL?: PrimitiveOverrideProps<AutocompleteProps>;
    Sponsor?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ChildCreateFormProps = React.PropsWithChildren<{
    overrides?: ChildCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChildCreateFormInputValues) => ChildCreateFormInputValues;
    onSuccess?: (fields: ChildCreateFormInputValues) => void;
    onError?: (fields: ChildCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChildCreateFormInputValues) => ChildCreateFormInputValues;
    onValidate?: ChildCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChildCreateForm(props: ChildCreateFormProps): React.ReactElement;
