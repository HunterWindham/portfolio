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
                I have <span className="text-primary">7+ years of experience</span> building and improving web applications.
                I enjoy digging into complex problems, understanding how systems work under the hood, and creating
                solutions that are <span className="text-primary">clean, reliable, and built to scale</span>. I take ownership of what I build and
                care about leaving things better than I found them.
              </p>

              <p>
                I work best in environments with <span className="text-primary">open communication and real collaboration</span>. Whether I'm leading
                a project or supporting a team, I focus on making the process smoother for everyone involved.
              </p>

              <p>
                Outside of work, you'll find me fishing, biking, playing games, watching shows, or spending time
                with my family, my wife, and our two cats. A good day for me balances building things I'm proud
                of and spending time with the people (and pets) I love.
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

