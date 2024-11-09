import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import nono from '../assets/nono.png';


import {BsTiktok , BsFacebook, BsInstagram, BsTwitterX, BsDiscord, } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container  className='border border-t-8 border-red-500 dark:border-pink-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <div className='flex'> <Link
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
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='معلومات'  className='font-bold text-center cursor-default' id='arabic'/>
              <Footer.LinkGroup col>
                <Link
                  to='/contact'
                  className='text-center hover:underline' 
                >
                  التواصل معنا
                </Link>
                <Link
                  to='/supporters'
                  rel='noopener noreferrer'
                  className='text-center '
                >
                  الداعمين
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='تابعنا'  className='font-bold text-left' id='arabic' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.instagram.com/qisasatfal/'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='arabic'
                >
                  Instagram
                </Footer.Link>
                <Footer.Link href='https://www.tiktok.com/@qisasatfal' target='_blank' id='arabic'>TikTok</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='القوانين' className='font-bold text-center' id='arabic'/>
              <Footer.LinkGroup col >
                <Link to='/privacy' className='hover:underline'>سياسة الخصوصية</Link>
                <Link to='/rules' className='hover:underline'>الشروط &amp; الأحكام</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between cursor-default'>
          <Footer.Copyright
            by="Qisas Atfal جميع الحقوق محفوظة لـ"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://discord.gg/q6d2jXJFR4' icon={BsDiscord}/>
            <Footer.Icon href='https://www.instagram.com/qisasatfal/' icon={BsInstagram}/>
            <Footer.Icon href='https://x.com/qisasatfal' icon={BsTwitterX}/>
            <Footer.Icon href='https://www.tiktok.com/@qisasatfal' icon={BsTiktok }/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
