import Image from 'next/image';
import {FC, memo,useEffect, useRef, useState} from 'react';

interface ScrollContainerProps {
  data: {imgSrc: string; text: string}[];
}

const ScrollContainer: FC<ScrollContainerProps> = memo(({data}) => {
  const [containerWidth, setContainerWidth] = useState<number>(200); // Default width
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container

  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById('scrollListener');
      if (container) {
        setContainerWidth(container.offsetWidth - 40); // Get the width of the container
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  // Function to scroll left with smooth behavior
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust scroll amount
        behavior: 'smooth', // Enable smooth scrolling
      });
    }
  };

  // Function to scroll right with smooth behavior
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust scroll amount
        behavior: 'smooth', // Enable smooth scrolling
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div
        className="overflow-x-scroll z-30 scrollbar-hide"
        ref={scrollContainerRef}
        style={{width: `${containerWidth}px`}}>
        <div className="flex pl-[40px] justify-evenly space-x-12">
          {data.map((item, index) => (
            <div className="flex flex-col items-center space-y-1" key={index}>
              <Image alt={`item-${index}`} className="w-8 h-8 object-cover" src={item.imgSrc} />
              <p className="mt-2 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow button */}
      <button
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
        onClick={scrollLeft}>
        &larr;
      </button>

      {/* Right arrow button */}
      <button
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
        onClick={scrollRight}>
        &rarr;
      </button>
    </div>
  );
});

export default ScrollContainer;
