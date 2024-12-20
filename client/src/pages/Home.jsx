import { Link } from 'react-router-dom';
import { PiBookOpenTextThin } from "react-icons/pi";//
import { GiBookshelf } from "react-icons/gi";
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Button } from 'flowbite-react';
import ScrollToTop from '../components/ScrollToTop';
import Slider from '../components/Slider';
import {Helmet} from "react-helmet";


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div id='arabic' className='minhight'>   
     <Helmet>
        <title>موقع قصص أطفال | قصص ممتعة قبل النوم</title>
        <meta name="description" content="الموقع الأول لقصص الأطفال التي تُروى قبل النوم. اكتشف مجموعة واسعة من القصص التعليمية والمسلية للأطفال بمختلف الأعمار." />
        <meta name="keywords" content="قصص أطفال, قصص قبل النوم, قصص تعليمية, موقع قصص, قصص ترفيهية, قصص عربية للأطفال" />
        <meta name="author" content="qisasatfal.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="موقع قصص أطفال | قصص ممتعة قبل النوم" />
        <meta property="og:description" content="اكتشف أفضل قصص الأطفال التي تُروى قبل النوم والموجهة لتنمية الخيال وتعزيز القيم الأخلاقية." />
        <meta property="og:image" content="https://qisasatfal.com/images/og-image.jpg" />
        <meta property="og:url" content="https://qisasatfal.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://qisasatfal.com" />
      </Helmet>  
      <div className='flex specialbg '>
            
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto z-50'>
        <div className='flex flex-row items-center justify-around'>
          <h1 className='text-3xl font-bold lg:text-6xl text-white special-text'>موقع قصص أطفال</h1>
        
        </div>
        
        
        <p className='text- lg:text-lg md:text-base text-xs sm:text-sm text-white font-bold special-text'>
        الموقع الأول  لـ قصص الأطفال التي تُروى قبل النوم , المنصة هي منصة مبتكرة تهدف إلى توفير محتوى قصصي ممتع وتعليمي للأطفال.<br/> يقدم الموقع مجموعة واسعة من القصص الهادفة الموجهة للأطفال بمختلف الأعمار، تُقدم بأسلوب مبسط وسهل الفهم لتعزيز حب القراءة وتنمية الخيال.<br/> يتميز الموقع بإمكانية تخصيص القصة حسب اهتمامات الطفل، مما يجعل كل قصة تجربة فريدة تلهم الأطفال وتغرس فيهم القيم الأخلاقية بطريقة مسلية  وملهمة  .        
        </p>
      <div>
      <Link
          to='/search'
          className=' md:text-sm text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          <Button gradientDuoTone='purpleToBlue' className='lg:text-2xl md:text-base text-xs '> 
            الذهاب إلى صفحة القصص
            <PiBookOpenTextThin  className='mr-2 text-2xl ' />
            </Button>
          
        </Link>
        
          </div>
        </div>
      </div>
  
      <div id='english' className='mb-5'>
      <Slider />
      </div>

      <div className='lg:mb-72 md:mb-72'>
        <CallToAction />
      </div>
      <div className=' flex items-center justify-center'>
      <div className='specialwidth mx-auto p-3 flex flex-col gap-8 py-7 '>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>آخر القصص</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              رؤية جميع القصص
            </Link>
            <ScrollToTop />
          </div>
        )}
        
      </div>
      </div>
    </div>
  );
}
