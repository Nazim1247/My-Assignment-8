import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          id: 1,
          name: "Basic",
          price: 20,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "1 guest pass per month"
          ]
        },
        {
          id: 2,
          name: "Standard",
          price: 40,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited guest passes",
            "Access to group classes",
            "Free fitness assessment"
          ]
        },
        {
          id: 3,
          name: "Premium",
          price: 60,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited guest passes",
            "Access to group classes",
            "Free fitness assessment",
            "Personal training session (2 per month)",
            "Sauna access",
            "Priority support"
          ]
        }
      ];
      
    return (
        <div className="w-11/12 mx-auto">
            <h3 className="text-3xl font-bold text-white mb-3">Best price in the town</h3>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;