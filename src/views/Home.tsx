import CarRentalCard from "@/components/RentalCard/RentalCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <CarRentalCard
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        buttonText="Rental Car"
        image="/images/car1.png" // Replace with actual image path
        bgColor="bg-blue-500"
      />
      <CarRentalCard
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        buttonText="Rental Car"
        image="/images/car1.png" // Replace with actual image path
        bgColor="bg-blue-500"
      />
    </div>
  );
};

export default Home;
