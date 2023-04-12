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
export declare type NewChildInputValues = {
    Firstname?: string;
    ChildID?: string;
};
export declare type NewChildValidationValues = {
    Firstname?: ValidationFunction<string>;
    ChildID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewChildOverridesProps = {
    NewChildGrid?: PrimitiveOverrideProps<GridProps>;
    Firstname?: PrimitiveOverrideProps<TextFieldProps>;
    ChildID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewChildProps = React.PropsWithChildren<{
    overrides?: NewChildOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewChildInputValues) => NewChildInputValues;
    onSuccess?: (fields: NewChildInputValues) => void;
    onError?: (fields: NewChildInputValues, errorMessage: string) => void;
    onChange?: (fields: NewChildInputValues) => NewChildInputValues;
    onValidate?: NewChildValidationValues;
} & React.CSSProperties>;
export default function NewChild(props: NewChildProps): React.ReactElement;
