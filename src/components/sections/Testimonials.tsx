import Image from 'next/image';
import { TESTIMONIALS } from '@/constants';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-4'>
          Bukti & Testimoni Pelanggan
        </h2>
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          Berikut adalah beberapa tangkapan layar chat asli dari pelanggan yang
          telah berhasil mencairkan limit mereka bersama kami.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              // Hapus padding besar dan border, fokus pada gambar
              className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col'>
              {/* PERBAIKAN DISINI:
                  1. Menggunakan aspect-[9/16] agar rasionya seperti layar HP (portrait).
                  2. Menghapus 'rounded-full'.
                  3. Menggunakan 'object-cover' agar gambar mengisi penuh area.
              */}
              <div className='relative w-full aspect-[9/16] bg-gray-200'>
                <Image
                  src={item.image}
                  alt={`Screenshot Testimoni ${item.id}`}
                  fill
                  className='object-cover' // Gambar akan dicrop agar pas memenuhi kotak
                  // Jika ingin gambar tampil utuh tanpa terpotong (mungkin ada whitespace di samping),
                  // ganti 'object-cover' menjadi 'object-contain'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              </div>

              {/* Optional: Caption kecil di bawah gambar jika perlu */}
              {item.caption && (
                <div className='p-4 text-center bg-white'>
                  <p className='text-sm text-gray-600 font-medium'>
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
