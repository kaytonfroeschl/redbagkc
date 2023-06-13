/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Child } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorCreateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Children?: Child[];
};
export declare type SponsorCreateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Children?: ValidationFunction<Child>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorCreateFormOverridesProps = {
    SponsorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Children?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SponsorCreateFormProps = React.PropsWithChildren<{
    overrides?: SponsorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onSuccess?: (fields: SponsorCreateFormInputValues) => void;
    onError?: (fields: SponsorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onValidate?: SponsorCreateFormValidationValues;
} & React.CSSProperties>;
export default function SponsorCreateForm(props: SponsorCreateFormProps): React.ReactElement;
