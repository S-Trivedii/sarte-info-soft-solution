import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Pages/FooterPage/Footer";
import Routing from "./Routes/Routing";

const App = () => {
  return (
    <div className="w-full h-full">
      <Menu />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
