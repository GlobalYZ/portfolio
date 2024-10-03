import {useRouter} from 'next/router';
import {useState, useEffect, memo} from 'react';

import Loader from '../../components/Loader/Loader';
import DetailContent from '../../components/Sections/Detail/DetailContent';
import DetailHeader from '../../components/Sections/Detail/DetailHeader';

const Detail = memo(() => {
  const router = useRouter();
  const {id} = router.query;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady || id === undefined) {
    return <Loader />;
  }

  return (
    <div>
      {/* Pass the id prop to DetailHeader */}
      <DetailHeader id={id as string} />
      <DetailContent id={id as string} />
    </div>
  );
});

export default Detail;
