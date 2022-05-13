import "./inputSearch.scss";

import { FiSearch } from "react-icons/fi";

const InputSearch = ({ handOnChange }) => {
    return (
        <div className="Search">
            <input type="text" placeholder="Search.." onChange={handOnChange}  />
            <FiSearch className="icon"/>
        </div>
    );
};

export default InputSearch;
