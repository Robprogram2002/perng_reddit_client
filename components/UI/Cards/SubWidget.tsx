import Card from '@components/UI/Cards/Card';
import { subThemeContext } from '@context/SubThemeContext';
import { FC, ReactNode, useContext } from 'react';

const SubDescription: FC<{
  title: string;
  aside?: ReactNode;
}> = ({ children, title, aside = null }) => {
  const { theme } = useContext(subThemeContext);

  return (
    <Card padding={false}>
      <div
        className="p-3 rounded-t-md text-white flex justify-between items-center"
        style={{ backgroundColor: theme.baseColor }}
      >
        <h3 className="font-medium text-base"> {title} </h3>
        {aside}
      </div>
      <div className="p-3">{children}</div>
    </Card>
  );
};
export default SubDescription;
