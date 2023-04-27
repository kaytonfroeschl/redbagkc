/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Child } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChildUpdateFormInputValues = {
    Firstname?: string;
    ChildID?: string;
    ShirtSize?: string;
    PantSize?: string;
    Gender?: string;
    Age?: number;
    ShoeSize?: string;
};
export declare type ChildUpdateFormValidationValues = {
    Firstname?: ValidationFunction<string>;
    ChildID?: ValidationFunction<string>;
    ShirtSize?: ValidationFunction<string>;
    PantSize?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    ShoeSize?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChildUpdateFormOverridesProps = {
    ChildUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Firstname?: PrimitiveOverrideProps<TextFieldProps>;
    ChildID?: PrimitiveOverrideProps<TextFieldProps>;
    ShirtSize?: PrimitiveOverrideProps<TextFieldProps>;
    PantSize?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    ShoeSize?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChildUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChildUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    child?: Child;
    onSubmit?: (fields: ChildUpdateFormInputValues) => ChildUpdateFormInputValues;
    onSuccess?: (fields: ChildUpdateFormInputValues) => void;
    onError?: (fields: ChildUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChildUpdateFormInputValues) => ChildUpdateFormInputValues;
    onValidate?: ChildUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChildUpdateForm(props: ChildUpdateFormProps): React.ReactElement;
