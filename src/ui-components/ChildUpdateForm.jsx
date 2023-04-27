/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Child } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChildUpdateForm(props) {
  const {
    id: idProp,
    child: childModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Firstname: "",
    ChildID: "",
    ShirtSize: "",
    PantSize: "",
    Gender: "",
    Age: "",
    ShoeSize: "",
  };
  const [Firstname, setFirstname] = React.useState(initialValues.Firstname);
  const [ChildID, setChildID] = React.useState(initialValues.ChildID);
  const [ShirtSize, setShirtSize] = React.useState(initialValues.ShirtSize);
  const [PantSize, setPantSize] = React.useState(initialValues.PantSize);
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [Age, setAge] = React.useState(initialValues.Age);
  const [ShoeSize, setShoeSize] = React.useState(initialValues.ShoeSize);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = childRecord
      ? { ...initialValues, ...childRecord }
      : initialValues;
    setFirstname(cleanValues.Firstname);
    setChildID(cleanValues.ChildID);
    setShirtSize(cleanValues.ShirtSize);
    setPantSize(cleanValues.PantSize);
    setGender(cleanValues.Gender);
    setAge(cleanValues.Age);
    setShoeSize(cleanValues.ShoeSize);
    setErrors({});
  };
  const [childRecord, setChildRecord] = React.useState(childModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Child, idProp)
        : childModelProp;
      setChildRecord(record);
    };
    queryData();
  }, [idProp, childModelProp]);
  React.useEffect(resetStateValues, [childRecord]);
  const validations = {
    Firstname: [{ type: "Required" }],
    ChildID: [{ type: "Required" }],
    ShirtSize: [],
    PantSize: [],
    Gender: [],
    Age: [],
    ShoeSize: [],
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
          Firstname,
          ChildID,
          ShirtSize,
          PantSize,
          Gender,
          Age,
          ShoeSize,
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
            Child.copyOf(childRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ChildUpdateForm")}
      {...rest}
    >
      <TextField
        label="Firstname"
        isRequired={true}
        isReadOnly={false}
        value={Firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname: value,
              ChildID,
              ShirtSize,
              PantSize,
              Gender,
              Age,
              ShoeSize,
            };
            const result = onChange(modelFields);
            value = result?.Firstname ?? value;
          }
          if (errors.Firstname?.hasError) {
            runValidationTasks("Firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("Firstname", Firstname)}
        errorMessage={errors.Firstname?.errorMessage}
        hasError={errors.Firstname?.hasError}
        {...getOverrideProps(overrides, "Firstname")}
      ></TextField>
      <TextField
        label="Child id"
        isRequired={true}
        isReadOnly={false}
        value={ChildID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID: value,
              ShirtSize,
              PantSize,
              Gender,
              Age,
              ShoeSize,
            };
            const result = onChange(modelFields);
            value = result?.ChildID ?? value;
          }
          if (errors.ChildID?.hasError) {
            runValidationTasks("ChildID", value);
          }
          setChildID(value);
        }}
        onBlur={() => runValidationTasks("ChildID", ChildID)}
        errorMessage={errors.ChildID?.errorMessage}
        hasError={errors.ChildID?.hasError}
        {...getOverrideProps(overrides, "ChildID")}
      ></TextField>
      <TextField
        label="Shirt size"
        isRequired={false}
        isReadOnly={false}
        value={ShirtSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              ShirtSize: value,
              PantSize,
              Gender,
              Age,
              ShoeSize,
            };
            const result = onChange(modelFields);
            value = result?.ShirtSize ?? value;
          }
          if (errors.ShirtSize?.hasError) {
            runValidationTasks("ShirtSize", value);
          }
          setShirtSize(value);
        }}
        onBlur={() => runValidationTasks("ShirtSize", ShirtSize)}
        errorMessage={errors.ShirtSize?.errorMessage}
        hasError={errors.ShirtSize?.hasError}
        {...getOverrideProps(overrides, "ShirtSize")}
      ></TextField>
      <TextField
        label="Pant size"
        isRequired={false}
        isReadOnly={false}
        value={PantSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              ShirtSize,
              PantSize: value,
              Gender,
              Age,
              ShoeSize,
            };
            const result = onChange(modelFields);
            value = result?.PantSize ?? value;
          }
          if (errors.PantSize?.hasError) {
            runValidationTasks("PantSize", value);
          }
          setPantSize(value);
        }}
        onBlur={() => runValidationTasks("PantSize", PantSize)}
        errorMessage={errors.PantSize?.errorMessage}
        hasError={errors.PantSize?.hasError}
        {...getOverrideProps(overrides, "PantSize")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={Gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              ShirtSize,
              PantSize,
              Gender: value,
              Age,
              ShoeSize,
            };
            const result = onChange(modelFields);
            value = result?.Gender ?? value;
          }
          if (errors.Gender?.hasError) {
            runValidationTasks("Gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("Gender", Gender)}
        errorMessage={errors.Gender?.errorMessage}
        hasError={errors.Gender?.hasError}
        {...getOverrideProps(overrides, "Gender")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              ShirtSize,
              PantSize,
              Gender,
              Age: value,
              ShoeSize,
            };
            const result = onChange(modelFields);
            value = result?.Age ?? value;
          }
          if (errors.Age?.hasError) {
            runValidationTasks("Age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("Age", Age)}
        errorMessage={errors.Age?.errorMessage}
        hasError={errors.Age?.hasError}
        {...getOverrideProps(overrides, "Age")}
      ></TextField>
      <TextField
        label="Shoe size"
        isRequired={false}
        isReadOnly={false}
        value={ShoeSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              ShirtSize,
              PantSize,
              Gender,
              Age,
              ShoeSize: value,
            };
            const result = onChange(modelFields);
            value = result?.ShoeSize ?? value;
          }
          if (errors.ShoeSize?.hasError) {
            runValidationTasks("ShoeSize", value);
          }
          setShoeSize(value);
        }}
        onBlur={() => runValidationTasks("ShoeSize", ShoeSize)}
        errorMessage={errors.ShoeSize?.errorMessage}
        hasError={errors.ShoeSize?.hasError}
        {...getOverrideProps(overrides, "ShoeSize")}
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
          isDisabled={!(idProp || childModelProp)}
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
              !(idProp || childModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
