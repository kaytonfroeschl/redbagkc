/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Badge, CheckboxField, Flex, Text, View } from "@aws-amplify/ui-react";
import Ellipse from "./Ellipse";
export default function RowPrim(props) {
  const { child, sponsor, rBL, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { action: "Default" },
      overrides: {
        "Rectangle 1164": {},
        "Rectangle 1165": {},
        CheckboxField: {},
        Badge: {},
        "Assigned ID": {},
        "Child Name": {},
        Sex: {},
        Age: {},
        "Shirt Size": {},
        "Pant Size": {},
        Sponsor: {},
        Ellipse: {},
        Content: {},
        Container: {},
        RowPrim: {},
      },
    },
    {
      variantValues: { action: "Hover" },
      overrides: {
        "Rectangle 1164": {},
        "Rectangle 1165": { display: "block" },
        CheckboxField: { defaultChecked: "true", isDisabled: "true" },
        Badge: {},
        "Assigned ID": {},
        "Child Name": {},
        Sex: {},
        Age: {},
        "Shirt Size": {},
        "Pant Size": {},
        Sponsor: {},
        Ellipse: {},
        Content: {},
        Container: {},
        RowPrim: {},
      },
    },
    {
      variantValues: { action: "Clicked" },
      overrides: {
        "Rectangle 1164": { display: "block" },
        "Rectangle 1165": { display: "block" },
        CheckboxField: { defaultChecked: "true" },
        Badge: {},
        "Assigned ID": {},
        "Child Name": {},
        Sex: {},
        Age: {},
        "Shirt Size": {},
        "Pant Size": {},
        Sponsor: {},
        Ellipse: {},
        Content: {},
        Container: {},
        RowPrim: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1440px"
      height="90px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RowPrim")}
      {...rest}
    >
      <View
        width="1440px"
        height="90px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(62,143,159,0.12)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <View
        width="10px"
        height="90px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(4,125,149,1)"
        {...getOverrideProps(overrides, "Rectangle 1165")}
      ></View>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="25px"
        left="40px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="78px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Content")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>
          <Badge
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            variation="addOn"
            color="yellow"
            children={`${rBL?.FirstName}${" "}${rBL?.LastName}`}
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={child?.ChildID}
            {...getOverrideProps(overrides, "Assigned ID")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={child?.Firstname}
            {...getOverrideProps(overrides, "Child Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={child?.Gender}
            {...getOverrideProps(overrides, "Sex")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={child?.Age}
            {...getOverrideProps(overrides, "Age")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={child?.ShirtSize}
            {...getOverrideProps(overrides, "Shirt Size")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={child?.PantSize}
            {...getOverrideProps(overrides, "Pant Size")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="25px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${sponsor?.FirstName}${" "}${sponsor?.LastName}`}
            {...getOverrideProps(overrides, "Sponsor")}
          ></Text>
          <Ellipse
            width="5px"
            height="19px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            color="gray"
            {...getOverrideProps(overrides, "Ellipse")}
          ></Ellipse>
        </Flex>
      </Flex>
    </View>
  );
}
