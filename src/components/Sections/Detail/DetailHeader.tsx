import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import {portfolioItems} from '../../../data/data';

interface DetailHeaderProps {
  id: string;
}

const DetailHeader: FC<DetailHeaderProps> = memo(({id}) => {
  return (
    <>
      <MobileNav />
      <DesktopNav id={id} />
    </>
  );
});

interface DesktopNavProps {
  id: string;
}

const DesktopNav: FC<DesktopNavProps> = memo(({id}) => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/#Projects');
  };

  // Ensure 'id' is a valid string before using it
  let title = '';
  const index = parseInt(id); // Convert id to a number

  if (!isNaN(index) && portfolioItems[index]) {
    title = portfolioItems[index].title; // Fetch the title from the portfolioItems
  } else {
    console.log('Invalid id or id is not a number');
  }

  return (
    <header className="fixed top-0 z-50 hidden w-full bg-orange-400/80 p-4 backdrop-blur sm:block">
      <button aria-label="Menu Button" className="float-left" onClick={goToHomePage}>
        <ArrowUturnLeftIcon className="h-7 w-7 text-white" />
      </button>
      <p className="text-center text-white text-xl rounded-md font-bold first-letter:uppercase">
        {title || 'Loading...'}
      </p>
    </header>
  );
});

const MobileNav = memo(() => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <button
      aria-label="Menu Button"
      className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
      onClick={goToHomePage}>
      <ArrowUturnLeftIcon className="h-8 w-8 text-white" />
    </button>
  );
});

export default DetailHeader;
