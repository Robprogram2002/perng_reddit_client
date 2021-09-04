import DynamicButton from '@components/UI/Buttons/DynamicButton';

const SubHeader = ({
  baseColor,
  highlightColor,
}: {
  baseColor: string;
  highlightColor: string;
}) => (
  <div className="h-40 bg-red-200">
    <div
      className="h-2/4 cursor-pointer"
      style={{ backgroundColor: baseColor }}
    />
    <div className="bg-white relative h-2/4 flex justify-center">
      <div
        className="w-20 h-20 absolute -top-4 left-40 rounded-full border-8 border-white flex justify-center items-center"
        style={{ backgroundColor: baseColor }}
      >
        <span className="font-bold text-5xl text-white">r/</span>
      </div>
      <div className="w-3/5 flex flex-col">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold py-1 mr-6 ">secondPersonalComm</h1>
          <DynamicButton
            filled={false}
            width="auto"
            color={highlightColor}
            clickHandler={() => {}}
          >
            Join
          </DynamicButton>
        </div>
        <span className="text-gray-500">r/secondPersonalComm</span>
      </div>
    </div>
  </div>
);

export default SubHeader;
