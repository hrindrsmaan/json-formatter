"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PropertyInfo {
  default: string;
  description: string;
}

interface Control {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  info: PropertyInfo;
}

const FlexboxPlayground = () => {
  // Container Properties
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [gap, setGap] = useState("1");

  // Item Properties
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [flexGrow, setFlexGrow] = useState("0");
  const [flexShrink, setFlexShrink] = useState("1");
  const [flexBasis, setFlexBasis] = useState("auto");
  const [alignSelf, setAlignSelf] = useState("auto");
  const [order, setOrder] = useState("0");

  const propertyInfo = {
    flexDirection: {
      default: "row",
      description:
        'Establishes main-axis direction. Default "row" flows left-to-right.',
    },
    justifyContent: {
      default: "flex-start",
      description:
        'Aligns items along main axis. Default "flex-start" places items at start.',
    },
    alignItems: {
      default: "stretch",
      description:
        'Aligns items along cross axis. Default "stretch" fills container height.',
    },
    alignContent: {
      default: "stretch",
      description:
        "Aligns multiple lines of content. Only works with wrap enabled.",
    },
    flexWrap: {
      default: "nowrap",
      description:
        'Controls whether items wrap to new lines. Default "nowrap" forces single line.',
    },
    gap: {
      default: "0",
      description: 'Sets spacing between flex items. Default "0" means no gap.',
    },
    flexGrow: {
      default: "0",
      description:
        'How much item grows relative to siblings. Default "0" means no growing.',
    },
    flexShrink: {
      default: "1",
      description:
        'How much item shrinks relative to siblings. Default "1" allows shrinking.',
    },
    flexBasis: {
      default: "auto",
      description:
        'Initial main size of item. Default "auto" uses item\'s content size.',
    },
    alignSelf: {
      default: "auto",
      description: "Overrides container's align-items for specific item.",
    },
    order: {
      default: "0",
      description:
        'Controls order of items. Default "0", lower numbers come first.',
    },
  };

  const containerControls = [
    {
      label: "Flex Direction",
      value: flexDirection,
      onChange: setFlexDirection,
      options: ["row", "row-reverse", "column", "column-reverse"],
      info: propertyInfo.flexDirection,
    },
    {
      label: "Justify Content",
      value: justifyContent,
      onChange: setJustifyContent,
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      info: propertyInfo.justifyContent,
    },
    {
      label: "Align Items",
      value: alignItems,
      onChange: setAlignItems,
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      info: propertyInfo.alignItems,
    },
    {
      label: "Align Content",
      value: alignContent,
      onChange: setAlignContent,
      options: [
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "space-between",
        "space-around",
      ],
      info: propertyInfo.alignContent,
    },
    {
      label: "Flex Wrap",
      value: flexWrap,
      onChange: setFlexWrap,
      options: ["nowrap", "wrap", "wrap-reverse"],
      info: propertyInfo.flexWrap,
    },
    {
      label: "Gap",
      value: gap,
      onChange: setGap,
      options: ["0", "1", "2", "4"],
      info: propertyInfo.gap,
    },
  ];

  const itemControls = [
    {
      label: "Flex Grow",
      value: flexGrow,
      onChange: setFlexGrow,
      options: ["0", "1", "2", "3"],
      info: propertyInfo.flexGrow,
    },
    {
      label: "Flex Shrink",
      value: flexShrink,
      onChange: setFlexShrink,
      options: ["0", "1", "2", "3"],
      info: propertyInfo.flexShrink,
    },
    {
      label: "Flex Basis",
      value: flexBasis,
      onChange: setFlexBasis,
      options: ["auto", "0", "100px", "200px"],
      info: propertyInfo.flexBasis,
    },
    {
      label: "Align Self",
      value: alignSelf,
      onChange: setAlignSelf,
      options: [
        "auto",
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "baseline",
      ],
      info: propertyInfo.alignSelf,
    },
    {
      label: "Order",
      value: order,
      onChange: setOrder,
      options: ["0", "1", "2", "3", "-1"],
      info: propertyInfo.order,
    },
  ];

  const PropertyControl = ({ control }: { control: Control }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">{control.label}</label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="cursor-help text-gray-400 text-xs border border-gray-400 w-4 h-4 inline-flex items-center justify-center rounded-full">
                ?
              </span>
            </TooltipTrigger>
            <TooltipContent className="w-64">
              <p className="font-medium">Default: {control.info.default}</p>
              <p>{control.info.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Select value={control.value} onValueChange={control.onChange}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {control.options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  // const containerStyle = {
  //   display: "flex",
  //   flexDirection,
  //   justifyContent,
  //   alignItems,
  //   alignContent,
  //   flexWrap,
  //   gap: `${gap}rem`,
  //   minHeight: "250px",
  //   padding: "1rem",
  //   backgroundColor: "#f3f4f6",
  //   border: "2px dashed #d1d5db",
  //   borderRadius: "0.5rem",
  // };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: flexDirection as React.CSSProperties["flexDirection"],
    justifyContent: justifyContent as React.CSSProperties["justifyContent"],
    alignItems: alignItems as React.CSSProperties["alignItems"],
    alignContent: alignContent as React.CSSProperties["alignContent"],
    flexWrap: flexWrap as React.CSSProperties["flexWrap"],
    gap: `${gap}rem`,
    minHeight: "250px",
    padding: "1rem",
    backgroundColor: "#f3f4f6",
    border: "2px dashed #d1d5db",
    borderRadius: "0.5rem",
  };

  const boxes = [1, 2, 3, 4, 5];

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Flexbox Playground</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="container">
          <TabsList>
            <TabsTrigger value="container">Container Properties</TabsTrigger>
            <TabsTrigger value="items">Item Properties</TabsTrigger>
          </TabsList>

          <TabsContent value="container" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {containerControls.map((control) => (
                <PropertyControl key={control.label} control={control} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="items" className="space-y-6">
            <p className="text-sm text-muted-foreground mb-4">
              Click on a box to modify its individual properties
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {itemControls.map((control) => (
                <PropertyControl key={control.label} control={control} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div style={containerStyle}>
          {boxes.map((num) => (
            <div
              key={num}
              onClick={() => setSelectedItem(num)}
              style={{
                ...(selectedItem === num
                  ? {
                      flexGrow,
                      flexShrink,
                      flexBasis,
                      alignSelf,
                      order,
                    }
                  : {}),
              }}
              className={`
                flex items-center justify-center w-16 h-16 
                ${selectedItem === num ? "bg-primary" : "bg-primary/80"} 
                text-primary-foreground font-bold rounded-lg cursor-pointer
                transition-all duration-200
                ${selectedItem === num ? "ring-2 ring-ring" : ""}
              `}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-muted rounded-md">
          <pre className="text-sm">
            {`// Container CSS
.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
  flex-wrap: ${flexWrap};
  gap: ${gap}rem;
}

${
  selectedItem
    ? `
// Selected Item (#${selectedItem}) CSS
.item-${selectedItem} {
  flex-grow: ${flexGrow};
  flex-shrink: ${flexShrink};
  flex-basis: ${flexBasis};
  align-self: ${alignSelf};
  order: ${order};
}`
    : ""
}`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlexboxPlayground;
