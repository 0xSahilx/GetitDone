import { showcase } from "../assets/data/dummydata";
import { Vedio } from "../components/common/Vedio";
import { Title, TitleSm } from "../components/common/Title";
import React from "react";

const Showcase = () => {
  return (
    <section className="showcase bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="SHOWCASE" />
          <Title
            title="Fresh ideas. Bold design. Smart realization."
            className="title-bg"
          />
        </div>
        <div className="grid-3">
          {showcase.map((item) => (
            <Vedio data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
