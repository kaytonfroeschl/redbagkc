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
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Ellipse(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { color: "Black" },
      overrides: {
        "Ellipse 9": {},
        "Ellipse 10": {},
        "Ellipse 11": {},
        Dots: {},
        Ellipse: {},
      },
    },
    {
      variantValues: { color: "gray" },
      overrides: {
        "Ellipse 9": {
          paths: [
            {
              d: "M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z",
              fill: "rgba(174,179,183,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "Ellipse 10": {
          paths: [
            {
              d: "M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z",
              fill: "rgba(174,179,183,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "Ellipse 11": {
          paths: [
            {
              d: "M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z",
              fill: "rgba(174,179,183,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Dots: {},
        Ellipse: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="5px"
      height="19px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Ellipse")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Dots")}
      >
        <Icon
          width="5px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 5, height: 5 }}
          paths={[
            {
              d: "M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 9")}
        ></Icon>
        <Icon
          width="5px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 5, height: 5 }}
          paths={[
            {
              d: "M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 10")}
        ></Icon>
        <Icon
          width="5px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 5, height: 5 }}
          paths={[
            {
              d: "M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 11")}
        ></Icon>
      </Flex>
    </View>
  );
}
