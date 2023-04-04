/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RBLCreateFormInputValues = {
    LastName?: string;
    FirstName?: string;
};
export declare type RBLCreateFormValidationValues = {
    LastName?: ValidationFunction<string>;
    FirstName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RBLCreateFormOverridesProps = {
    RBLCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RBLCreateFormProps = React.PropsWithChildren<{
    overrides?: RBLCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RBLCreateFormInputValues) => RBLCreateFormInputValues;
    onSuccess?: (fields: RBLCreateFormInputValues) => void;
    onError?: (fields: RBLCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RBLCreateFormInputValues) => RBLCreateFormInputValues;
    onValidate?: RBLCreateFormValidationValues;
} & React.CSSProperties>;
export default function RBLCreateForm(props: RBLCreateFormProps): React.ReactElement;
