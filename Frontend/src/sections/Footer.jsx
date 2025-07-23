import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section pb-30">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #FEASTABLES
          </h1>
        </div>

        {isMobile ? (
          ""
        ) : (
          <video
            src="/videos/footer-video.mp4"
            autoPlay
            playsInline
            muted
            className="w-full h-[103%] absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/instagram.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Mr Beast Feastables</p>
              <p>2025 Feastables</p>
            </div>
            <div>
              <Link to='/products'><p>Shop All</p></Link>
              <Link to='/ethicalsourcing'><p>Ethical Sourcing</p></Link>
              <a href=""><p>Careers</p></a>
            </div>
            <div>
              <p>Company</p>
              <p>Contact Us</p>
              <Link to='/worldwide' ><p>Available WorldWide</p></Link>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p className="text-sm md:text-base">
             By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our Privacy Policy and Terms of Service.
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border-b-4 border-milk placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FooterSection;