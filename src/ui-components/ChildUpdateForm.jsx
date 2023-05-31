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
  Icon,
  ScrollView,
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
    RBL: undefined,
    Sponsor: undefined,
  };
  const [Firstname, setFirstname] = React.useState(initialValues.Firstname);
  const [ChildID, setChildID] = React.useState(initialValues.ChildID);
  const [ShirtSize, setShirtSize] = React.useState(initialValues.ShirtSize);
  const [PantSize, setPantSize] = React.useState(initialValues.PantSize);
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [Age, setAge] = React.useState(initialValues.Age);
  const [ShoeSize, setShoeSize] = React.useState(initialValues.ShoeSize);
  const [RBL, setRBL] = React.useState(initialValues.RBL);
  const [Sponsor, setSponsor] = React.useState(initialValues.Sponsor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = childRecord
      ? { ...initialValues, ...childRecord, RBL, Sponsor }
      : initialValues;
    setFirstname(cleanValues.Firstname);
    setChildID(cleanValues.ChildID);
    setShirtSize(cleanValues.ShirtSize);
    setPantSize(cleanValues.PantSize);
    setGender(cleanValues.Gender);
    setAge(cleanValues.Age);
    setShoeSize(cleanValues.ShoeSize);
    setRBL(cleanValues.RBL);
    setCurrentRBLValue(undefined);
    setCurrentRBLDisplayValue("");
    setSponsor(cleanValues.Sponsor);
    setCurrentSponsorValue(undefined);
    setCurrentSponsorDisplayValue("");
    setErrors({});
  };
  const [childRecord, setChildRecord] = React.useState(childModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Child, idProp)
        : childModelProp;
      setChildRecord(record);
      const RBLRecord = record ? await record.RBL : undefined;
      setRBL(RBLRecord);
      const SponsorRecord = record ? await record.Sponsor : undefined;
      setSponsor(SponsorRecord);
    };
    queryData();
  }, [idProp, childModelProp]);
  React.useEffect(resetStateValues, [childRecord, RBL, Sponsor]);
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
    ShirtSize: [],
    PantSize: [],
    Gender: [],
    Age: [],
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
          ShirtSize,
          PantSize,
          Gender,
          Age,
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
          await DataStore.save(
            Child.copyOf(childRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.RBL) {
                updated.rblID = undefined;
              }
              if (!modelFields.Sponsor) {
                updated.sponsorID = undefined;
              }
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
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Firstname,
              ChildID,
              ShirtSize,
              PantSize,
              Gender,
              Age,
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
          defaultValue={RBL}
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
              ShirtSize,
              PantSize,
              Gender,
              Age,
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
          defaultValue={Sponsor}
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
