import { FC } from "react";

import { Button } from "@/components/ui/button";
import { SliderControl } from "./slider-control";

interface ControlsPanelProps {
  values: {
    width: number;
    height: number;
    padding: number;
    border: number;
    margin: number;
    borderRadius: number;
  };
  updateValue: (property: string, newValue: number[]) => void;
  resetValues: () => void;
}

export const ControlsPanel: FC<ControlsPanelProps> = ({
  values,
  updateValue,
  resetValues,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SliderControl
          label="Width"
          value={values.width}
          min={100}
          max={300}
          step={10}
          onChange={(value) => updateValue("width", value)}
        />
        <SliderControl
          label="Height"
          value={values.height}
          min={50}
          max={200}
          step={10}
          onChange={(value) => updateValue("height", value)}
        />
        <SliderControl
          label="Padding"
          value={values.padding}
          min={0}
          max={50}
          step={5}
          onChange={(value) => updateValue("padding", value)}
        />
        <SliderControl
          label="Border"
          value={values.border}
          min={0}
          max={10}
          step={1}
          onChange={(value) => updateValue("border", value)}
        />
        <SliderControl
          label="Margin"
          value={values.margin}
          min={0}
          max={50}
          step={5}
          onChange={(value) => updateValue("margin", value)}
        />
        <SliderControl
          label="Border Radius"
          value={values.borderRadius}
          min={0}
          max={50}
          step={5}
          onChange={(value) => updateValue("borderRadius", value)}
        />
      </div>

      <Button onClick={resetValues} variant="outline" className="w-full">
        Reset to Defaults
      </Button>
    </div>
  );
};
