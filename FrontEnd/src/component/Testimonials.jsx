import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Project Manager",
    feedback: "SUN Screws has never let us down. Consistent quality and fast delivery!",
    image: "/images/client1.jpg",
  },
  {
    name: "Neha Reddy",
    role: "Industrial Buyer",
    feedback: "Top-notch customer support and ISO-certified products. Highly recommend!",
    image: "/images/client2.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Mechanical Engineer",
    feedback: "Precision screws that meet our exact specifications. A reliable partner.",
    image: "/images/client3.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Mechanical Engineer",
    feedback: "Precision screws that meet our exact specifications. A reliable partner.",
    image: "/images/client3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10" id="testimonials">
      <h2 className="text-4xl font-bold text-center mb-10">
        What Our <span className="text-yellow-500">Clients Say</span><hr className='bg-yellow-500 h-1 w-[20%] rounded mt-3 mx-auto' />
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all h-full">
              <div className="flex flex-col items-center text-center">
                <img
                //   src={t.image}
                src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt={t.name}
                  className="w-20 h-20 object-cover rounded-full mb-4"
                />
                <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <span className="text-sm text-yellow-600">{t.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
