import headshotImg from '../assets/headshot.webp';
import { LiquidEther } from './LiquidEther';
import { SocialLinks } from './SocialLinks';

export function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-72px)] pt-[72px]
        flex items-center
        py-xxl
      "
    >
      {/* Animated fluid background */}
      <div
        className="absolute inset-0"
      >
        <LiquidEther/>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <p
              className="
                uppercase text-caption tracking-[0.12em]
                text-text-medium
                mb-[12px]
                animate-in animate-slide-up delay-2
              "
            >
              Hey! I'm Hunter Windham, and I enjoy
            </p>

            <h1 className="text-h1 text-text-high max-w-[720px] animate-in animate-slide-up delay-3">
              Building Clean, Scalable Products That Solve Real Problems
            </h1>

            <p
              className="
                text-body-large text-text-low
                max-w-[640px] mt-md
                animate-in animate-slide-up delay-4
              "
            >
              Full-Stack Developer
            </p>

            <SocialLinks className="mt-lg animate-in animate-slide-up delay-5" />
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-in animate-scale-in delay-2">
            <div
              className="
                relative w-full max-w-[280px] md:max-w-[400px] aspect-3/4
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

