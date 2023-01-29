import React from "react";
import "./Counter.scss";
import Container from "../Container/Container";
import CountUp from "react-countup";
import AnimatedNumbers from "react-animated-numbers";

const Counter = ({ companiesCount, jobsCount, studentsCount }) => {
  // function count(){
  //   setInterval(()=)
  // }
  return (
    <Container>
      <div className={`${"main-counter"}`}>
        <div className={`${"counter"}`}>
          <div className={`${"number"}`}>
            <span>
              <AnimatedNumbers
                animateToNumber={jobsCount}
                fontStyle={{ fontSize: 48 }}
              />
            </span>
            <span className={`${"prefix"}`}>+</span>
          </div>
          <div className={`${"clearfix"}`}>
            <span className={`${"centerline"}`}></span>
          </div>
          <h3>Jobs Available</h3>
        </div>
        <div className={`${"counter mid-counter"}`}>
          <div className={`${"number"}`}>
            <span>
              <AnimatedNumbers
                animateToNumber={companiesCount}
                fontStyle={{ fontSize: 48 }}
              />
            </span>
            <span className={`${"prefix"}`}>+</span>
          </div>
          <div className={`${"clearfix"}`}>
            <span className={`${"centerline"}`}></span>
          </div>
          <h3>Companies</h3>
        </div>
        <div className={`${"counter "}`}>
          <div className={`${"number"}`}>
            <span>
              <AnimatedNumbers
                animateToNumber={studentsCount}
                fontStyle={{ fontSize: 48 }}
              />
            </span>
            <span className={`${"prefix"}`}>+</span>
          </div>
          <div className={`${"clearfix"}`}>
            <span className={`${"centerline"}`}></span>
          </div>
          <h3>Students</h3>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
