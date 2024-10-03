import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

// import style from './Detail.module.css';
import {detailBg, portfolioItems, techIcons} from '../../../data/data';
import ScrollContainer from '../../scroll';
import Socials from './DetailSocial';

interface DetailHeaderProps {
  id: string;
}

interface DataItem {
  imgSrc: string;
  text: string;
}

const DetailContent: FC<DetailHeaderProps> = memo(({id}) => {
  const index = parseInt(id); // Convert id to a number
  const techData: DataItem[] = useMemo(() => [], []);

  portfolioItems[index].tech.forEach(item => {
    if (!techIcons[item]) {
      techData.push({
        imgSrc: techIcons['default'],
        text: item,
      });
    } else {
      techData.push({
        imgSrc: techIcons[item],
        text: item,
      });
    }
  });
  return (
    <>
      <div className="flex md:flex-row flex-col bg-dark md:pr-15 sm:px-0 md:min-w-[1250px] min-w-0">
        <div className="relative md:h-screen flex items-center justify-center rounded overflow-hidden h-screen md:w-[800px] md:px-3">
          {/* Foreground Content */}
          <div className="z-10 flex flex-col justify-center items-center bg-slate-400/70 pt-5 rounded p-4 md:h-auto w-full">
            <Image alt="projectImage" className="rounded-lg mb-8" src={portfolioItems[index].image} />
            <div className="w-full text-white" id="scrollListener">
              <ScrollContainer data={techData} />
            </div>
          </div>

          {/* Background Image */}
          <Image
            alt="backgroundImage"
            className="absolute z-0 h-full w-full object-cover top-0 left-0"
            src={detailBg}
          />
        </div>
        <div className=" text-white p-10 pt-20 rounded overflow-hidden flex-1">
          <section className="border border-gray-500 px-5 pb-5">
            <h1 className="text-4xl font-bold pt-5 pb-3">{portfolioItems[index].title}</h1>
            <div className="flex justify-between pb-8">
              <p className="text-sm flex items-end">
                {portfolioItems[index].time[0]} - {portfolioItems[index].time[1]}
              </p>
              <div className="flex gap-2 md:gap-4 text-neutral-50">
                <Socials socialLinks={portfolioItems[index].socials} />
              </div>
            </div>
            {portfolioItems[index].content.map((item, index) => (
              <div className="mb-4" key={index}>
                <p className="text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
});

export default DetailContent;
