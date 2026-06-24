import "./Contact.css";

const CHANNELS = [
  {
    id: "email",
    platform: "Email",
    handle: "edubewinfred@gmail.com",
    cta: "Send a message",
    href: "mailto:edubewinfred@gmail.com",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="22,6 12,13 2,6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "linkedin.com/in/winfred-edube",
    cta: "Connect with me",
    href: "https://www.linkedin.com/in/winfred-edube/",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "github",
    platform: "GitHub",
    handle: "github.com/edubew",
    cta: "See my code",
    href: "https://github.com/edubew",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
          0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
          -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
          .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
          -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
          c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
          .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
          0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
          C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    handle: "+254 718 595 043",
    cta: "Chat directly",
    href: "https://wa.me/254718595043",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
          -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
          -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
          .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
          -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
          -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2
          5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719
          2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        />
        <path
          d="M11.998 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.014L2 22l5.112-1.32
          A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2h-.002z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact section--dark"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__header reveal">
          <span className="section-label section-label--light">Contact</span>
          <h2 className="section-title section-title--light" id="contact-title">
            Let's Build Something Useful
          </h2>
          <p className="section-subtitle section-subtitle--light">
            Open to freelance projects, contract work, and full-time
            opportunities. Pick the channel that works best for you — I respond
            within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          {CHANNELS.map((ch, i) => (
            <a
              key={ch.id}
              href={ch.href}
              target={ch.id === "email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`contact-card reveal reveal-delay-${i + 1}`}
              aria-label={`${ch.platform}: ${ch.handle}`}
            >
              <div className="contact-card__icon">{ch.icon}</div>
              <div className="contact-card__body">
                <span className="contact-card__platform">{ch.platform}</span>
                <span className="contact-card__handle">{ch.handle}</span>
              </div>
              <div className="contact-card__cta">
                {ch.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <p className="contact__note reveal">
          Prefer a structured brief? Email works great for project details,
          timelines, and budget conversations.
        </p>
      </div>
    </section>
  );
}
