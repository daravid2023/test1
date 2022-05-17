import React from "react";

import Navbar from "@/Components/Navbar";

export default function Base({ auth, children }) {
    return (
        <>
            <Navbar auth={auth}/>
            <div>{children}</div>
        </>
    );
}
