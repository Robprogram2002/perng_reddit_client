import MainButton from '@components/UI/Buttons/MainButton';
import Card from '@components/UI/Cards/Card';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRedditAlien } from 'react-icons/fa';

const SubActions = () => (
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
        <h3 className="text-lg font-semibold">Time to make your first post!</h3>
        <span className="text-sm text-gray-500 block py-1">
          Now that you&apos;ve created your community, start things off right by
          making your first post
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
          Now that you&apos;ve created your community, start things off right by
          making your first post
        </span>

        <MainButton clickHandler={() => {}} color="green">
          Learn More
        </MainButton>
      </div>
    </div>
  </Card>
);

export default SubActions;
