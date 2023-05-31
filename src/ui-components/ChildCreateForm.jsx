/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Child, RBL as RBL0, Sponsor as Sponsor0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ChildCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Firstname: "",
    ChildID: "",
    Gender: "",
    Age: "",
    ShirtSize: "",
    PantSize: "",
    ShoeSize: "",
    RBL: undefined,
    Sponsor: undefined,
  };
  const [Firstname, setFirstname] = React.useState(initialValues.Firstname);
  const [ChildID, setChildID] = React.useState(initialValues.ChildID);
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [Age, setAge] = React.useState(initialValues.Age);
  const [ShirtSize, setShirtSize] = React.useState(initialValues.ShirtSize);
  const [PantSize, setPantSize] = React.useState(initialValues.PantSize);
  const [ShoeSize, setShoeSize] = React.useState(initialValues.ShoeSize);
  const [RBL, setRBL] = React.useState(initialValues.RBL);
  const [Sponsor, setSponsor] = React.useState(initialValues.Sponsor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstname(initialValues.Firstname);
    setChildID(initialValues.ChildID);
    setGender(initialValues.Gender);
    setAge(initialValues.Age);
    setShirtSize(initialValues.ShirtSize);
    setPantSize(initialValues.PantSize);
    setShoeSize(initialValues.ShoeSize);
    setRBL(initialValues.RBL);
    setCurrentRBLValue(undefined);
    setCurrentRBLDisplayValue("");
    setSponsor(initialValues.Sponsor);
    setCurrentSponsorValue(undefined);
    setCurrentSponsorDisplayValue("");
    setErrors({});
  };
  const [currentRBLDisplayValue, setCurrentRBLDisplayValue] =
    React.useState("");
  const [currentRBLValue, setCurrentRBLValue] = React.useState(undefined);
  const RBLRef = React.createRef();
  const [currentSponsorDisplayValue, setCurrentSponsorDisplayValue] =
    React.useState("");
  const [currentSponsorValue, setCurrentSponsorValue] =
    React.useState(undefined);
  const SponsorRef = React.createRef();
  const getIDValue = {
    RBL: (r) => JSON.stringify({ id: r?.id }),
    Sponsor: (r) => JSON.stringify({ id: r?.id }),
  };
  const RBLIdSet = new Set(
    Array.isArray(RBL)
      ? RBL.map((r) => getIDValue.RBL?.(r))
      : getIDValue.RBL?.(RBL)
  );
  const SponsorIdSet = new Set(
    Array.isArray(Sponsor)
      ? Sponsor.map((r) => getIDValue.Sponsor?.(r))
      : getIDValue.Sponsor?.(Sponsor)
  );
  const rBLRecords = useDataStoreBinding({
    type: "collection",
    model: RBL0,
  }).items;
  const sponsorRecords = useDataStoreBinding({
    type: "collection",
    model: Sponsor0,
  }).items;
  const getDisplayValue = {
    RBL: (r) => `${r?.LastName ? r?.LastName + " - " : ""}${r?.id}`,
    Sponsor: (r) => `${r?.FirstName ? r?.FirstName + " - " : ""}${r?.id}`,
  };
  const validations = {
    Firstname: [{ type: "Required" }],
    ChildID: [{ type: "Required" }],
    Gender: [],
    Age: [{ type: "Required" }],
    ShirtSize: [],
    PantSize: [],
    ShoeSize: [],
    RBL: [],
    Sponsor: [],
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
          Gender,
          Age,
          ShirtSize,
          PantSize,
          ShoeSize,
          RBL,
          Sponsor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          await DataStore.save(new Child(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChildCreateForm")}
      {...rest}
    >
      <Heading
        level={6}
        children="Create Child"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <TextField
          label="Name"
          isRequired={true}
          isReadOnly={false}
          value={Firstname}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Firstname: value,
                ChildID,
                Gender,
                Age,
                ShirtSize,
                PantSize,
                ShoeSize,
                RBL,
                Sponsor,
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
          label="ID"
          isRequired={true}
          isReadOnly={false}
          value={ChildID}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                Firstname,
                ChildID: value,
                Gender,
                Age,
                ShirtSize,
                PantSize,
                ShoeSize,
                RBL,
                Sponsor,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
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
                Gender: value,
                Age,
                ShirtSize,
                PantSize,
                ShoeSize,
                RBL,
                Sponsor,
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
          isRequired={true}
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
                Gender,
                Age: value,
                ShirtSize,
                PantSize,
                ShoeSize,
                RBL,
                Sponsor,
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
      </Grid>
      <SelectField
        label="Shirt size"
        placeholder="Please select an option"
        isDisabled={false}
        value={ShirtSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              Gender,
              Age,
              ShirtSize: value,
              PantSize,
              ShoeSize,
              RBL,
              Sponsor,
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
      >
        <option
          children="3M"
          value="3M"
          {...getOverrideProps(overrides, "ShirtSizeoption0")}
        ></option>
        <option
          children="6M"
          value="6M"
          {...getOverrideProps(overrides, "ShirtSizeoption1")}
        ></option>
        <option
          children="9M"
          value="9M"
          {...getOverrideProps(overrides, "ShirtSizeoption2")}
        ></option>
        <option
          children="12M"
          value="12M"
          {...getOverrideProps(overrides, "ShirtSizeoption3")}
        ></option>
        <option
          children="18M"
          value="18M"
          {...getOverrideProps(overrides, "ShirtSizeoption4")}
        ></option>
        <option
          children="24M"
          value="24M"
          {...getOverrideProps(overrides, "ShirtSizeoption5")}
        ></option>
        <option
          children="3T"
          value="3T"
          {...getOverrideProps(overrides, "ShirtSizeoption6")}
        ></option>
        <option
          children="4T"
          value="4T"
          {...getOverrideProps(overrides, "ShirtSizeoption7")}
        ></option>
        <option
          children="5T"
          value="5T"
          {...getOverrideProps(overrides, "ShirtSizeoption8")}
        ></option>
        <option
          children="Youth XS"
          value="Youth XS"
          {...getOverrideProps(overrides, "ShirtSizeoption9")}
        ></option>
        <option
          children="Youth S"
          value="Youth S"
          {...getOverrideProps(overrides, "ShirtSizeoption10")}
        ></option>
        <option
          children="Youth M"
          value="Youth M"
          {...getOverrideProps(overrides, "ShirtSizeoption11")}
        ></option>
        <option
          children="Youth L"
          value="Youth L"
          {...getOverrideProps(overrides, "ShirtSizeoption12")}
        ></option>
        <option
          children="Youth XL"
          value="Youth XL"
          {...getOverrideProps(overrides, "ShirtSizeoption13")}
        ></option>
        <option
          children="Adult XS"
          value="Adult XS"
          {...getOverrideProps(overrides, "ShirtSizeoption14")}
        ></option>
        <option
          children="Adult S"
          value="Adult S"
          {...getOverrideProps(overrides, "ShirtSizeoption15")}
        ></option>
        <option
          children="Adult M"
          value="Adult M"
          {...getOverrideProps(overrides, "ShirtSizeoption16")}
        ></option>
        <option
          children="Adult L"
          value="Adult L"
          {...getOverrideProps(overrides, "ShirtSizeoption17")}
        ></option>
        <option
          children="Adult XL"
          value="Adult XL"
          {...getOverrideProps(overrides, "ShirtSizeoption18")}
        ></option>
        <option
          children="Adult 2XL"
          value="Adult 2XL"
          {...getOverrideProps(overrides, "ShirtSizeoption19")}
        ></option>
        <option
          children="Adult 3XL"
          value="Adult 3XL"
          {...getOverrideProps(overrides, "ShirtSizeoption20")}
        ></option>
      </SelectField>
      <SelectField
        label="Pant size"
        placeholder="Please select an option"
        isDisabled={false}
        value={PantSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              Gender,
              Age,
              ShirtSize,
              PantSize: value,
              ShoeSize,
              RBL,
              Sponsor,
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
      >
        <option
          children="3M"
          value="3M"
          {...getOverrideProps(overrides, "PantSizeoption0")}
        ></option>
        <option
          children="6M"
          value="6M"
          {...getOverrideProps(overrides, "PantSizeoption1")}
        ></option>
        <option
          children="9M"
          value="9M"
          {...getOverrideProps(overrides, "PantSizeoption2")}
        ></option>
        <option
          children="12M"
          value="12M"
          {...getOverrideProps(overrides, "PantSizeoption3")}
        ></option>
        <option
          children="18M"
          value="18M"
          {...getOverrideProps(overrides, "PantSizeoption4")}
        ></option>
        <option
          children="24M"
          value="24M"
          {...getOverrideProps(overrides, "PantSizeoption5")}
        ></option>
        <option
          children="3T"
          value="3T"
          {...getOverrideProps(overrides, "PantSizeoption6")}
        ></option>
        <option
          children="4T"
          value="4T"
          {...getOverrideProps(overrides, "PantSizeoption7")}
        ></option>
        <option
          children="5T"
          value="5T"
          {...getOverrideProps(overrides, "PantSizeoption8")}
        ></option>
        <option
          children="Youth XS"
          value="Youth XS"
          {...getOverrideProps(overrides, "PantSizeoption9")}
        ></option>
        <option
          children="Youth S"
          value="Youth S"
          {...getOverrideProps(overrides, "PantSizeoption10")}
        ></option>
        <option
          children="Youth M"
          value="Youth M"
          {...getOverrideProps(overrides, "PantSizeoption11")}
        ></option>
        <option
          children="Youth L"
          value="Youth L"
          {...getOverrideProps(overrides, "PantSizeoption12")}
        ></option>
        <option
          children="Youth XL"
          value="Youth XL"
          {...getOverrideProps(overrides, "PantSizeoption13")}
        ></option>
        <option
          children="Adult XS"
          value="Adult XS"
          {...getOverrideProps(overrides, "PantSizeoption14")}
        ></option>
        <option
          children="Adult S"
          value="Adult S"
          {...getOverrideProps(overrides, "PantSizeoption15")}
        ></option>
        <option
          children="Adult M"
          value="Adult M"
          {...getOverrideProps(overrides, "PantSizeoption16")}
        ></option>
        <option
          children="Adult L"
          value="Adult L"
          {...getOverrideProps(overrides, "PantSizeoption17")}
        ></option>
        <option
          children="Adult XL"
          value="Adult XL"
          {...getOverrideProps(overrides, "PantSizeoption18")}
        ></option>
        <option
          children="Adult 2XL"
          value="Adult 2XL"
          {...getOverrideProps(overrides, "PantSizeoption19")}
        ></option>
        <option
          children="Adult 3XL"
          value="Adult 3XL"
          {...getOverrideProps(overrides, "PantSizeoption20")}
        ></option>
      </SelectField>
      <SelectField
        label="Shoe size"
        placeholder="Please select an option"
        isDisabled={false}
        value={ShoeSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              Gender,
              Age,
              ShirtSize,
              PantSize,
              ShoeSize: value,
              RBL,
              Sponsor,
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
      >
        <option
          children="Baby Shoe"
          value="Baby Shoe"
          {...getOverrideProps(overrides, "ShoeSizeoption0")}
        ></option>
        <option
          children="Youth 3.5"
          value="Youth 3.5"
          {...getOverrideProps(overrides, "ShoeSizeoption1")}
        ></option>
        <option
          children="Youth 4"
          value="Youth 4"
          {...getOverrideProps(overrides, "ShoeSizeoption2")}
        ></option>
        <option
          children="Youth 4.5"
          value="Youth 4.5"
          {...getOverrideProps(overrides, "ShoeSizeoption3")}
        ></option>
        <option
          children="Youth 5"
          value="Youth 5"
          {...getOverrideProps(overrides, "ShoeSizeoption4")}
        ></option>
        <option
          children="Youth 5.5"
          value="Youth 5.5"
          {...getOverrideProps(overrides, "ShoeSizeoption5")}
        ></option>
        <option
          children="Youth 6"
          value="Youth 6"
          {...getOverrideProps(overrides, "ShoeSizeoption6")}
        ></option>
        <option
          children="Youth 6.5"
          value="Youth 6.5"
          {...getOverrideProps(overrides, "ShoeSizeoption7")}
        ></option>
        <option
          children="Youth 7"
          value="Youth 7"
          {...getOverrideProps(overrides, "ShoeSizeoption8")}
        ></option>
        <option
          children="Youth 7.5"
          value="Youth 7.5"
          {...getOverrideProps(overrides, "ShoeSizeoption9")}
        ></option>
        <option
          children="Youth 8"
          value="Youth 8"
          {...getOverrideProps(overrides, "ShoeSizeoption10")}
        ></option>
        <option
          children="Youth 9.5"
          value="Youth 9.5"
          {...getOverrideProps(overrides, "ShoeSizeoption11")}
        ></option>
        <option
          children="10"
          value="10"
          {...getOverrideProps(overrides, "ShoeSizeoption12")}
        ></option>
        <option
          children="Adult 3.5"
          value="Adult 3.5"
          {...getOverrideProps(overrides, "ShoeSizeoption13")}
        ></option>
        <option
          children="Adult 4"
          value="Adult 4"
          {...getOverrideProps(overrides, "ShoeSizeoption14")}
        ></option>
        <option
          children="Adult 4.5"
          value="Adult 4.5"
          {...getOverrideProps(overrides, "ShoeSizeoption15")}
        ></option>
        <option
          children="Adult 5"
          value="Adult 5"
          {...getOverrideProps(overrides, "ShoeSizeoption16")}
        ></option>
        <option
          children="Adult 5.5"
          value="Adult 5.5"
          {...getOverrideProps(overrides, "ShoeSizeoption17")}
        ></option>
        <option
          children="Adult 6"
          value="Adult 6"
          {...getOverrideProps(overrides, "ShoeSizeoption18")}
        ></option>
        <option
          children="Adult 6.5"
          value="Adult 6.5"
          {...getOverrideProps(overrides, "ShoeSizeoption19")}
        ></option>
        <option
          children="Adult 7"
          value="Adult 7"
          {...getOverrideProps(overrides, "ShoeSizeoption20")}
        ></option>
        <option
          children="Adult 7.5"
          value="Adult 7.5"
          {...getOverrideProps(overrides, "ShoeSizeoption21")}
        ></option>
        <option
          children="Adult 8"
          value="Adult 8"
          {...getOverrideProps(overrides, "ShoeSizeoption22")}
        ></option>
        <option
          children="Adult 9.5"
          value="Adult 9.5"
          {...getOverrideProps(overrides, "ShoeSizeoption23")}
        ></option>
        <option
          children="Adult 10"
          value="Adult 10"
          {...getOverrideProps(overrides, "ShoeSizeoption24")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              Gender,
              Age,
              ShirtSize,
              PantSize,
              ShoeSize,
              RBL: value,
              Sponsor,
            };
            const result = onChange(modelFields);
            value = result?.RBL ?? value;
          }
          setRBL(value);
          setCurrentRBLValue(undefined);
          setCurrentRBLDisplayValue("");
        }}
        currentFieldValue={currentRBLValue}
        label={"Rbl"}
        items={RBL ? [RBL] : []}
        hasError={errors?.RBL?.hasError}
        errorMessage={errors?.RBL?.errorMessage}
        getBadgeText={getDisplayValue.RBL}
        setFieldValue={(model) => {
          setCurrentRBLDisplayValue(model ? getDisplayValue.RBL(model) : "");
          setCurrentRBLValue(model);
        }}
        inputFieldRef={RBLRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Rbl"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search RBL"
          value={currentRBLDisplayValue}
          options={rBLRecords
            .filter((r) => !RBLIdSet.has(getIDValue.RBL?.(r)))
            .map((r) => ({
              id: getIDValue.RBL?.(r),
              label: getDisplayValue.RBL?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentRBLValue(
              rBLRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRBLDisplayValue(label);
            runValidationTasks("RBL", label);
          }}
          onClear={() => {
            setCurrentRBLDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.RBL?.hasError) {
              runValidationTasks("RBL", value);
            }
            setCurrentRBLDisplayValue(value);
            setCurrentRBLValue(undefined);
          }}
          onBlur={() => runValidationTasks("RBL", currentRBLDisplayValue)}
          errorMessage={errors.RBL?.errorMessage}
          hasError={errors.RBL?.hasError}
          ref={RBLRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "RBL")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              Gender,
              Age,
              ShirtSize,
              PantSize,
              ShoeSize,
              RBL,
              Sponsor: value,
            };
            const result = onChange(modelFields);
            value = result?.Sponsor ?? value;
          }
          setSponsor(value);
          setCurrentSponsorValue(undefined);
          setCurrentSponsorDisplayValue("");
        }}
        currentFieldValue={currentSponsorValue}
        label={"Sponsor"}
        items={Sponsor ? [Sponsor] : []}
        hasError={errors?.Sponsor?.hasError}
        errorMessage={errors?.Sponsor?.errorMessage}
        getBadgeText={getDisplayValue.Sponsor}
        setFieldValue={(model) => {
          setCurrentSponsorDisplayValue(
            model ? getDisplayValue.Sponsor(model) : ""
          );
          setCurrentSponsorValue(model);
        }}
        inputFieldRef={SponsorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Sponsor"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Sponsor"
          value={currentSponsorDisplayValue}
          options={sponsorRecords
            .filter((r) => !SponsorIdSet.has(getIDValue.Sponsor?.(r)))
            .map((r) => ({
              id: getIDValue.Sponsor?.(r),
              label: getDisplayValue.Sponsor?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSponsorValue(
              sponsorRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSponsorDisplayValue(label);
            runValidationTasks("Sponsor", label);
          }}
          onClear={() => {
            setCurrentSponsorDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Sponsor?.hasError) {
              runValidationTasks("Sponsor", value);
            }
            setCurrentSponsorDisplayValue(value);
            setCurrentSponsorValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Sponsor", currentSponsorDisplayValue)
          }
          errorMessage={errors.Sponsor?.errorMessage}
          hasError={errors.Sponsor?.hasError}
          ref={SponsorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Sponsor")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
