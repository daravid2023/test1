import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Base({ auth, children }) {
    return (
        <>
            <Navbar auth={auth} />
            <div>{children}</div>
            <Footer />
        </>
    );
}
