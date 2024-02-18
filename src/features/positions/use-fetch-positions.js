import { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "../../mock/data.json";
import { addPositions } from "./position-slice";

//custom hook
export const useFetchPositions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('addPositions');
        dispatch(addPositions(data));
    }, [dispatch]);
}