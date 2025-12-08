import { WHATSAPP_URL } from '@/constants';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section
      id='contact'
      className='py-24 bg-shopee'>
      <div className='container mx-auto px-4 text-center text-white'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          Perlu Tunai Sekarang? Kami Sedia Membantu!
        </h2>
        <p className='text-xl opacity-90 mb-10'>
          Hubungi kami sekarang untuk proses pencairan yang aman dan cepat.
        </p>

        <Button
          href={WHATSAPP_URL}
          variant='outline'
          className='bg-white text-black text-lg px-10 py-4'>
          Chat Admin Sekarang
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
