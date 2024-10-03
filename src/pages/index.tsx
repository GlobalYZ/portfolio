import dynamic from 'next/dynamic';
import {FC, memo, useState, useEffect} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';
import Loader from '../components/Loader/Loader'; // Assuming you already have a Loader component

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  // State to track whether the DOM is ready
  const [domReady, setDomReady] = useState(false);

  // Set domReady to true when the component is mounted
  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) {
    return <Loader />;
  }

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer />
    </Page>
  );
});

export default Home;
