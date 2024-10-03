// import Socials from '../Socials';
import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {ChevronUpIcon} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../data/data';
import {ContactType, ContactValue} from '../../data/dataDef';
import FacebookIcon from '../Icon/FacebookIcon';
import GithubIcon from '../Icon/GithubIcon';
import InstagramIcon from '../Icon/InstagramIcon';
import LinkedInIcon from '../Icon/LinkedInIcon';
import TwitterIcon from '../Icon/TwitterIcon';
import Section from '../Layout/Section';

// const currentYear = new Date().getFullYear();

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Footer: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <div className="relative px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${SectionId.Hero}`}>
          <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
        </a>
      </div>
      <Section sectionId={SectionId.Contact}>
        <div className="flex flex-col gap-y-6 items-center">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <h2 className="text-2xl font-bold text-white">{headerText}</h2>
            {/* <ChatBubbleOvalLeftEllipsisIcon className="hidden h-12 w-12 text-white md:block" /> */}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
              <p className="prose leading-6 text-neutral-300">{description}</p>
              <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">
                {items.map(({type, text, href}) => {
                  const {Icon, srLabel} = ContactValueMap[type];
                  return (
                    <div className="text-orange-100 text-center" key={srLabel}>
                      <dt className="sr-only">{srLabel}</dt>
                      <dd className="flex items-center">
                        <a
                          className={classNames(
                            '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                            {'hover:text-white': href},
                          )}
                          href={href}
                          target="_blank">
                          <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                          <span className="ml-3 text-sm sm:text-base">{text}</span>
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
});

Footer.displayName = 'Footer';
export default Footer;
