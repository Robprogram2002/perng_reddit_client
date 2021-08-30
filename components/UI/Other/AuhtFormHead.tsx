import { FC } from 'react';
import TextLink from '../Links/TextLink';

const AuhtFormHead: FC<{ login?: boolean }> = ({ login = true }) => (
  <div className="mb-14 ">
    <h1 className="mb-2 text-3xl font-medium ">
      {login ? 'Login' : 'Register'}
    </h1>
    <p className="text-sm">
      By continuing, you agree to our
      <TextLink href="/" className="uppercase">
        User Agreement
      </TextLink>
      and{' '}
      <TextLink href="/" className="uppercase">
        Privacy Policy
      </TextLink>
    </p>
  </div>
);

export default AuhtFormHead;
