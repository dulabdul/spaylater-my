import { FEATURES } from '@/constants';

const Features = () => {
  return (
    <section
      id='features'
      className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
          Keunggulan Kami
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className='flex items-start space-x-4 p-4 rounded-lg bg-gray-50'>
              <div className='flex-shrink-0 mt-1'>
                {/* Icon Check sederhana */}
                <div className='w-6 h-6 rounded-full bg-shopee flex items-center justify-center'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={3}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
              </div>
              <p className='text-gray-700 font-medium'>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
