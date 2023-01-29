import "./Slider.scss";
import Container from "../Container/Container";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// import SearchBar from "../SearchBar/SearchBar";
const Slider = () => {
  return (
    <div className="slider">
      <Container>
        <div className="slider-content-main">
          <div className="slider-content">
          <AnimationOnScroll animateIn="animate__slideInUp">
            <h2>
              Search Between More <br /> Than 50,000 Open Jobs.
            </h2>
          </AnimationOnScroll>
            {/* <SearchBar/> */}
            {/* <div className="search-bar">
              <input
                type="text"
                
                placeholder="Search Keywords.."
              />
              <button>Search</button>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Slider;
