import { HERO_CONTENT, WHATSAPP_URL } from '@/constants';
import Button from '../ui/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative bg-gray-50 pt-20 pb-32 lg:pt-32 overflow-hidden'>
      <div className='container mx-auto px-4 relative z-10 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight'>
          {HERO_CONTENT.headline}
        </h1>
        <p className='text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto'>
          {HERO_CONTENT.description}
        </p>
        <Button
          href={WHATSAPP_URL}
          variant='primary'
          className='text-lg px-8 py-4 shadow-shopee/30 shadow-lg'>
          {HERO_CONTENT.cta}
        </Button>
      </div>

      {/* Background Image Placeholder using Next/Image */}
      <div className='absolute inset-0 z-0'>
        {/* Ganti src dengan gambar aset asli Anda nanti */}
        <Image
          src='/hero-img.png'
          alt='Background Hero'
          fill
          className='object-cover'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
