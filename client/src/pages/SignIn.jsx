import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

import nono from '../assets/nono.png';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <div id='arabic' className='flex justify-center'> <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        
        <span className='px-4 py-1 bg-gradient-to-r from-red-600  via-pink-600 to-purple-600 rounded-lg text-white ml-2'>
           قصص 
        </span>
        
        أطفال
      </Link>
      <img src={nono} alt="" className='z-0 w-32 h-32 '/>
      </div>
          <p id='arabic' className='text-sm mt-5 mr-10'>
            بإمكانك تسجيل الدخول على حسابك على منصة قصص أطفال
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div >
              <div id='arabic'>
              <Label value='إيميلك :'  />
              </div>
              <TextInput
                type='email'
                placeholder='info@email.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
            <div id='arabic'>
              <Label value='كلمة المرور : ' />
              </div>
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'تسجيل الدخول'
              )}
            </Button>
            <OAuth />
          </form>
          <div id='arabic' className='flex gap-2 text-sm mt-5'>
            <span>ليس لديك حساب ؟</span>
            <Link to='/sign-up' className='text-blue-500'>
              إنشاء حساب جديد
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
