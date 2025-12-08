import { SERVICES } from '@/constants';

const Services = () => {
  return (
    <section
      id='services'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
          Layanan Kami
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-shopee'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                {service.title}
              </h3>
              <p className='text-gray-600'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
