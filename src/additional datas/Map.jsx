import React from "react";

const Map = () => {
  return (
    <div className="map m-1 h-60 md:h-72 lg:h-96 bg-white rounded-md">
      <h1 className="flex justify-center mx-1 text-xl md:text-2xl lg:text-3xl text-blue-900 font-semibold">Visit Me</h1>
      <div className="border border-gray-400 mx-1 h-48 md:h-60 lg:h-80 mt-2 rounded-md overflow-hidden ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6728079769987!2d85.32822837447073!3d27.665593027333674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190029da6561%3A0x95b502700ced6e5b!2sThe%20key%20concern!5e0!3m2!1sne!2snp!4v1737886781137!5m2!1sne!2snp"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default Map;
