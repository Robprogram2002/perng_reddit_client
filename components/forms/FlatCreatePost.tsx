import Icon from '@components/UI/Buttons/Icon';
import Card from '@components/UI/Cards/Card';
import { CgImage } from 'react-icons/cg';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import SingleInput from './fields/SingleInput';

const FlatCreatePost = () => (
  <Card>
    <div className="flex items-center">
      <FaRegUserCircle size={40} className="mr-3 text-gray-500" />
      <SingleInput
        placeholder="Create new post"
        value=""
        changeHandler={() => {}}
      />
      <Icon component={<CgImage size={22} />} clickHandler={() => {}} />
      <Icon component={<FiLink size={22} />} clickHandler={() => {}} />
    </div>
  </Card>
);

export default FlatCreatePost;
