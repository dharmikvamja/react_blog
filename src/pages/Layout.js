import React from "react";
import ColorSchemesExample from "../Componets/Header";
import Footer from "../Componets/Footer";

function Layout({ children }) {
    return (
        <div>
            <ColorSchemesExample />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
