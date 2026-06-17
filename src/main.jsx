import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Building2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Factory,
  Hammer,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
  Zap,
  ZoomIn,
  ArrowUp,
} from 'lucide-react';
import './styles.css';

const business = {
  phone: '+91 76201 69259',
  phoneHref: '+917620169259',
  whatsapp: '917620169259',
  email: 'omsaiengg@gmail.com',
  address: 'Om Sai Engineering, near Paranjape School, Kothrud, Pune, Maharashtra, India',
  mapQuery: 'Om Sai Engineering near Paranjape School Kothrud Pune Maharashtra India',
};

const navItems = [
  ['Home', 'home'],
  ['About Us', 'about'],
  ['Services', 'services'],
  ['Projects', 'projects'],
  ['Testimonials', 'testimonials'],
  ['Contact Us', 'contact'],
];

const services = [
  {
    title: 'UPVC Windows',
    icon: Building2,
    category: 'Windows',
    image: '/assets/services/upvc-windows.png',
    text: 'Weather-sealed UPVC window systems with clean profiles, low maintenance, and strong thermal comfort.',
  },
  {
    title: 'Sliding Windows',
    icon: ShieldCheck,
    category: 'Windows',
    image: '/assets/services/sliding-windows.png',
    text: 'Smooth sliding window systems built for ventilation, easy operation, strong sealing, and refined finish.',
  },
  {
    title: 'French Windows',
    icon: Sparkles,
    category: 'Windows',
    image: '/assets/services/french-windows.png',
    text: 'Elegant full-height French window designs for balconies, bedrooms, halls, and premium frontage areas.',
  },
  {
    title: 'French Doors',
    icon: Hammer,
    category: 'Doors',
    image: '/assets/services/french-doors.png',
    text: 'Custom French doors with precise frame alignment, safe glazing, and smooth day-to-day movement.',
  },
  {
    title: 'Invisible Grill',
    icon: Factory,
    category: 'Safety',
    image: '/assets/services/invisible-grill.png',
    text: 'Slim stainless safety cable systems for balconies and windows without blocking light or outside views.',
  },
  {
    title: 'Aluminium Railing',
    icon: Wrench,
    category: 'Railing',
    image: '/assets/services/aluminium-railing.png',
    text: 'Durable aluminium railing for balconies, staircases, terraces, and commercial edges with neat finishing.',
  },
  {
    title: 'Awning Shed',
    icon: Building2,
    category: 'Sheds',
    image: '/assets/services/awning-shed.png',
    text: 'Custom awning sheds in polycarbonate, metal, fibre, or site-suitable material for shade and rain protection.',
  },
  {
    title: 'Fiber PVC Ceiling',
    icon: ShieldCheck,
    category: 'Interiors',
    image: '/assets/services/fiber-pvc-ceiling.png',
    text: 'Lightweight fibre and PVC ceiling work for balconies, utility areas, offices, and low-maintenance interiors.',
  },
  {
    title: 'Glass Installation',
    icon: Sparkles,
    category: 'Glass',
    image: '/assets/services/glass-installation.png',
    text: 'Accurate glass fitting for partitions, doors, facades, balcony sections, and custom glazing.',
  },
  {
    title: 'Fabrication Work',
    icon: Hammer,
    category: 'Fabrication',
    image: '/assets/services/fabrication-work.png',
    text: 'Precision fabrication for gates, grills, railings, frames, sheds, and project-specific metal assemblies.',
  },
  {
    title: 'Structural Fabrication',
    icon: Factory,
    category: 'Fabrication',
    image: '/assets/services/structural-fabrication.png',
    text: 'Dependable structural work for industrial, commercial, and utility requirements with practical site coordination.',
  },
  {
    title: 'Fiber Photo Frames',
    icon: Award,
    category: 'Decor',
    image: '/assets/services/fiber-photo-frames.png',
    text: 'Optional fibre photo frame work for decorative walls, gifting, and small interior finishing needs.',
  },
];

const projectImages = [
  {
    src: '/assets/hero-fabrication.png',
    title: 'Premium Sliding Window Installation',
    category: 'Residential',
  },
  {
    src: '/assets/sliding-window-installation.png',
    title: 'Aluminium Sliding Window Frames',
    category: 'Residential',
  },
  {
    src: '/assets/commercial-glass.png',
    title: 'Commercial Glass Installation',
    category: 'Commercial',
  },
  {
    src: '/assets/fabrication-workshop.png',
    title: 'Industrial Fabrication Workshop',
    category: 'Industrial',
  },
  {
    src: '/assets/sliding-window-installation.png',
    title: 'Sliding Window Site Installation',
    category: 'Residential',
  },
  {
    src: '/assets/structural-welding.png',
    title: 'Structural Welding & Fabrication',
    category: 'Industrial',
  },
];

