import { useEffect, useRef } from "react";
export default function useObserver(callback, dependency = null) {
    const triggerRef = useRef();

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        window.addEventListener("beforeunload", scrollToTop);
        return () => {
            window.removeEventListener("beforeunload", scrollToTop);
        };
    }, []);

    useEffect(() => {
        const fetchMoreObserver = new IntersectionObserver(
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    callback();
                }
            }
        );
        if (triggerRef.current) {
            fetchMoreObserver.observe(triggerRef.current);
        }
        return () => {
            fetchMoreObserver.disconnect();
        };
    }, [dependency, callback]);

    return { triggerRef };
}
