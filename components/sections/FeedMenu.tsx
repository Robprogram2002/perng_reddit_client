import { TiStarburstOutline } from 'react-icons/ti';
import { VscFlame } from 'react-icons/vsc';
import Icon from '@components/UI/Buttons/Icon';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Card from '@components/UI/Cards/Card';
import { IoMdPodium } from 'react-icons/io';

const FeedMenu = ({ highlightColor }: { highlightColor: string }) => (
  <Card className="my-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Icon
          // component={<FaHotjar size={22} />}
          component={<VscFlame size={22} />}
          text="Hot"
          clickHandler={() => {}}
          color={highlightColor}
          active
        />
        <Icon
          component={<TiStarburstOutline size={22} />}
          text="New"
          clickHandler={() => {}}
          color={highlightColor}
          active={false}
        />
        <Icon
          component={<IoMdPodium size={22} />}
          text="Top"
          clickHandler={() => {}}
          color={highlightColor}
          active={false}
        />
        <Icon component={<BsThreeDots size={22} />} clickHandler={() => {}} />
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
);

export default FeedMenu;
