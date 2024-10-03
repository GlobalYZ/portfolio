import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const UrlIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <svg aria-hidden="true" className="w-6 h-6" fill="none" height="120" viewBox="0 0 120 120" width="120">
      <g transform="scale(5.5)">
        <path
          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
          fillRule="evenodd"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  </Icon>
));

export default UrlIcon;
