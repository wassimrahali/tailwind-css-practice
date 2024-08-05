import img from "../assets/images/undraw_undraw_undraw_undraw_flying_drone_u3r2_-3-_egfy_-1-_2xjb_-1-_2hl5.svg";
export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto px-6 space-x-6 flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900">
            <h1 className="font-bold text-3xl md:text-5xl ">
              Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <p>
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>

            <a
              href="#"
              className="py-2 px-6 rounded-full bg-primary text-white hover:bg-slate-900 self-center md:self-start "
            >
              Get Start
            </a>
            </div>

          <div className="md:w-1/2">
            <img src={img} alt="Hero Image" />
          </div>
       
      </div>
    </section>
  );
}
