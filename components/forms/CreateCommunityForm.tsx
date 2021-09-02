import { ChangeEvent, useContext, useState } from 'react';
import Icon from '@components/UI/Buttons/Icon';
import Modal from '@components/UI/Other/Modal';
import { GrClose } from 'react-icons/gr';
import { ImEye } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import MainButton from '@components/UI/Buttons/MainButton';
import { appContext } from '@context/AppContext';
import SingleInput from './fields/SingleInput';
import styles from './RadioInput.module.css';

const CreateCommunityForm = () => {
  const [subName, setSubName] = useState('');
  const {
    state: { openModal },
    toggleModal,
  } = useContext(appContext);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setSubName(e.target.value);
  };

  return (
    <Modal width="w-2/5" height="h-auto" isOpen={openModal}>
      <div className="p-4">
        <div className="absolute top-2 right-3">
          <Icon
            component={<GrClose size={20} className="text-gray-200" />}
            clickHandler={() => toggleModal(false)}
          />
        </div>
        <h1 className="text-base font-semibold pb-4 border-b">
          Create Community
        </h1>
        <div className="w-5/6 my-4">
          <h3 className="text-base font-semibold mb-1"> Name </h3>
          <small className="text-gray-500 text-xs block">
            Community names including capitalization cannot be changed.
          </small>
          <small className="text-gray-500 text-xs block">
            Names cannot have spaces, must be between 3-21 characters, and
            underscores (&quot;_&quot;) are the only special characters allowed.
          </small>
        </div>
        <SingleInput
          placeholder="r/"
          value={subName}
          changeHandler={onChangeName}
        />
        <div className="w-5/6 my-5">
          <h3 className="text-base font-semibold"> Community Type </h3>
        </div>
        <label className={styles.ContainerRadio}>
          <FaUser size={20} className="text-gray-400" /> <strong>Public</strong>
          <small className="text-gray-500 text-xs">
            Anyone can view, post, and comment to this community
          </small>
          <input type="radio" name="public" />
          <span className={styles.Checkmark} />
        </label>
        <label className={styles.ContainerRadio}>
          <ImEye size={20} className="text-gray-400" />
          <strong>Restricted</strong>
          <small className="text-gray-500 text-xs">
            Anyone can view this community, but only approved users can post
          </small>
          <input type="radio" name="restricted" />
          <span className={styles.Checkmark} />
        </label>
        <label className={styles.ContainerRadio}>
          <RiGitRepositoryPrivateFill size={20} className="text-gray-400" />
          <strong>Private</strong>
          <small className="text-gray-500 text-xs">
            Anyone can view, post, and comment to this community
          </small>
          <input type="radio" name="private" />
          <span className={styles.Checkmark} />
        </label>
        <div className="w-5/6 my-5">
          <h3 className="text-base font-semibold mb-1"> Adult Content </h3>
          <label className={styles.ContainerBox}>
            18 + year old community
            <input type="checkbox" />
            <span className={styles.Checkmark} />
          </label>
        </div>
      </div>

      <div className="bg-gray-blue w-full p-4 flex justify-end ">
        <div className="">
          <MainButton filled={false} clickHandler={() => toggleModal(false)}>
            Cancel
          </MainButton>
          <MainButton clickHandler={() => {}}> Create community </MainButton>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCommunityForm;
