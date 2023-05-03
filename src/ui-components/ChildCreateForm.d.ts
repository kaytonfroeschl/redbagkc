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
export declare type ChildCreateFormInputValues = {
    Firstname?: string;
    ChildID?: string;
    ShirtSize?: string;
    PantSize?: string;
    Gender?: string;
    Age?: number;
    ShoeSize?: string;
};
export declare type ChildCreateFormValidationValues = {
    Firstname?: ValidationFunction<string>;
    ChildID?: ValidationFunction<string>;
    ShirtSize?: ValidationFunction<string>;
    PantSize?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    ShoeSize?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChildCreateFormOverridesProps = {
    ChildCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Firstname?: PrimitiveOverrideProps<TextFieldProps>;
    ChildID?: PrimitiveOverrideProps<TextFieldProps>;
    ShirtSize?: PrimitiveOverrideProps<TextFieldProps>;
    PantSize?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    ShoeSize?: PrimitiveOverrideProps<TextFieldProps>;
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