const reasons = [
  ['High Quality Materials', Award],
  ['Skilled Workforce', Users],
  ['Timely Delivery', Clock3],
  ['Affordable Pricing', CircleDollarSign],
  ['Custom Solutions', Zap],
  ['Customer Satisfaction', Star],
];

const testimonials = [
  {
    quote:
      'Our UPVC windows and invisible grill were measured perfectly. The balcony looks open, safe, and very clean.',
    name: 'Aniket Joshi',
    role: 'Kothrud Residence',
  },
  {
    quote:
      'They completed aluminium railing and French door work with good alignment and proper finishing. Communication was clear.',
    name: 'Priya Kulkarni',
    role: 'Apartment Renovation',
  },
  {
    quote:
      'The awning shed was suggested according to our site and rain direction. It has been practical and looks neat.',
    name: 'Sameer Patil',
    role: 'Shop Front Upgrade',
  },
  {
    quote:
      'Reliable fabrication support for our workshop requirement. Strong material, disciplined installation, and good finishing.',
    name: 'Nikhil Shah',
    role: 'Industrial Fabrication',
  },
];

const featuredSolutions = [
  ['Window Systems', 'UPVC, sliding, French windows, aluminium frames, and glass combinations for modern homes.'],
  ['Safety & Exterior', 'Invisible grills, aluminium railings, awning sheds, balcony protection, and rain covers.'],
  ['Interior Finish', 'Fiber PVC ceiling, glass partitions, fibre photo frames, and custom decorative finishing.'],
];

