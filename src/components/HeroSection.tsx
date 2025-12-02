import headshotImg from '../assets/headshot.jpg';
import { SocialLinks } from './SocialLinks';

export function HeroSection() {
  return (
    <section
      className="
        min-h-[calc(100vh-72px)] pt-[72px]
        flex items-center
        py-xxl
      "
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <p
              className="
                uppercase text-[14px] tracking-[0.12em]
                text-text-medium
                mb-[12px]
              "
            >
              Hey! I'm Hunter Windham, and I enjoy
            </p>

            <h1 className="text-h1 text-text-high max-w-[720px]">
              Building Clean, Scalable Products That Solve Real Problems
            </h1>

            <p
              className="
                text-body-large text-text-low
                max-w-[640px] mt-md
              "
            >
              Full-Stack Developer
            </p>

            <SocialLinks className="mt-lg" />
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="
                relative w-full max-w-[400px] aspect-3/4
                rounded-md overflow-hidden
                bg-linear-to-br from-surface to-muted
                shadow-(--shadow-2)
              "
            >
              {/* Headshot */}
              <img
                src={headshotImg}
                alt="Hunter Windham"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

