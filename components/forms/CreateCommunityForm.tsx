import { ChangeEvent, ReactNode, useContext, useState } from 'react';
import Icon from '@components/UI/Buttons/Icon';
import Modal from '@components/UI/Other/Modal';
import { GrClose } from 'react-icons/gr';
import { ImEye } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import MainButton from '@components/UI/Buttons/MainButton';
import { appContext } from '@context/AppContext';
import { gql, useMutation } from '@apollo/client';
import SingleInput from './fields/SingleInput';
import RadioButtonInput from './fields/RadioButtonInput';
import ChecBoxInput from './fields/ChecBoxInput';

const CREATESUB_MUTATION = gql`
  mutation CreateSub($createSubInput: CreateSubInput!) {
    createSub(input: $createSubInput) {
      code
      success
      message
      sub {
        name
        username
        type
        adultContent
        profileUrl
        title
        description
      }
    }
  }
`;

const CreateCommunityForm = () => {
  const [subName, setSubName] = useState('');
  const [subType, setSubType] = useState('');
  const [adultContent, setAdultContent] = useState('');
  const {
    state: { openModal },
    toggleModal,
  } = useContext(appContext);

  const [mutate, { loading }] = useMutation(CREATESUB_MUTATION, {
    onCompleted: ({ createSub }) => {
      console.log(createSub);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setSubName(e.target.value);
  };

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setSubType(e.target.name);
  };

  const onChangeBox = (e: ChangeEvent<HTMLInputElement>) => {
    if (adultContent === e.target.value) {
      setAdultContent('');
    } else {
      setAdultContent(e.target.value);
    }
  };

  const onSubmit = () => {
    mutate({
      variables: {
        createSubInput: {
          name: subName,
          type: subType,
          adultContent: adultContent !== '',
        },
      },
    });
  };

  const RadioOption = ({
    name,
    desc,
    icon,
  }: {
    name: string;
    desc: string;
    icon: ReactNode;
  }) => (
    <RadioButtonInput name={name} value={subType} changeHandler={onChangeRadio}>
      {icon}
      <strong className="capitalize">{name} </strong>
      <small className="text-gray-500 text-xs">{desc}</small>
    </RadioButtonInput>
  );

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
        <RadioOption
          icon={<FaUser size={20} className="text-gray-400" />}
          name="public"
          desc="Anyone can view, post, and comment to this community"
        />
        <RadioOption
          icon={<ImEye size={20} className="text-gray-400" />}
          name="restricted"
          desc="Anyone can view this community, but only approved users can post"
        />
        <RadioOption
          icon={
            <RiGitRepositoryPrivateFill size={20} className="text-gray-400" />
          }
          name="private"
          desc="Anyone can view, post, and comment to this community"
        />

        <div className="w-5/6 my-5">
          <h3 className="text-base font-semibold mb-1"> Adult Content </h3>
          <ChecBoxInput changeHandler={onChangeBox}>
            18 + year old community
          </ChecBoxInput>
        </div>
      </div>

      <div className="bg-gray-blue w-full p-4 flex justify-end ">
        <div className="">
          <MainButton filled={false} clickHandler={() => toggleModal(false)}>
            Cancel
          </MainButton>
          <MainButton clickHandler={onSubmit}>
            {loading ? 'Loading ...' : 'Create community'}
          </MainButton>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCommunityForm;
