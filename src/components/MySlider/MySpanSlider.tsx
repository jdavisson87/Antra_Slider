import React, {
  FC,
  MouseEvent,
  useRef,
  DragEvent,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

type SliderColor = 'primary' | 'secondary' | 'default';
type SliderSize = 'small' | 'medium' | 'large';

interface MySliderProps {
  size?: SliderSize;
  color?: SliderColor;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  disabled?: boolean;
}

const MySlider: FC<MySliderProps> = ({
  size = 'medium',
  color = 'secondary',
  disabled = false,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(value);
  const [sliderWidth, setSliderWidth] = useState<number>();

  // let slots: number;

  const thumb = useRef<HTMLSpanElement>(null);
  const track = useRef<HTMLSpanElement>(null);

  // useEffect(() => {
  //   slots = (max - min) / step;
  // }, [min, max, value]);

  const onDragOver = (e: DragEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDragStart = (e: DragEvent<HTMLSpanElement>) => {
    console.log(e.screenX, thumb);
  };

  const onDragEnd = (e: DragEvent<HTMLSpanElement>) => {
    if (track) {
      if (e.screenX > 650) {
        setSliderValue(650);
      } else {
        setSliderValue(e.screenX);
      }
    }
  };

  return (
    <>
      <p>My Span Slider</p>
      <span
        className={`slider-container slider-${color} ${
          disabled ? 'slider-disabled' : ''
        }`}
      >
        <span
          className={`slider-rail slider-${color} ${
            disabled ? 'slider-disabled' : ''
          }`}
          ref={track}
        />
        <span
          className={`slider-track slider-track-${color} ${
            disabled ? 'slider-disabled' : ''
          }`}
          style={{ width: sliderValue }}
        />
        <div className="thumb-ctr">
          <span
            style={{ left: sliderValue }}
            ref={thumb}
            draggable="true"
            onDragOver={(e) => onDragOver(e)}
            onDragStart={(e) => onDragStart(e)}
            onDragEnd={(e) => onDragEnd(e)}
            className={`slider-thumb slider-${color} ${
              disabled ? 'slider-disabled' : ''
            }`}
          >
            <div
              className={`slider-valueLabel-ctr-${color} ${
                disabled ? 'slider-disabled' : ''
              }`}
            >
              <p
                className={`slider-valueLabel ${
                  disabled ? 'slider-disabled' : ''
                }`}
              >
                {sliderValue}
              </p>
            </div>
          </span>
        </div>
      </span>
    </>
  );
};
export default MySlider;
