import Footer from "./Footer"
import Navbar from "./Navbar"
import PageContentFooter from "./PageContentFooter";

const Layout = ({ children }) => {
    return (
        <div className="layoutcomponent">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;