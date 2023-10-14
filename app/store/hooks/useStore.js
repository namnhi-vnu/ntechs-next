import { useContext } from "react";
import Context from "../contexts/Context";
export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};
