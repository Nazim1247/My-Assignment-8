
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className="bg-blue-500 text-white rounded-md p-4 flex flex-col">
            <h3 className="text-center mb-4">
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h3>
            <h3 className="text-center text-2xl">{name} Membership</h3>
            <div className="p-6 flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="w-full bg-green-500 rounded-xl p-1">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;