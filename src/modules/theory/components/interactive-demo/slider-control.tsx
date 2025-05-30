import { FC } from "react";
import { Slider } from "@/components/ui/slider";

interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number[]) => void;
}

export const SliderControl: FC<SliderControlProps> = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}: {value}px
      </label>
      <Slider
        value={[value]}
        onValueChange={onChange}
        max={max}
        min={min}
        step={step}
        className="w-full"
      />
    </div>
  );
};
