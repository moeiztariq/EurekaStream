import React from "react";
import "./index.css";

const OurMission = () => {
  // const numberArray = [12, 11, -13, -5, 6, -7, 5, -3 - 6, 5, 5, 11];
  // const positiveArray = numberArray.filter((i) => i > 0);
  // console.log(positiveArray, "all postive");
  // const doubleNumbers = numberArray.map((i) => i * 2);
  // console.log(doubleNumbers, "double numbers");
  // const firstEven = numberArray.find((i) => i % 2 === 0);
  // console.log(firstEven, "first evennn");
  // const sumAll = numberArray.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue
  // );

  // const noDuplicate = numberArray.filter(
  //   (val, index, self) => self.indexOf(val) === index
  // );
  // console.log(noDuplicate, "remove duplicates");

  // const array = ["Ali", "Moeiz", "Hassaan"];
  // const sortByLength = array.sort(i);

  return (
    <div className="main">
      <h1 className="heading">Our Mission</h1>
      <div className="flex">
        <div className="flex-child"></div>
      </div>
      <p className="text">
        We hold an unwavering belief in the relentless pursuit of innovation
        within the realm of digital information technology. Our commitment to
        remaining on the cutting edge is not only recognized but ingrained in
        our DNA. We accomplish this by consistently attracting and nurturing the
        brightest minds in contemporary digital paradigms and platforms. Our
        team of seasoned technology professionals spans across every facet of
        your business, ensuring EurekaStream stands out as the singular point of
        contact for all your enterprise technology needs.
      </p>
    </div>
  );
};

export default OurMission;
