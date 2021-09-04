import DynamicButton from '@components/UI/Buttons/DynamicButton';
import ShadowButton from '@components/UI/Buttons/ShadowButton';
import SubWidget from '@components/UI/Cards/SubWidget';
import { FiLink } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { IoMdPodium } from 'react-icons/io';

const SubDescription = () => (
  <SubWidget
    title="About Community"
    aside={
      <div className="flex items-center text-xs cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 p-1 rounded">
        <IoMdPodium size={24} />
        <span className="px-2"> MOOD TOOLS </span>
      </div>
    }
  >
    <ShadowButton>Add description</ShadowButton>
    <div className="grid grid-cols-2 my-3">
      <div className="col-span-1 flex flex-col items-center">
        <h3 className="font-semibold text-lg">1, 452, 123</h3>
        <p>Members</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <h3 className="font-semibold text-lg">345</h3>
        <p>Online</p>
      </div>
    </div>
    <div className="border-t border-b my-4 py-2 px-3">
      <div className="flex items-center py-1">
        <FiLink size={22} />
        <small className="text-base font-light px-3">Created Sep 2, 2021</small>
      </div>
      <div className="flex items-center py-1">
        <ImEye size={22} />
        <small className="text-base font-light px-3">Private</small>
      </div>
    </div>
    <div className="my-5">
      <h2 className="text-lg font-medium">Comunity Topics</h2>
      <small className="text-gray-500 text-xs">
        Adding community topics allow people to find your community. Add a
        primary topic and sub topics to be discovered more easily.
      </small>
      <ShadowButton>Add Topics</ShadowButton>
    </div>
    <div className="w-full border-t border-b py-3">
      <DynamicButton>Create Post</DynamicButton>
    </div>
  </SubWidget>
);

export default SubDescription;
