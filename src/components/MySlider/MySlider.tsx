import React, { FC, MouseEvent, useState } from 'react';

type SliderColor = 'primary' | 'secondary' | 'default';

type SliderVariant = 'circle' | 'square' | 'logo';

interface MySliderProps {
  color?: SliderColor;
  variant?: SliderVariant;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  disabled?: boolean;
}

const MySlider: FC<MySliderProps> = ({
  color = 'primary',
  variant = 'circle',
  disabled = false,
  min = 0,
  max = 100,
  step = 1,
  value = 100,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(value);

  const composeClassName = () => {
    const colorVariantCls = `slider-${color}-${variant}`;
    const disabledCls = disabled ? `slider-disabled` : '';
    return ['slider', colorVariantCls, disabledCls].join(' ');
  };

  return (
    <>
      <input
        className={composeClassName()}
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        disabled={disabled}
        onChange={(e) => setSliderValue(parseInt(e.target.value))}
        id="mySlider"
      />
    </>
  );
};
export default MySlider;
