import acmeLogo from "@/assets/logo-acme.png";
import googleLogo from "@/assets/google.png";

export const LogoTicker = () => {
  return (
      <section className="py-24 ">
        <div className="container text-center">
          {/* Heading */}
          <div>
            <h1 className="text-5xl font-semibold mb-8">
              Our Trusted Partners
            </h1>
          </div>

          {/* Logos */}
          <div className="overflow-hidden [mask-image:linear-gradient(to_right, transparent, black_20%, black_80%, transparent)] pt-24">
            <div className="flex gap-14 animate-scroll">
              {[googleLogo, googleLogo, googleLogo, googleLogo, googleLogo].map(
                  (logo, index) => (
                      <img
                          key={index}
                          src={logo.src}
                          alt={`Partner Logo ${index + 1}`}
                          className="h-16 w-auto"
                      />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
  );
};
