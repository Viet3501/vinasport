import Header from "~/Components/Layout/Components/Header";
import Footer from "~/Components/Layout/Components/Footer";


function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer/>
    </div>
  );
}

export default DefaultLayout;
