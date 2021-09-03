import MainButton from '@components/UI/Buttons/MainButton';
import { FaRedditAlien, FaRegUserCircle } from 'react-icons/fa';
import { TiStarburstOutline } from 'react-icons/ti';
import { CgImage } from 'react-icons/cg';
import { VscFlame } from 'react-icons/vsc';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoMdPodium } from 'react-icons/io';
import { ImEye } from 'react-icons/im';
import Card from '@components/UI/Cards/Card';
import SingleInput from '@components/forms/fields/SingleInput';
import Icon from '@components/UI/Buttons/Icon';
import { FiLink } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ShadowButton from '@components/UI/Buttons/ShadowButton';

const SubPage = () => (
  <div>
    {/* Head */}
    <div className="h-40 bg-red-200">
      <div className="h-2/4 bg-blue-400 cursor-pointer" />
      <div className="bg-white relative h-2/4 flex justify-center">
        <div className="w-20 h-20 absolute -top-4 left-40 rounded-full border-8 border-white bg-blue-500 flex justify-center items-center">
          <span className="font-bold text-5xl text-white">r/</span>
        </div>
        <div className="w-3/5 flex flex-col">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold py-1 mr-6 ">
              secondPersonalComm
            </h1>
            <MainButton filled={false} clickHandler={() => {}}>
              Join
            </MainButton>
          </div>
          <span className="text-gray-500">r/secondPersonalComm</span>
        </div>
      </div>
    </div>
    <div className="w-screen flex py-5 justify-center">
      <div className="w-4/5 flex">
        <div className="w-8/12 mx-6">
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
          <Card className="my-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon
                  // component={<FaHotjar size={22} />}
                  component={<VscFlame size={22} />}
                  text="Hot"
                  clickHandler={() => {}}
                />
                <Icon
                  component={<TiStarburstOutline size={22} />}
                  text="New"
                  clickHandler={() => {}}
                />
                <Icon
                  component={<IoMdPodium size={22} />}
                  text="Top"
                  clickHandler={() => {}}
                />
                <Icon
                  component={<BsThreeDots size={22} />}
                  clickHandler={() => {}}
                />
              </div>
              <Icon
                component={
                  <>
                    <AiOutlineMenu size={22} />
                    <MdKeyboardArrowDown size={22} />
                  </>
                }
                clickHandler={() => {}}
              />
            </div>
          </Card>
          <Card>
            <h2 className="text-xl font-bold py-2"> Grow Your Community </h2>
            <div className="mb-4 w-full border rounded py-2 px-4 cursor-pointer grid grid-cols-8 hover:bg-gray-100">
              <div className="col-span-1 flex justify-center">
                <div
                  className="flex justify-center items-center rounded-full 
                bg-blue-400 w-12 h-12 my-3 text-white hover:bg-blue-600"
                >
                  <AiOutlinePlus size={30} />
                </div>
              </div>
              <div className="col-span-7 ">
                <h3 className="text-lg font-semibold">
                  Time to make your first post!
                </h3>
                <span className="text-sm text-gray-500 block py-1">
                  Now that you&apos;ve created your community, start things off
                  right by making your first post
                </span>

                <MainButton clickHandler={() => {}} alpha="400">
                  Make Your First Post
                </MainButton>
              </div>
            </div>
            <div className="mb-4 w-full border rounded py-2 px-4 cursor-pointer grid grid-cols-8 hover:bg-gray-100">
              <div className="col-span-1 flex justify-center">
                <div
                  className="flex justify-center items-center rounded-full 
                bg-green-500 w-12 h-12 my-3 text-white hover:bg-green-600"
                >
                  <FaRedditAlien size={30} />
                </div>
              </div>
              <div className="col-span-7 ">
                <h3 className="text-lg font-semibold">Recruit More Members!</h3>
                <span className="text-sm text-gray-500 block py-1">
                  Now that you&apos;ve created your community, start things off
                  right by making your first post
                </span>

                <MainButton clickHandler={() => {}} color="green">
                  Learn More
                </MainButton>
              </div>
            </div>
          </Card>
          <Card className="my-4">
            <h1>asndsjak</h1>
          </Card>
        </div>
        <div className="w-4/12 ">
          <Card padding={false}>
            <div className="p-3 bg-blue-500 rounded-t-md text-white flex justify-between items-center">
              <h3 className="font-semibold">About Community</h3>
              <div className="flex items-center text-xs cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 p-1 rounded">
                <IoMdPodium size={24} />
                <span className="px-2"> MOOD TOOLS </span>
              </div>
            </div>
            <div className="p-3">
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
                  <small className="text-base font-light px-3">
                    Created Sep 2, 2021
                  </small>
                </div>
                <div className="flex items-center py-1">
                  <ImEye size={22} />
                  <small className="text-base font-light px-3">Private</small>
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-lg font-medium">Comunity Topics</h2>
                <small className="text-gray-500 text-xs">
                  Adding community topics allow people to find your community.
                  Add a primary topic and sub topics to be discovered more
                  easily.
                </small>
                <ShadowButton>Add Topics</ShadowButton>
              </div>
              <div className="w-full border-t border-b py-3">
                <MainButton width="full">Create Post</MainButton>
              </div>
            </div>
          </Card>
          <Card className="my-4">
            <h2 className="text-base font-medium my-3">Add Community Style</h2>
            <p className="text-sm">
              Styling your community helps attract members. For assistance, take
              a look at the Customize Appearance Overview . Here are some great
              ways to get started.
            </p>
            <div className="h-3" />
            <div className="flex items-center">
              <GoPrimitiveDot size={24} className="text-gray-300" />
              <span className="text-blue-500 text-sm">Add community icon</span>
            </div>
            <div className="flex items-center ">
              <GoPrimitiveDot size={24} className="text-gray-300" />
              <span className="text-blue-500 text-sm">Customize banner</span>
            </div>
            <div className="flex items-center">
              <GoPrimitiveDot size={24} className="text-gray-300" />
              <span className="text-blue-500 text-sm">Customize colors</span>
            </div>
            <div className="h-3" />
            <MainButton width="full">Customize Appearance</MainButton>
            <div className="h-3" />
          </Card>
          <Card>
            <h1>asndsjak</h1>
          </Card>
          <Card className="my-4">
            <h1>asndsjak</h1>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default SubPage;
