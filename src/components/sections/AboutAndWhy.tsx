const AboutAndWhy = () => {
  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Tentang Kami */}
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Tentang Kami
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            <span className='font-semibold text-shopee'>
              cashoutspaylatermy.net
            </span>{' '}
            ialah perkhidmatan cashout/gestun profesional yang mengutamakan
            kepercayaan serta keselamatan. Kami membantu anda menukar limit
            PayLater kepada wang tunai dengan proses yang sangat pantas dan
            tanpa langkah rumit. Dengan sokongan CS yang responsif dan aliran
            kerja yang jelas, pengalaman anda akan menjadi lebih mudah, selesa,
            dan terjamin.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className='bg-orange-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>
            Why Choose Us
          </h3>
          <p className='text-gray-700 text-center leading-relaxed'>
            Dengan memilih perkhidmatan kami, anda akan mendapat pengalaman
            cashout yang cepat, selamat, dan tanpa sebarang kesulitan. Kami
            faham bahawa keperluan wang segera tidak boleh ditangguh, sebab itu
            setiap proses kami direka secepat dan seefisien mungkin. Dengan
            reputasi yang dipercayai, sokongan pasukan profesional, serta sistem
            yang selamat, kami memastikan pencairan limit anda berjalan lancar
            dari awal hingga akhir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAndWhy;
