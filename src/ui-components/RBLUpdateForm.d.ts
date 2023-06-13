/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RBL, Child } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RBLUpdateFormInputValues = {
    LastName?: string;
    FirstName?: string;
    Children?: Child[];
};
export declare type RBLUpdateFormValidationValues = {
    LastName?: ValidationFunction<string>;
    FirstName?: ValidationFunction<string>;
    Children?: ValidationFunction<Child>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RBLUpdateFormOverridesProps = {
    RBLUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    Children?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RBLUpdateFormProps = React.PropsWithChildren<{
    overrides?: RBLUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rBL?: RBL;
    onSubmit?: (fields: RBLUpdateFormInputValues) => RBLUpdateFormInputValues;
    onSuccess?: (fields: RBLUpdateFormInputValues) => void;
    onError?: (fields: RBLUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RBLUpdateFormInputValues) => RBLUpdateFormInputValues;
    onValidate?: RBLUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RBLUpdateForm(props: RBLUpdateFormProps): React.ReactElement;
