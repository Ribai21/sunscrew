import { FaWrench, FaBoxOpen, FaCogs, FaGlobe } from 'react-icons/fa';

const Why = () => {
  const features = [
    {
      icon: <FaWrench size={40} />,
      title: 'Trusted Quality',
      description: 'Every screw undergoes rigorous testing to ensure maximum reliability.',
    },
    {
      icon: <FaBoxOpen size={40} />,
      title: 'Bulk Order Ready',
      description: 'From small batches to massive industrial orders, we scale our supply.',
    },
    {
      icon: <FaCogs size={40} />,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art technology ensures perfect specifications.',
    },
    {
      icon: <FaGlobe size={40} />,
      title: 'Global Shipping',
      description: 'Reliable worldwide delivery network ensures your orders reach you.',
    },
  ];

  return (
    <section className="bg-[#1d2a3a] min-h-screen text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Why Choose <span className="text-yellow-400">SUN?</span>
        </h2>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Experience the difference that comes with industry-leading expertise and unwavering commitment to excellence
        </p>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-5 rounded-xl hover:bg-opacity-10 transition"
          >
            <div className="bg-white hover:text-yellow-500 bg-opacity-10 p-4 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-white bg-opacity-5 hover:bg-opacity-10 rounded-xl mt-10 text-white p-10 max-w-3xl mx-auto text-center shadow-md">
      <h2 className="text-5xl font-bold text-yellow-400 mb-4">ISO 9001</h2>
      <h3 className="text-2xl font-semibold mb-3">Certified Excellence</h3>
      <p className="text-gray-300 text-lg leading-relaxed">
        Our ISO 9001 certification demonstrates our commitment to quality
        management systems and continuous improvement in all aspects of our
        business.
      </p>
    </div>
    </section>
  );
};

export default Why;