const fadeUp = {
  hidden: { opacity: 1, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const motionViewport = { once: true, amount: 0.18 };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectImages;
    return projectImages.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section && typeof section.scrollIntoView === 'function') {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = id;
    }
    setMenuOpen(false);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const clearValidationMessage = (event) => {
    event.currentTarget.setCustomValidity('');
  };

  const showValidationMessage = (event, message) => {
    event.currentTarget.setCustomValidity(message);
  };

  return (
    <LazyMotion features={domAnimation}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Om Sai Engineering home">
          <img className="brand-logo" src="/assets/om-sai-engineering-logo.png" alt="Om Sai Engineering" />
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="/assets/hero-fabrication.png" alt="Premium aluminium sliding window installation" />
          <div className="hero-overlay" />
          <m.div className="hero-content" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <span className="eyebrow">UPVC, Glass & Fabrication Experts</span>
            <h1>Premium windows, invisible grills, doors, sheds, and fabrication work</h1>
            <p>
              Complete made-to-measure solutions for homes, shops, offices, and industrial sites with clean
              finishing, practical material guidance, and reliable installation.
            </p>
            <div className="hero-buttons">
              <button className="primary-button" onClick={() => scrollTo('contact')}>
                Get Free Quote <ArrowRight size={18} />
              </button>
              <a className="secondary-button" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>
            </div>
          </m.div>
          <m.div className="hero-stats" aria-label="Company highlights" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.65 }}>
            <span><strong>22+</strong> Years Experience</span>
            <span><strong>5100+</strong> Installations</span>
            <span><strong>12+</strong> Product Services</span>
          </m.div>
        </section>

        <m.section className="section about-section" id="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={motionViewport} transition={{ duration: 0.55 }}>
          <m.div className="section-copy" variants={fadeUp}>
            <span className="eyebrow">About Us</span>
            <h2>Built on precise measurement, durable materials, and clean finishing.</h2>
            <p>
              Om Sai Engineering delivers UPVC windows, sliding windows, French doors, invisible grills,
              aluminium railing, awning sheds, fibre PVC ceiling, glass work, and fabrication solutions.
              Every project is planned around site conditions, safety, long service life, and a finish that suits the property.
            </p>
          </m.div>
          <m.div className="about-metrics" variants={stagger}>
            <div>
              <strong>Premium</strong>
              <span>UPVC, aluminium, glass, fibre, and shed material options</span>
            </div>
            <div>
              <strong>Skilled</strong>
              <span>fabricators for windows, railings, grills, doors, and sheds</span>
            </div>
            <div>
              <strong>Reliable</strong>
              <span>timelines, site coordination, and after-service support</span>
            </div>
          </m.div>
        </m.section>

        <m.section className="section solutions-section" variants={stagger} initial="hidden" whileInView="visible" viewport={motionViewport}>
          <div className="section-heading">
            <span className="eyebrow">What We Build</span>
            <h2>A complete exterior and interior finishing partner.</h2>
          </div>
          <div className="solution-strip">
            {featuredSolutions.map(([title, text]) => (
              <m.article className="solution-item" key={title} variants={fadeUp} transition={{ duration: 0.45 }}>
                <strong>{title}</strong>
                <p>{text}</p>
              </m.article>
            ))}
          </div>
        </m.section>

        <m.section className="section services-section" id="services" variants={stagger} initial="hidden" whileInView="visible" viewport={motionViewport}>
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Everything your window, grill, railing, shed, ceiling, and fabrication project needs.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <m.article className="service-card" key={service.title} variants={fadeUp} transition={{ duration: 0.45 }} whileHover={{ y: -5 }}>
                  <img className="service-image" src={service.image} alt={`${service.title} service`} />
                  <div className="service-body">
                    <span className="service-icon">
                      <Icon size={24} />
                    </span>
                    <span className="service-category">{service.category}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </m.article>
              );
            })}
          </div>
        </m.section>

        <m.section className="section projects-section" id="projects" variants={fadeUp} initial="hidden" whileInView="visible" viewport={motionViewport} transition={{ duration: 0.55 }}>
          <div className="section-heading compact">
            <span className="eyebrow">Our Work</span>
            <h2>Completed projects across homes, shops, offices, and industrial sites.</h2>
          </div>
          <div className="filter-row" aria-label="Project categories">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((filter) => (
              <button
                className={activeFilter === filter ? 'active' : ''}
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <m.button
                className="project-tile"
                key={project.title}
                onClick={() => setLightbox(project)}
                aria-label={`Preview ${project.title}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <img loading="lazy" src={project.src} alt={project.title} />
                <span className="project-label">
                  <small>{project.category}</small>
                  <strong>{project.title}</strong>
                </span>
                <ZoomIn className="zoom-icon" size={24} />
              </m.button>
            ))}
          </div>
        </m.section>

        <m.section className="section why-section" variants={stagger} initial="hidden" whileInView="visible" viewport={motionViewport}>
          <div className="section-heading">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Practical engineering standards with a polished customer experience.</h2>
          </div>
          <div className="reason-grid">
            {reasons.map(([reason, Icon]) => (
              <m.div className="reason-item" key={reason} variants={fadeUp} transition={{ duration: 0.42 }}>
                <Icon size={24} />
                <span>{reason}</span>
              </m.div>
            ))}
          </div>
        </m.section>

        <m.section className="section testimonials-section" id="testimonials" variants={fadeUp} initial="hidden" whileInView="visible" viewport={motionViewport} transition={{ duration: 0.55 }}>
          <div className="section-copy">
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by clients who care about finish, fit, and durability.</h2>
            <p>
              Clean measurements, correct material suggestions, and well-finished installation are the work standards clients mention most.
            </p>
          </div>
          <div className="testimonial-panel">
            <AnimatePresence mode="wait">
              <m.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.28 }}
              >
                <div className="stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" />
                  ))}
                </div>
                <p>“{testimonials[testimonialIndex].quote}”</p>
                <strong>{testimonials[testimonialIndex].name}</strong>
                <span>{testimonials[testimonialIndex].role}</span>
              </m.div>
            </AnimatePresence>
            <div className="testimonial-controls">
              <button onClick={previousTestimonial} aria-label="Previous testimonial">
                <ChevronLeft size={22} />
              </button>
              <button onClick={nextTestimonial} aria-label="Next testimonial">
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="testimonial-dots" aria-label="Testimonial position">
              {testimonials.map((testimonial, index) => (
                <button
                  className={index === testimonialIndex ? 'active' : ''}
                  key={testimonial.name}
                  onClick={() => setTestimonialIndex(index)}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                />
              ))}
            </div>
          </div>
        </m.section>

        <m.section className="section contact-section" id="contact" variants={fadeUp} initial="hidden" whileInView="visible" viewport={motionViewport} transition={{ duration: 0.55 }}>
          <div className="section-heading">
            <span className="eyebrow">Contact Us</span>
            <h2>Tell us what you need. We will help with measurements, options, and pricing.</h2>
          </div>
          <div className="contact-layout">
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                if (event.currentTarget.reportValidity()) {
                  event.currentTarget.reset();
                }
              }}
            >
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  minLength="2"
                  maxLength="60"
                  pattern="[A-Za-z\s.]+"
                  required
                  onInput={clearValidationMessage}
                  onInvalid={(event) => showValidationMessage(event, 'Please enter a valid name using letters only.')}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="7620169259"
                  inputMode="tel"
                  minLength="10"
                  maxLength="15"
                  pattern="(?:\+91[\s-]?)?[6-9]\d{9}"
                  required
                  onInput={clearValidationMessage}
                  onInvalid={(event) => showValidationMessage(event, 'Please enter a valid 10 digit Indian mobile number.')}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  maxLength="80"
                  required
                  onInput={clearValidationMessage}
                  onInvalid={(event) => showValidationMessage(event, 'Please enter a valid email address.')}
                />
              </label>
              <label>
                Service Required
                <select
                  name="service"
                  defaultValue=""
                  required
                  onInput={clearValidationMessage}
                  onInvalid={(event) => showValidationMessage(event, 'Please select the service you need.')}
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="full-field">
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Share project size, site location, or requirement details."
                  minLength="10"
                  maxLength="500"
                  required
                  onInput={clearValidationMessage}
                  onInvalid={(event) => showValidationMessage(event, 'Please enter at least 10 characters about your requirement.')}
                />
              </label>
              <button className="primary-button full-field" type="submit">
                Submit Enquiry <ArrowRight size={18} />
              </button>
            </form>

            <aside className="contact-info">
              <a href={`tel:${business.phoneHref}`}>
                <Phone size={20} />
                <span>{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`}>
                <Mail size={20} />
                <span>{business.email}</span>
              </a>
              <span>
                <MapPin size={20} />
                <span>{business.address}</span>
              </span>
              <iframe
                title="Om Sai Engineering location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
              />
            </aside>
          </div>
        </m.section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img className="footer-logo" src="/assets/om-sai-engineering-logo.png" alt="Om Sai Engineering" />
            <p>Premium windows, invisible grills, railings, sheds, glass work, and fabrication solutions.</p>
          </div>

          <div className="footer-column">
            <strong>Direct Links</strong>
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>

          <div className="footer-column">
            <strong>Contact</strong>
            <a href={`tel:${business.phoneHref}`}>
              <Phone size={18} />
              <span>{business.phone}</span>
            </a>
            <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.04 3.2A12.73 12.73 0 0 0 5.1 22.48L3.32 29l6.68-1.75a12.71 12.71 0 0 0 6.04 1.53h.01A12.79 12.79 0 0 0 16.04 3.2Zm7.5 18.05c-.31.88-1.82 1.68-2.54 1.79-.65.1-1.47.14-2.37-.15-.55-.17-1.25-.4-2.15-.78-3.78-1.63-6.24-5.43-6.43-5.68-.19-.25-1.53-2.03-1.53-3.88 0-1.85.97-2.76 1.31-3.13.34-.38.75-.47 1-.47h.72c.23.01.54-.09.84.64.31.75 1.06 2.59 1.15 2.78.09.19.16.41.03.66-.13.25-.19.41-.38.63-.19.22-.4.49-.56.66-.19.19-.38.4-.16.78.22.38.98 1.62 2.1 2.62 1.45 1.29 2.67 1.69 3.05 1.88.38.19.6.16.82-.09.22-.25.94-1.1 1.19-1.47.25-.38.5-.31.84-.19.34.13 2.16 1.02 2.53 1.2.38.19.63.28.72.44.09.16.09.91-.22 1.79Z"
                />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href={`mailto:${business.email}`}>
              <Mail size={18} />
              <span>{business.email}</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Om Sai Engineering</span>
          <span>Sliding Windows | Fabrication | Aluminium Systems</span>
        </div>
      </footer>

      <a
        className="whatsapp-button"
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hello Om Sai Engineering, I want a free quote.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.04 3.2A12.73 12.73 0 0 0 5.1 22.48L3.32 29l6.68-1.75a12.71 12.71 0 0 0 6.04 1.53h.01A12.79 12.79 0 0 0 16.04 3.2Zm7.5 18.05c-.31.88-1.82 1.68-2.54 1.79-.65.1-1.47.14-2.37-.15-.55-.17-1.25-.4-2.15-.78-3.78-1.63-6.24-5.43-6.43-5.68-.19-.25-1.53-2.03-1.53-3.88 0-1.85.97-2.76 1.31-3.13.34-.38.75-.47 1-.47h.72c.23.01.54-.09.84.64.31.75 1.06 2.59 1.15 2.78.09.19.16.41.03.66-.13.25-.19.41-.38.63-.19.22-.4.49-.56.66-.19.19-.38.4-.16.78.22.38.98 1.62 2.1 2.62 1.45 1.29 2.67 1.69 3.05 1.88.38.19.6.16.82-.09.22-.25.94-1.1 1.19-1.47.25-.38.5-.31.84-.19.34.13 2.16 1.02 2.53 1.2.38.19.63.28.72.44.09.16.09.91-.22 1.79Z"
          />
        </svg>
      </a>

      {showTop && (
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} />
        </button>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close preview">
            <X size={28} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <figcaption>
              <small>{lightbox.category}</small>
              <strong>{lightbox.title}</strong>
            </figcaption>
          </figure>
        </div>
      )}
    </LazyMotion>
  );
}

createRoot(document.getElementById('root')).render(<App />);
