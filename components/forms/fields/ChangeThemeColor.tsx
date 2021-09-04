import { BlockPicker, ColorResult } from 'react-color';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ChangeThemeColor = ({
  initialColor,
  title,
  onColorChange,
}: {
  initialColor: string;
  title: string;
  // eslint-disable-next-line no-unused-vars
  onColorChange: (color: string) => void;
}) => {
  const [colorPicker, setColorPicker] = useState(initialColor);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker((prev) => !prev);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const changeHandler = (color: ColorResult) => {
    setColorPicker(color.hex);
    onColorChange(color.hex);
  };

  return (
    <div className="flex items-center justify-between pb-3 relative">
      <span className="text-sm text-gray-500">{title}</span>
      <button
        type="button"
        className="w-6 h-6 cursor-pointer rounded-sm flex justify-center items-center group"
        style={{ backgroundColor: colorPicker }}
        onClick={handleClick}
      >
        <MdKeyboardArrowDown
          size={20}
          className="text-transparent group-hover:text-white"
        />
      </button>
      {displayColorPicker && (
        <div className="absolute top-7 right-0 z-20">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <div
            className="fixed top-0 left-0 right-0 bottom-0"
            onClick={handleClose}
            onKeyDown={handleClose}
            role="link"
            tabIndex={0}
          />
          <BlockPicker color={colorPicker} onChange={changeHandler} />
        </div>
      )}
    </div>
  );
};

export default ChangeThemeColor;
