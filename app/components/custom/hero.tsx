import { MapPin } from "lucide-react";
import CV from "~cv";

export function Hero() {
  const {
    name,
    animated_secondary_initial_label,
    animated_main_label,
    animated_secondary_final_label,
    image,
    location,
  } = CV.basics;
  const { city, region, address } = location;
  return (
    <>
      <div className="min-w-[275px]">
        <section
          id="about"
          aria-label="About me"
          className="group flex border gap-2 sm:-rotate-2 flex-col rounded-3xl bg-skin-muted sm:bg-skin-button-muted p-4 transition-all sm:hover:rotate-0 sm:hover:bg-skin-muted"
        >
          <div className="flex items-center text-center gap-4">
            <figure className="print:hidden">
              <img
                data-ccursor="lift"
                className="scale-110 sm:grayscale sm:scale-100 transition-all sm:group-hover:scale-110 sm:group-hover:grayscale-0"
                height={600}
                width={600}
                src={image}
                alt={`Profile of ${name}`}
                loading="eager"
              />
            </figure>
            <div className="flex flex-col items-center">
              <h1 className="hover:hover-grad-text font-semibold">{name}</h1>
              <div className="overflow-hidden mt-1">
                <div className="font-roboto-condensed font-bold lowercase text-xl lg:text-[1rem] lg:leading-[1rem]">
                  <div className="group/subtitle relative flex gap-1 hover:gap-5 active:gap-5 transition-all">
                    <div className="transition-all duration-450 ease-in-out group-hover/subtitle:-translate-y-16">
                      <p className="font-roboto-condensed font-medium lowercase text-xl lg:text-[1rem] lg:leading-[1rem]">
                        {animated_secondary_initial_label}
                      </p>
                    </div>
                    <div className="absolute inset-x-0 top-0 w-max translate-y-16 transition-all duration-450 ease-in-out group-hover/subtitle:translate-y-0">
                      <p className="font-roboto-condensed font-bold lowercase text-xl lg:text-[1rem] lg:leading-[1rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        {animated_secondary_final_label}
                      </p>
                    </div>
                    <p>{animated_main_label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-ccursor="noPadding"
            className="flex w-max gap-2 py-1 px-2 text-sm text-skin-muted"
          >
            {/* <Icon className='print:hidden sm:group-hover:text-skin-hue' name='mdi:world' width={20} height={20} /> */}
            <MapPin
              className="print:hidden sm:group-hover:text-skin-hue"
              size={20}
            />
            {address}, {city}, {region}
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
