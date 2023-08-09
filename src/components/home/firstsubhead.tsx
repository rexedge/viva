import React from "react";
import Section from "../layout/section";
import { REMOTE_IMAGES } from "../../../utils/images-remote";
import Image from "next/image";

const Firstsubhead = () => {
	return (
    <Section className="items-center grid grid-cols-1 md:grid-cols-2 min-h-[380px] md:px-0  bg-primary mx-auto">
      <div className="h-max py-8 text-white text-3xl md:text-4xl font-bold md:px-6 lg:text-5xl ml-8">
        <h2>
          Whether you're a business owner or an individual, our Tap to Pay app
          makes payments easy and accessible for all.
        </h2>
        <p className="font-medium text-sm pt-6">Available where applicable.</p>
      </div>
      <div className="md:flex flex flex-wrap gap-3 place-content-center  rounded-3xl border border-purple-700 mx-8 my-16 p-[32px]">
        {REMOTE_IMAGES.map((image, id) => (
          <div key={id} className="   rounded-full bg-slate-800 px-4 py-2">
            <Image
              src={image.src}
              width={500}
              height={500}
              alt={image.name}
              className="w-12 h-12"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Firstsubhead;
