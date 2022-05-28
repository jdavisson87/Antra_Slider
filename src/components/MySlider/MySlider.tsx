import React, { FC, ReactNode, MouseEvent, useState } from 'react';

type SliderColor = 'primary' | 'secondary' | 'default';

type SliderVariant = 'circle' | 'square' | 'image';

interface MySliderProps {
  color?: SliderColor;
  variant?: SliderVariant;
  min?: number;
  max?: number;
  step?: number;
  value?: string;
  disabled?: boolean;
}

const MySlider: FC<MySliderProps> = ({
  color = 'primary',
  variant = 'circle',
  disabled = false,
  min = 0,
  max = 100,
  step = 1,
  value = '100',
}) => {
  const [sliderValue, setSliderValue] = useState<string>(value);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        disabled={disabled}
        onChange={(e) => setSliderValue(e.target.value)}
        id="mySlider"
      />
    </>
  );
};
export default MySlider;
