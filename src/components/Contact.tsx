import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '../hooks';

export function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-xxl bg-bg min-h-[89vh] flex items-center"
    >
      <div className="container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Left Column - Contact Info */}
          <div>
            <p className="scroll-reveal reveal-up uppercase text-small tracking-[0.12em] text-text-low mb-sm">
              Get in Touch
            </p>
            <h2 className="scroll-reveal reveal-up scroll-delay-1 text-h2 text-text-high mb-md">
              Let's create something amazing together
            </h2>
            <p className="scroll-reveal reveal-up scroll-delay-2 text-body-large text-text-medium mb-xl">
              Have a project in mind? I'd love to hear about it. Drop me a message 
              and I'll get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="scroll-reveal reveal-up scroll-delay-3 space-y-lg">
              {/* Email */}
              <a
                href="mailto:hunter.a.windham@gmail.com"
                className="
                  flex items-center gap-md
                  text-text-medium hover:text-primary
                  transition-colors duration-(--duration-fast)
                "
              >
                <div
                  className="
                    w-[48px] h-[48px] rounded-md
                    bg-surface flex items-center justify-center
                  "
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-caption text-text-low">Email</div>
                  <div className="font-semibold">hunter.a.windham@gmail.com</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-md">
                <div
                  className="
                    w-[48px] h-[48px] rounded-md
                    bg-surface flex items-center justify-center
                    text-text-medium
                  "
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-caption text-text-low">Location</div>
                  <div className="font-semibold text-text-high">Hattiesburg, MS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="
              scroll-reveal reveal-left scroll-delay-2
              bg-surface rounded-md
              p-lg md:p-xl
            "
          >
            {isSubmitted ? (
              <div className="text-center py-xl">
                <div
                  className="
                    w-xxl h-xxl rounded-full
                    bg-success bg-opacity-10
                    flex items-center justify-center mx-auto mb-md
                  "
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-success)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-h3 text-text-high mb-sm">
                  Message Sent!
                </h3>
                <p className="text-body text-text-medium">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-lg">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-caption font-semibold text-text-medium mb-sm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="
                      w-full h-[44px] px-[12px]
                      rounded-[8px] border border-border
                      bg-bg
                      text-text-high
                      focus:border-primary
                      focus:shadow-[0_0_0_4px_rgba(11,110,79,0.08)]
                      outline-none transition-all duration-(--duration-fast)
                    "
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-caption font-semibold text-text-medium mb-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="
                      w-full h-[44px] px-[12px]
                      rounded-[8px] border border-border
                      bg-bg
                      text-text-high
                      focus:border-primary
                      focus:shadow-[0_0_0_4px_rgba(11,110,79,0.08)]
                      outline-none transition-all duration-(--duration-fast)
                    "
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-caption font-semibold text-text-medium mb-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="
                      w-full px-[12px] py-[10px]
                      rounded-[8px] border border-border
                      bg-bg
                      text-text-high
                      focus:border-primary
                      focus:shadow-[0_0_0_4px_rgba(11,110,79,0.08)]
                      outline-none transition-all duration-(--duration-fast)
                      resize-none
                    "
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    btn btn--solid btn--large w-full
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" opacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

