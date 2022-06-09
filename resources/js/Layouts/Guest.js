import React from "react";
import { Link } from "@inertiajs/inertia-react";

import ApplicationLogo from "../Components/ApplicationLogo";
import Footer from "../Components/Footer";

export default function Guest({ children }) {
    return (
        <>
            <div>
                <div>
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>
                </div>
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
}
