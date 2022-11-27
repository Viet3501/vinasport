import Header from "~/Components/Layout/Components/Header";
import Footer from "~/Components/Layout/Components/Footer";

import Sidebar from "./Sidebar";

function AddSidebar({children}) {
    return (
        <div>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AddSidebar;