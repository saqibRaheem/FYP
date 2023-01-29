import Footer from "../components/Footer/Footer";
import JobCard from "../components/JobCard/JobCard";
import FormSlider from "../components/FormSlider/FormSlider";
import {useSelector} from "react-redux"
import UserCard from '../components/UserCard/UserCard'
import Container from "../components/Container/Container"
import Header from "../components/Header/Header";

const Students = () => {
    const students = useSelector(state=>state.Student.allStudents)
  return (
    <>
      <Header/>
      <FormSlider text="Students" />
      <Container>
        <div style={{margin: "50px 0"}}>
      {students?.map((itms)=><UserCard user={itms}/> ) }
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Students;
