import img from "../assets/images/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_walking_together_7ulo_m7i2_l2pa_rcwe_-1-_apsm_-1-_w8ef_-1-_n46j_la5v_-1-_718m.svg";
export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto px-6 space-x-6 flex flex-col-reverse md:flex-row font-nunito">
          <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-100">
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
              Get Started
            </a>
            </div>

          <div className="md:w-1/2">
            <img src={img} alt="Hero Image" />
          </div>
       
      </div>
    </section>
  );
}
