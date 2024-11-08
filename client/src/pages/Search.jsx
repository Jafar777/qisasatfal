import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { PiBookOpenTextThin } from 'react-icons/pi';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
    const url = new URL(window.location);

  

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className='flex flex-col md:flex-row' >
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit} id='arabic'>
          <div className='flex   items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              البحث :
            </label>
            <TextInput
              placeholder='بحث...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center gap-2' >
            <label className='font-semibold'>تصنيف حسب :</label>
            <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
              <option value='desc'>الأحدث</option>
              <option value='asc'>الأقدم</option>
            </Select>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'> القائمة :</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id='category'
            >
              <option id='arabic' value='uncategorized'>غير مصنف</option>
              <option id='arabic' value='الإسلامية'> الاسلامية</option>
              <option id='arabic' value='التعليمية'>القصص التعليمية</option>
              <option id='arabic' value='الخيالالعلمي'>الخيال العلمي</option>
              <option id='arabic' value='المغامرات'>المغامرات</option>
              <option id='arabic' value='الشعبية'>الحكايات الشعبية</option>
              <option id='arabic' value='الغموض'>الألغاز والغموض</option>
              <option id='arabic' value='المضحكة'>قصص مضحكة</option>
              <option id='arabic' value='التاريخية'>التاريخية</option>
              <option id='arabic' value='الأكشن'>أكشن</option>
              <option id='arabic' value='الرعب'>رعب</option>
              <option id='arabic' value='الحيوانات'>الحيوانات</option>
            </Select>
          </div>
          <Button type='submit' outline gradientDuoTone='purpleToPink'>
            تطبيق الفلاتر
          </Button>
          <Link
          to='/search'
          className=' md:text-sm text-xs sm:text-sm text-teal-500 font-bold hover:underline mt-10'
        >
          <Button gradientDuoTone='purpleToBlue' className='lg:text-2xl md:text-base text-xs mx-auto'> 
            عرض جميع القصص
            <PiBookOpenTextThin  className='mr-2 text-2xl ' />
            </Button>
          
        </Link>
        </form>
        
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 text-center'>
          القصص المتوفرة
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>عذراً لا يوجد قصص لعرضها</p>
          )}
          {loading && <p className='text-xl text-gray-500'>جاري التحميل...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline p-7 w-full'
            >
              عرض المزيد
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
