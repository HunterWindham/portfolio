import { useScrollReveal } from '../hooks';

const skills = [
  { category: 'Backend', items: [
      'Node', 'Express', 'PostgreSQL', 'MySQL', 'NestJS', 'Sequelize'
    ]
  },
  { category: 'Frontend', items: [
      'React', 'Redux', 'Vue', 'Angular', 'Tailwind'
    ]
  },
  { category: 'Languages', items: [
      'JavaScript (ES6+)', 'TypeScript', 'Python'
    ]
  },
  { category: 'Tools & Infrastructure', items: [
      'Docker', 'AWS (EC2, ECS, S3, RDS, CloudWatch)', 'CI/CD (Jenkins, GitHub Actions, Travis)', 'Prometheus', 'Grafana', 'Apache Superset'
    ]
  }
];

export function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-xxl bg-surface min-h-screen"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl items-start">
          {/* Left Column - Content */}
          <div>
            <p className="scroll-reveal reveal-up uppercase text-small tracking-[0.12em] text-text-low mb-sm">
              About Me
            </p>
            <h2 className="scroll-reveal reveal-up scroll-delay-1 text-h2 text-text-high mb-md">
              Full-Stack Developer
            </h2>
            
            <div className="scroll-reveal reveal-up scroll-delay-2 space-y-md text-body-large text-text-medium">
              <p>
                I have <span className="text-primary font-semibold">7+ years of experience designing, building,
                and improving web applications</span>. I enjoy digging into
                <span className="text-primary font-semibold"> complex problems</span>, understanding how
                systems work under the hood, and creating solutions that are
                <span className="text-primary font-semibold"> clean, reliable, and built to scale</span>.
                I take <span className="text-primary font-semibold">full ownership</span> of my work and
                always look for ways to leave systems, teams, and processes better than I found them.
              </p>

              <p>
                I thrive in environments with
                <span className="text-primary font-semibold"> open communication and genuine collaboration</span>.
                Whether I’m <span className="text-primary font-semibold">leading a project</span> or
                contributing as part of a <span className="text-primary font-semibold">cross-functional team</span>,
                I focus on clarity, smooth execution, and helping the people around me succeed.
              </p>

              <p>
                Outside of work, you’ll find me fishing, biking, playing games, watching TV, or spending time
                with my <span className="text-primary font-semibold">family, my wife, and our two cats</span>.
                A good day for me balances <span className="text-primary font-semibold">creating things I’m proud of</span> and spending time with the people (and pets) I love.
              </p>
            </div>
            {/* Experience Timeline */}
            <div
              className="
                scroll-reveal reveal-up scroll-delay-3
                mt-lg bg-bg
                rounded-md p-lg
                shadow-(--shadow-1)
              "
            >
              <h3 className="text-h3 text-text-high mb-md">
                Experience
              </h3>
              <div className="space-y-md">
                <div className="border-l-2 border-primary pl-md">
                  <div className="text-caption text-text-low">Jan 2023 - Sep 2025</div>
                  <div className="font-semibold text-text-high">Software Developer</div>
                  <div className="text-body text-text-medium">TRU Solutions</div>
                </div>
                <div className="border-l-2 border-border pl-md">
                  <div className="text-caption text-text-low">Aug 2019 - Jan 2023</div>
                  <div className="font-semibold text-text-high">Software Developer</div>
                  <div className="text-body text-text-medium">SPOT</div>
                </div>
                <div className="border-l-2 border-border pl-md">
                  <div className="text-caption text-text-low">Aug 2018 - Aug 2019</div>
                  <div className="font-semibold text-text-high">Student Software Developer</div>
                  <div className="text-body text-text-medium">The University of Southern Mississippi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Skills */}
          <div className="lg:pl-xl">
            {/* Education Timeline */}
            <div
              className="
                scroll-reveal reveal-left scroll-delay-1
                mb-lg bg-bg
                rounded-md p-lg
                shadow-(--shadow-1)
              "
            >
              <h3 className="text-h3 text-text-high mb-md">
                Education
              </h3>
              <div className="space-y-md">
                <div className="border-l-2 border-primary pl-md">
                  <div className="text-caption text-text-low">Graduated: May 2019</div>
                  <div className="font-semibold text-text-high">B.S. in Computer Science</div>
                  <span className="text-caption text-text-low">Minor in Mathematics</span>
                  <div className="text-body text-text-medium">The University of Southern Mississippi</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="grid gap-lg">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className={`
                    scroll-reveal reveal-left scroll-delay-${index + 2}
                    bg-bg rounded-md
                    p-lg shadow-(--shadow-1)
                  `}
                >
                  <h3 className="text-h3 text-text-high mb-md">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-sm">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="
                          text-body px-[12px] py-[6px]
                          rounded-sm
                          bg-surface
                          text-text-medium
                          border border-border
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

