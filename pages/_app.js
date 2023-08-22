import { Slide, ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import { Router } from 'next/router';
import Loader from '@/components/Loader';
global.api_link = 'https://blogadmin.eamagz.com/api/';
global.img_link = 'https://blogadmin.eamagz.com/';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
            transition={Slide}
          />
        </>
      )}
    </>
  );
}

export default MyApp;
