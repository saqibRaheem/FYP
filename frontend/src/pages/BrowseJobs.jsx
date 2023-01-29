import Footer from "../components/Footer/Footer";
import Job from "../components/Job/Job";
import FormSlider from "../components/FormSlider/FormSlider";
import "./Pages.scss";
const Browsejob = () => {
  return (
    <>
      <FormSlider text="Browse Jobs" />
      <div className="browsejob">
        <Job />
      </div>
      <Footer />
    </>
  );
};
export default Browsejob;
