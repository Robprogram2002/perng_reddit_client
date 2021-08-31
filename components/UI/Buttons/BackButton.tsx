import { FiArrowLeftCircle } from 'react-icons/fi';

const BackButton = ({ clickHandler }: { clickHandler: () => void }) => (
  <div className="absolute bottom-6 left-8 flex items-center cursor-pointer">
    <FiArrowLeftCircle size={30} onClick={clickHandler} />
    <span className="px-2"> Back </span>
  </div>
);

export default BackButton;
