import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const PdfIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      clipRule="evenodd"
      d="M8 12.732A1.99 1.99 0 0 1 7 13H3v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.268ZM7 11V7.054a2 2 0 0 0-1.059.644l-2.46 2.87A2 2 0 0 0 3.2 11H7Z"
      fillRule="evenodd"
      transform="scale(5.5)"
    />
    <path
      clipRule="evenodd"
      d="M14 3.054V7h-3.8c.074-.154.168-.3.282-.432l2.46-2.87A2 2 0 0 1 14 3.054ZM16 3v4a2 2 0 0 1-2 2h-4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
      fillRule="evenodd"
      transform="scale(5.5)"
    />
  </Icon>
));

export default PdfIcon;
