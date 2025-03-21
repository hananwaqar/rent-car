import React from "react";

interface CarRentalCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  bgColor: string;
}

const CarRentalCard: React.FC<CarRentalCardProps> = ({
  title,
  description,
  buttonText,
  image,
  bgColor,
}) => {
  return (
    <div className={`w-full p-6 rounded-lg shadow-lg ${bgColor}`}>
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <p className="text-white mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button>
      {/* <div className="mt-4">
        <img src={image} alt="Car" className="w-full" />
      </div> */}
    </div>
  );
};

export default CarRentalCard;
