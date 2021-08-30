import Link from 'next/link';
import { FC } from 'react';

const TextLink: FC<{ href: string; className?: string }> = ({
  children,
  href,
  className,
}) => (
  <Link href={href}>
    <span
      className={` text-blue-500 cursor-pointer hover:text-blue-400 ${className} px-2`}
    >
      {children}
    </span>
  </Link>
);

export default TextLink;
