// https://stackoverflow.com/questions/76450697/scroll-to-top-when-navigate-to-a-new-route-in-react-using-react-router-v6-12

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}