// import { MetaFunction } from "@remix-run/react";
// import Hero from "~/components/custom/hero";

// export const meta: MetaFunction = () => {
//     return [{ title: "About" }, { name: "about", content: "about me!" }];
// };
// interface AboutProps {
//     name: string;
// }

// const About: React.FC<AboutProps> = ({ name }) => {
//     return (
//         <section className="relative grid h-full max-w-7xl gap-12 p-8 max-sm:py-16 md:min-h-screen md:grid-cols-6 md:p-16 xl:gap-24 print:max-w-none print:grid-cols-1 print:gap-6 text-skin-base">
//             <Hero />
//         </section>
//     );
// };

// export default About;
import { MetaFunction } from "@remix-run/react";
import { MapPin } from "lucide-react";
import CV from "~cv";
import { RiGithubFill, RiHeartFill } from "@remixicon/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About Me | Personal Portfolio" },
    {
      name: "description",
      content:
        "Learn more about my professional background, skills, and personal interests.",
    },
  ];
};

export default function About() {
  const {
    name,
    animated_secondary_initial_label,
    animated_main_label,
    animated_secondary_final_label,
    image,
    location,
    profiles,
  } = CV.basics;
  const { skills } = CV;
  const { city, region, address } = location;

  return (
    <main className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="min-w-[275px] max-w-3xl mx-auto">
            <section
              id="about"
              aria-label="About me"
              className="group flex border border-yellow-600 gap-2 sm:-rotate-2 flex-col rounded-3xl bg-skin-muted sm:bg-skin-button-muted p-6 transition-all sm:hover:rotate-0 sm:hover:bg-skin-muted"
            >
              <div className="flex items-center text-center gap-4">
                <figure className="print:hidden">
                  <img
                    className="scale-110 sm:grayscale sm:scale-100 transition-all sm:group-hover:scale-110 sm:group-hover:grayscale-0 rounded-full"
                    height={150}
                    width={150}
                    src={image}
                    alt={`Profile of ${name}`}
                    loading="eager"
                  />
                </figure>
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl md:text-3xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 font-semibold">
                    {name}
                  </h1>
                  <div className="overflow-hidden mt-1">
                    <div className="font-bold lowercase text-xl lg:text-[1rem] lg:leading-[1rem]">
                      <div className="group/subtitle relative flex gap-1 hover:gap-5 active:gap-5 transition-all">
                        <div className="transition-all duration-450 ease-in-out group-hover/subtitle:-translate-y-16">
                          <p className="font-medium lowercase text-xl lg:text-[1rem] lg:leading-[1rem]">
                            {animated_secondary_initial_label}
                          </p>
                        </div>
                        <div className="absolute inset-x-0 top-0 w-max translate-y-16 transition-all duration-450 ease-in-out group-hover/subtitle:translate-y-0">
                          <p className="font-bold lowercase text-xl lg:text-[1rem] lg:leading-[1rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            {animated_secondary_final_label}
                          </p>
                        </div>
                        <p>{animated_main_label}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-row items-center absolute right-10 bottom-10 w-max text-center">
                  <div
                    id="sosmed"
                    aria-label="Social Media"
                    className="flex group/social flex-wrap justify-evenly sm:h-40 sm:w-36 w-full h-min sm:flex-col rounded-3xl p-4 transition-all rotate-0 bg-skin-muted sm:bg-skin-button-muted sm:-rotate-2 sm:hover:rotate-0 sm:hover:bg-skin-muted"
                  >
                    {profiles.map(({ network, url, icon, color }) => {
                      return (
                        <a
                          data-ccursor
                          className="flex flex-col sm:basis-1/4 items-center justify-center rounded-md hover:cursor-alias"
                          href={url}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${network} (opens in a new tab)`}
                          id={network}
                          key={network}
                        >
                            {
                                network === "Github" ? <Github /> : <LinkedIn />
                            }
                        </a>
                      );
                    })}
                  </div>
                </div> */}
              </div>
              <div className="flex w-max gap-2 py-1 px-2 text-sm text-skin-muted">
                <MapPin
                  className="print:hidden sm:group-hover:text-skin-hue"
                  size={20}
                />
                {address}, {city}, {region}
              </div>
              <div className="flex w-max gap-2 py-1 px-2 text-sm text-gray-600 dark:text-gray-400"></div>
            </section>
            {/* <section id="contact" aria-label="Contact me" className="group flex border border-gray-200 gap-2 sm:-rotate-2 flex-col rounded-3xl bg-skin-muted sm:bg-skin-button-muted p-6 transition-all sm:hover:rotate-0 sm:hover:bg-skin-muted">
              <div className="flex items-center text-center gap-4">
                </div>
            </section> */}
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              My Story
            </h2>
            <div className="prose dark:prose-invert lg:prose-lg">
              <p>
                I'm a passionate developer with a keen interest in building
                user-friendly, accessible, and performant web applications. My
                journey in tech started when I was 12 years old, tinkering with
                HTML and CSS to create simple websites.
              </p>
              <p>
                Fast forward to today, I've worked with various technologies and
                frameworks, constantly expanding my knowledge and skills. I
                believe that good code is not just about functionality, but also
                about readability, maintainability, and elegance.
              </p>
              <p>
                When I'm not coding, you can find me exploring nature, reading
                books on design and psychology, or experimenting with new
                recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map(({ name, icon, level, keywords }) => {
                return (
                  <div
                    key={name}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <div className="h-12 flex items-center justify-center mb-2">
                      {/* Placeholder for skill icon */}
                      <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <span className="text-yellow-600 dark:text-yellow-300 text-lg">
                          {name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Experience Section */}
      {/* <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Career Journey
            </h2>

            //Timeline with vertical line
            <div className="relative border-l-4 border-yellow-500 dark:border-yellow-600 ml-4 pl-8 space-y-12">
              //Experience item
              <div>
                <div className="absolute -left-3 mt-1">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-600 border-4 border-white dark:border-gray-800"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Senior Full Stack Developer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  2020 - Present • Tech Solutions Inc.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Led development of multiple high-traffic web applications
                  using React, Node.js, and GraphQL. Mentored junior developers
                  and implemented coding standards that improved team
                  productivity.
                </p>
              </div>

              //Experience item
              <div>
                <div className="absolute -left-3 mt-1">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-600 border-4 border-white dark:border-gray-800"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Frontend Developer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  2018 - 2020 • WebCraft Studios
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Built responsive user interfaces for client websites and
                  applications. Specialized in performance optimization and
                  accessibility improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-yellow-900/10 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Want to work together?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
