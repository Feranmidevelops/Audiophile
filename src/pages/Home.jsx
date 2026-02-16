// pages/Home.jsx (Updated with proper routing)
import React from 'react';
import Layout from '../components/Layout';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-6 py-16 flex justify-between items-center">
          <div className="max-w-md">
            <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-4 opacity-50">NEW PRODUCT</p>
            <h2 className="text-[56px] font-bold leading-[58px] tracking-[2px] mb-6">
              XX99 MARK II<br />HEADPHONES
            </h2>
            <p className="text-[#F1F1F1] mb-8 max-w-md">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link 
              to="/headphones"
              className="inline-block bg-[#D87D4A] hover:bg-[#F8AF85] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors"
            >
              SEE PRODUCT
            </Link>
          </div>
          <div className="w-96 h-96">
            <img src="/heroheadphones.png" alt="heroheadphone" object-cover/>
          </div>
        </div>
      </section>

      <CategoryNav />

      {/* ZX9 Speaker */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-[rgb(216,125,74)] rounded-lg p-16 flex items-center justify-between">
          <div className="w-auto h-[400px] -bottom-12 ">
              <img src="/zx9.png" alt="" className='w-auto h-full ' />
          </div>
          <div className="text-white max-w-md">
            <h2 className="text-[56px] font-bold leading-[58px] tracking-[2px] mb-6">
              ZX9<br />SPEAKER
            </h2>
            <p className="mb-8">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link 
              to="/speakers"
              className="inline-block bg-black hover:bg-[#101010] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors"
            >
              SEE PRODUCT
            </Link>
            
          </div>
        </div>
      </section>

      {/* ZX7 Speaker */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-[url(/zx7speaker.png)] rounded-lg p-16 bg-no-repeat bg-cover bg-[center_70%] ">
          <div className="max-w-md">
            <h3 className="text-[28px] font-bold tracking-[2px] mb-8">ZX7 SPEAKER</h3>
            <Link 
              to="/speakers"
              className="inline-block bg-transparent hover:bg-black hover:text-white border-2 border-black px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors"
            >
              SEE PRODUCT
            </Link>
          </div>
          
        </div>
      </section>

      {/* YX1 Earphones */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-[url(/yx1earphones.png)] bg-no-repeat bg-cover bg-center rounded-lg h-80">
         
          </div>
          <div className="bg-[#F1F1F1] rounded-lg p-16 flex flex-col justify-center">
            <h3 className="text-[28px] font-bold tracking-[2px] mb-8">YX1 EARPHONES</h3>
            <Link 
              to="/earphones"
              className="inline-block bg-transparent hover:bg-black hover:text-white border-2 border-black px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors w-fit"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </Layout>
  );
};

export default Home;