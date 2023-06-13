/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sponsor, Child } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorUpdateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Children?: Child[];
};
export declare type SponsorUpdateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Children?: ValidationFunction<Child>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorUpdateFormOverridesProps = {
    SponsorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Children?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SponsorUpdateFormProps = React.PropsWithChildren<{
    overrides?: SponsorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sponsor?: Sponsor;
    onSubmit?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onSuccess?: (fields: SponsorUpdateFormInputValues) => void;
    onError?: (fields: SponsorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onValidate?: SponsorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SponsorUpdateForm(props: SponsorUpdateFormProps): React.ReactElement;
