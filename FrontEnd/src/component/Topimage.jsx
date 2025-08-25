
 const TopImage = ({ imageUrl, title, subtext, overlayOpacity = 0.5, height = "h-96" }) => {
  return (
    <div className={`relative w-full ${height} bg-no-repeat bg-fixed bg-center bg-cover overflow-hidden`}
    style={{backgroundImage:`url(${imageUrl})`}}>
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: overlayOpacity
        }}
      />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-center text-lg text-white max-w-2xl">
          {subtext}
        </p>
      </div>
    </div>
  );
};
export default TopImage;
