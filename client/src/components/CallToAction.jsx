import { Button } from 'flowbite-react';
import bookshelf from '../assets/books-still-life-cartoon-style.jpg';
export default function CallToAction() {
  return (
    <>
    <div id='arabic' className="flex justify-center ">
        <div className='special-background'>
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
        </div>
            <div className='p-3 info flex lg:flex-row md:flex-row flex-col items-center justify-around z-50 mt-36 mx-auto max-w-4xl text-white'>
            
                <div className='ml-14'>
                <h1 className='lg:text-4xl md:text-4xl text-xl mb-10'>ما نقدمه من فائدة</h1>
                <p className='lg:text-base md:text-base text-sm'>
                يعد موقع قصص أطفال وسيلة فعّالة لتعزيز القيم والشيم العربية، حيث يستخدم اللغة العربية الثرية بأسلوب شيق وسهل يغرس في الأطفال حب اللغة ويقوي ارتباطهم بها. من خلال القصص، يتعرف الأطفال على معاني الكرم والشجاعة والأمانة، ويتعلمون التسامح واحترام الآخرين، مما يعزز لديهم روح العروبة والانتماء. كما يساعد الموقع على نقل الأخلاق العربية الأصيلة، مثل حسن الجوار والنخوة، بشكل يساهم في تشكيل شخصية متكاملة وموروثة بالقيم الثقافية المتجذرة في المجتمع العربي.
                </p>
                </div>
                <img alt='library-picture' src={bookshelf} className='lg:p-0 md:p-0 p-6 lg:w-96 md:w-96 lg:h-64 lg:mt-0 md:mt0 mt-16 rounded-sm '/>
            
            </div>
            
    </div>
    </>
        
        
    
  )
}