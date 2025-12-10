import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { useScrollReveal } from '../hooks';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const sectionRef = useScrollReveal();
  const { 
    register, 
    reset, 
    handleSubmit, 
    formState: { isSubmitting, isValid, errors, touchedFields } 
  } = useForm<FormData>({
    mode: 'onChange', // Validate on change to enable/disable button in real-time
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Web3Forms public access key
  const accessKey = 'ce3ae895-20a4-484d-9aa1-7662041131e6';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'hunterwindham.dev',
      subject: 'New Contact Message from Portfolio Website',
    },
    onSuccess: (msg) => {
      setIsSubmitted(true);
      setResult(msg);
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setResult(null);
      }, 5000);
    },
    onError: (msg) => {
      setIsSubmitted(false);
      setResult(msg);
    },
  });

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
              Connect with me
            </p>
            <h2 className="scroll-reveal reveal-up scroll-delay-1 text-h2 text-text-high mb-md">
              Let's talk about working together
            </h2>
            <p className="scroll-reveal reveal-up scroll-delay-2 text-body-large text-text-medium mb-xl">
              Exploring a role, have an opportunity in mind, or just want to say hello? I'm excited to connect - drop a note and I'll be in touch.
            </p>

            {/* Contact Details */}
            <div className="scroll-reveal reveal-up scroll-delay-3 space-y-lg">
              {/* Email */}
              <a
                href="mailto:contact@hunterwindham.dev"
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
                  <div className="font-semibold">contact@hunterwindham.dev</div>
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
                    bg-success
                    flex items-center justify-center mx-auto mb-md
                  "
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-lg">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-caption font-semibold text-text-medium mb-sm"
                  >
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`
                      w-full h-[44px] px-[12px]
                      rounded-[8px] border
                      bg-bg
                      text-text-high
                      focus:shadow-[0_0_0_4px_rgba(11,110,79,0.08)]
                      outline-none transition-all duration-(--duration-fast)
                      ${errors.name && touchedFields.name
                        ? 'border-danger focus:border-danger'
                        : 'border-border focus:border-primary'
                      }
                    `}
                    placeholder="Your name"
                  />
                  {errors.name && touchedFields.name && (
                    <p className="text-caption text-danger mt-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-caption font-semibold text-text-medium mb-sm"
                  >
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={`
                      w-full h-[44px] px-[12px]
                      rounded-[8px] border
                      bg-bg
                      text-text-high
                      focus:shadow-[0_0_0_4px_rgba(11,110,79,0.08)]
                      outline-none transition-all duration-(--duration-fast)
                      ${errors.email && touchedFields.email
                        ? 'border-danger focus:border-danger'
                        : 'border-border focus:border-primary'
                      }
                    `}
                    placeholder="your@email.com"
                  />
                  {errors.email && touchedFields.email && (
                    <p className="text-caption text-danger mt-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-caption font-semibold text-text-medium mb-sm"
                  >
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={`
                      w-full px-[12px] py-[10px]
                      rounded-[8px] border
                      bg-bg
                      text-text-high
                      focus:shadow-[0_0_0_4px_rgba(11,110,79,0.08)]
                      outline-none transition-all duration-(--duration-fast)
                      resize-none
                      ${errors.message && touchedFields.message
                        ? 'border-danger focus:border-danger'
                        : 'border-border focus:border-primary'
                      }
                    `}
                    placeholder="Your message..."
                  />
                  {errors.message && touchedFields.message && (
                    <p className="text-caption text-danger mt-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Error Message */}
                {result && !isSubmitted && (
                  <div className="text-body text-danger">
                    {result}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
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

