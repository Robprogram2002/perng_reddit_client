import Card from '@components/UI/Cards/Card';
import { FC, ReactNode } from 'react';

const SubDescription: FC<{
  baseColor: string;
  title: string;
  aside?: ReactNode;
}> = ({ children, baseColor, title, aside = null }) => (
  <Card padding={false}>
    <div
      className="p-3 rounded-t-md text-white flex justify-between items-center"
      style={{ backgroundColor: baseColor }}
    >
      <h3 className="font-medium text-base"> {title} </h3>
      {aside}
    </div>
    <div className="p-3">{children}</div>
  </Card>
);

export default SubDescription;
