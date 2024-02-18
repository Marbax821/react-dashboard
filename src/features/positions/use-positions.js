import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./position-slice";
import { selectFilters } from "../filter/filter-slice";


//custom hook
export const usePositions = () => {
    const currentFilters = useSelector(selectFilters);
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

    return positions;
}