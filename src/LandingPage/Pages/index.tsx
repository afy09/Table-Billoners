import React from "react";
import HeroUdin from "../Components/Hero/index";

const LandingPageUdin: React.FC = () => {
  return (
    <section className="font-signika max-w-[1440px] mx-auto ">
      <section className="pt-[80px] grid grid-cols-1">
        <>
          <div>
            <HeroUdin />
          </div>
        </>
      </section>
    </section>
  );
};

export default LandingPageUdin;
