import { WHATSAPP_URL } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-2xl font-bold mb-4 text-shopee'>
          cashoutspaylater.my
        </h3>
        <p className='mb-6 text-gray-400'>
          Solusi pencairan limit PayLater terpercaya, cepat, dan aman.
        </p>

        <div className='flex justify-center space-x-6 mb-8'>
          <Link
            href={WHATSAPP_URL}
            className='hover:text-shopee transition-colors'>
            WhatsApp
          </Link>
          <Link
            href='#'
            className='hover:text-shopee transition-colors'>
            Instagram
          </Link>
        </div>

        <div className='border-t border-gray-800 pt-8 text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} cashoutspaylater.my. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
