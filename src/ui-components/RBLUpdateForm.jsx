/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RBL } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RBLUpdateForm(props) {
  const {
    id: idProp,
    rBL: rBLModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    LastName: "",
    FirstName: "",
  };
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rBLRecord
      ? { ...initialValues, ...rBLRecord }
      : initialValues;
    setLastName(cleanValues.LastName);
    setFirstName(cleanValues.FirstName);
    setErrors({});
  };
  const [rBLRecord, setRBLRecord] = React.useState(rBLModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(RBL, idProp) : rBLModelProp;
      setRBLRecord(record);
    };
    queryData();
  }, [idProp, rBLModelProp]);
  React.useEffect(resetStateValues, [rBLRecord]);
  const validations = {
    LastName: [{ type: "Required" }],
    FirstName: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          LastName,
          FirstName,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            RBL.copyOf(rBLRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RBLUpdateForm")}
      {...rest}
    >
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LastName: value,
              FirstName,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LastName,
              FirstName: value,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || rBLModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || rBLModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}