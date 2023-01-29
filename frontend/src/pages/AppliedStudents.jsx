import Footer from "../components/Footer/Footer";
import JobCard from "../components/JobCard/JobCard";
import FormSlider from "../components/FormSlider/FormSlider";
import {useSelector} from "react-redux"
import UserCard from '../components/UserCard/UserCard'
import Container from "../components/Container/Container"
import Header from "../components/Header/Header";
const AppliedStudents = (props) => {
    const students = useSelector(state=>state.Student.allStudents)
  return (
    <>
    <Header/>
      <FormSlider text="Applied Candidates" />
      <Container>
        <div style={{margin: "50px 0"}}>
      {students?.map((itms)=>  props?.location?.state?.map(id=> id === itms._id && <UserCard user={itms}/>) ) }
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AppliedStudents;
