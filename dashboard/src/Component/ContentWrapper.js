import "../Assets/css/ContentWrapper.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function ContentWrapper() {
  return (
    <div className="ContentWrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default ContentWrapper;
