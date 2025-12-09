import { INSTAGRAM_URL } from '@/constants';
import Link from 'next/link';

const FloatingInstagram = () => {
  return (
    <Link
      href={INSTAGRAM_URL}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group'
      aria-label='Kunjungi Instagram Kami'>
      {/* Icon Instagram SVG Putih */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-white'>
        <rect
          x='2'
          y='2'
          width='20'
          height='20'
          rx='5'
          ry='5'></rect>
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
        <line
          x1='17.5'
          y1='6.5'
          x2='17.51'
          y2='6.5'></line>
      </svg>

      {/* Tooltip (Muncul saat hover di Desktop) */}
      <span className='absolute right-16 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block'>
        Follow Instagram
      </span>
    </Link>
  );
};

export default FloatingInstagram;
