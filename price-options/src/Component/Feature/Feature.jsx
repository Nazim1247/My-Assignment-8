
import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({ feature }) => {
    return (
        <div className="">
            <ul className="flex items-center gap-2">
                <IoIosCheckmarkCircle className="text-green-500"/>
                <li>{feature}</li>
            </ul>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.array
}
export default Feature;