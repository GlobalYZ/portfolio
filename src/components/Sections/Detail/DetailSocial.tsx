import {FC, memo} from 'react';

import {Social} from '../../../data/dataDef';

interface SocialsProps {
  socialLinks: Social[];
}

const Socials: FC<SocialsProps> = memo(({socialLinks}) => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 text-white transition-all duration-300 hover:text-orange-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

// Socials.displayName = 'Socials';
export default Socials;
