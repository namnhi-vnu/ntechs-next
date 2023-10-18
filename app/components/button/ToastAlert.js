import { useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useStore } from "../../store/hooks/useStore";
import { setCloseAlert } from "../../store/reducer/action";

const ToastAlert = () => {
    const [state, dispatch] = useStore();

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(setCloseAlert());
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div
            id="toast-top-right"
            className="fixed flex  items-center bg-[#E1FBE7] w-full  z-50 max-w-xs p-4 space-x-4 text-gray-500  divide-x divide-gray-200 rounded-lg shadow top-[100%] dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 "
            role="alert"
        >
            <div className=" font-normal flex items-center gap-3 text-[1em] overflow-hidden">
                <span className="lines-alert absolute bottom-0 left-0 w-0 border-b-4 rounded-lg border-[#0E9F6E]"></span>
                <span className="text-[#0E9F6E] ">
                    <BiCheckCircle />
                </span>
                Gửi thành công.
            </div>
        </div>
    );
};

export default ToastAlert;
