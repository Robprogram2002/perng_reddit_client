import MainButton from '@components/UI/Buttons/MainButton';
import Heading from '@components/UI/Other/SideHeading';
import { subThemeContext } from '@context/SubThemeContext';
import { useContext } from 'react';
import ChangeThemeColor from './fields/ChangeThemeColor';

const ColorThemeForm = () => {
  const {
    changeBaseColor,
    changeBodyBackground,
    changeHighlightColor,
    theme: { baseColor, highlightColor, bodyBackground },
  } = useContext(subThemeContext);

  return (
    <>
      <Heading title="Color Theme" />
      <small className="text-gray-500 text-sm">
        These community styling options will also display in Reddit apps.
      </small>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-2"> Theme Colors </h3>
        <ChangeThemeColor
          initialColor={baseColor}
          title="Base"
          onColorChange={changeBaseColor}
        />
        <ChangeThemeColor
          initialColor={highlightColor}
          title="Highlight"
          onColorChange={changeHighlightColor}
        />
      </div>
      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-3"> Body Background </h3>
        <ChangeThemeColor
          initialColor={bodyBackground}
          title="Color"
          onColorChange={changeBodyBackground}
        />
        <span className="text-sm text-gray-500">Image</span>
        <div className="h-28 w-full bg-gray-200 rounded mb-3" />
      </div>
      <MainButton width="full" clickHandler={() => {}}>
        Save
      </MainButton>
      <div className="h-2" />
    </>
  );
};

export default ColorThemeForm;
