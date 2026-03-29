import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  Briefcase,
  Code2,
  FileText,
  Layers3,
  Menu,
  X,
  Wrench,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
  ArrowUpRight,
  LayoutGrid,
  Rows3,
  GraduationCap,
} from "lucide-react";
import { portfolioData } from "./data";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 90 },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [skillsView, setSkillsView] = useState("grid");
  const [profileTilt, setProfileTilt] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const navItems = useMemo(
    () => [
      "summary",
      "skills",
      "experience",
      "projects",
      "publications",
      "certifications",
      "education",
      "services",
      "contact",
    ],
    [],
  );

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      await emailjs.sendForm(
        "service_ea0ic7b",
        "template_i8kv1r7",
        formRef.current,
        {
          publicKey: "42JutG8ElKyq7JHZu",
        },
      );

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      formRef.current.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const getStatusStyles = () => {
    if (status.type === "success") {
      return "border-green-500/30 bg-green-500/15 text-green-400";
    }
    if (status.type === "error") {
      return "border-red-500/30 bg-red-500/15 text-red-400";
    }
    return "border-cyan-500/30 bg-cyan-500/15 text-cyan-300";
  };

  const getStatusIcon = () => {
    if (status.type === "success") return <CheckCircle2 size={18} />;
    if (status.type === "error") return <AlertCircle size={18} />;
    return <LoaderCircle size={18} className="animate-spin" />;
  };

  const handleProfileMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setProfileTilt({ x, y });
  };

  const resetProfileMove = () => {
    setProfileTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative min-h-screen bg-[#07111f] text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.18), transparent 40%)`,
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/75 backdrop-blur-xl">
        <div className="container-custom flex items-center justify-between py-4">
          <a href="#" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="nav-link capitalize">
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#07111f]/95">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="nav-link capitalize"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="container-custom min-h-[78vh] flex items-center pt-10 pb-2">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[720px] mx-auto lg:mx-0"
            >
              <p className="text-cyan-400 font-semibold mb-4 text-lg">
                Hello, I’m
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
                {portfolioData.name}
              </h1>

              <div className="mt-5 min-h-[80px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={portfolioData.roles[currentRoleIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90"
                  >
                    {portfolioData.roles[currentRoleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-[520px]">
                {portfolioData.quickLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -6, scale: 1.02 }}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
                    >
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#07111f]/80" />
                      </div>

                      <div className="relative z-10 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 text-2xl">
                          <Icon />
                        </div>

                        <div>
                          <p className="font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-sm text-white/65">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={portfolioData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-6 py-3 border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-semibold hover:scale-105 transition"
                >
                  Download Resume
                </a>

                <a
                  href="#projects"
                  className="rounded-xl px-6 py-3 bg-cyan-500 text-black font-semibold hover:scale-105 transition"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-xl px-6 py-3 border border-white/15 bg-white/5 hover:bg-white/10 transition"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end -mt-6"
            >
              <div
                className="relative"
                style={{ perspective: "1200px" }}
                onMouseMove={handleProfileMove}
                onMouseLeave={resetProfileMove}
              >
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-violet-500/30 blur-3xl" />

                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  animate={{
                    x: profileTilt.x,
                    y: profileTilt.y,
                    rotateX: -profileTilt.y / 2,
                    rotateY: profileTilt.x / 2,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 14 }}
                  className="relative h-[420px] w-[340px] sm:h-[480px] sm:w-[380px] lg:h-[540px] lg:w-[430px] object-cover rounded-[2.5rem] border border-white/10 shadow-2xl will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <Section
          id="summary"
          title="Professional Summary"
          icon={<FileText size={22} />}
        >
          <div className="max-w-[1100px]">
            <p className="text-white/80 text-lg leading-8">
              {portfolioData.summary}
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills" icon={<Code2 size={22} />}>
          <div className="mb-6 flex items-center gap-3">
            <button
              onClick={() => setSkillsView("grid")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 border transition ${
                skillsView === "grid"
                  ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-300"
                  : "border-white/10 bg-white/5 text-white/70"
              }`}
            >
              <LayoutGrid size={18} />
              Grid
            </button>

            <button
              onClick={() => setSkillsView("list")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 border transition ${
                skillsView === "list"
                  ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-300"
                  : "border-white/10 bg-white/5 text-white/70"
              }`}
            >
              <Rows3 size={18} />
              Line View
            </button>
          </div>

          <AnimatePresence mode="wait">
            {skillsView === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
              >
                {portfolioData.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -10,
                        scale: 1.08,
                        rotate: [0, -4, 4, -2, 2, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 180,
                      }}
                      className="glass-card group flex flex-col items-center justify-center gap-3 p-6 text-center cursor-pointer"
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                        className="text-4xl md:text-5xl text-cyan-400 group-hover:text-violet-400 transition"
                      >
                        <IconComponent />
                      </motion.div>
                      <p className="text-sm md:text-base font-medium text-white/85">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className="grid gap-4"
              >
                {portfolioData.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 10, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 160 }}
                      className="glass-card flex items-center gap-4 px-5 py-4"
                    >
                      <div className="text-3xl text-cyan-400">
                        <IconComponent />
                      </div>
                      <div className="h-px flex-1 bg-white/10" />
                      <p className="text-base md:text-lg font-medium text-white/85">
                        {String(index + 1).padStart(2, "0")} — {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </Section>

        <Section
          id="experience"
          title="Experience"
          icon={<Briefcase size={22} />}
        >
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioData.experience.map((item, idx) => (
              <VerticalLinkCard
                key={idx}
                title={item.title}
                subtitle={`${item.company} • ${item.duration}`}
                desc={item.desc}
                image={item.image}
                link={item.link}
                tag="Experience"
              />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" icon={<Layers3 size={22} />}>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioData.projects.map((item, idx) => (
              <VerticalLinkCard
                key={idx}
                title={item.title}
                subtitle={item.tech}
                desc={item.desc}
                image={item.image}
                link={item.link}
                tag={`Project 0${idx + 1}`}
              />
            ))}
          </div>
        </Section>

        <Section
          id="publications"
          title="Achievement: Research & Publications"
          icon={<Award size={22} />}
        >
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioData.publications.map((item, idx) => (
              <VerticalLinkCard
                key={idx}
                title={item.title}
                subtitle={`${item.org} • ${item.year || item.duration || ""}`}
                desc={item.desc || item.note}
                image={item.image}
                link={item.link}
                tag="Research"
              />
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          title="Certifications"
          icon={<Award size={22} />}
        >
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioData.certifications.map((item, idx) => (
              <VerticalLinkCard
                key={idx}
                title={item.title}
                subtitle={`${item.issuer} • ${item.duration}`}
                desc={item.desc || "Click to view linked certificate."}
                image={item.image}
                link={item.link}
                tag="Certificate"
              />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          title="Education"
          icon={<GraduationCap size={22} />}
        >
          <div className="glass-card p-6">
            <h3 className="text-2xl font-bold">
              {portfolioData.education.degree}
            </h3>
            <p className="mt-2 text-cyan-300">
              {portfolioData.education.college}
            </p>
            <p className="mt-2 text-white/70">
              {portfolioData.education.duration} •{" "}
              {portfolioData.education.location}
            </p>
          </div>
        </Section>

        <Section id="services" title="Services" icon={<Wrench size={22} />}>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-xl font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact With Me" icon={<Mail size={22} />}>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
              <div className="space-y-4 text-white/80">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-400 transition"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-400 transition"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center gap-3 hover:text-cyan-400 transition"
                >
                  <Mail size={20} /> {portfolioData.email}
                </a>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="glass-card p-6 space-y-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="input-field"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="input-field"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="input-field"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="input-field"
              />

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-cyan-500 text-black font-semibold hover:scale-105 transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status.type === "loading" ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    key={status.type}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${getStatusStyles()}`}
                  >
                    {getStatusIcon()}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/10 mt-16">
        <div className="container-custom py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
          <p>© 2026 {portfolioData.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={portfolioData.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${portfolioData.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function VerticalLinkCard({ title, subtitle, desc, image, link, tag }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1628] shadow-2xl h-[500px]"
    >
      <div className="h-[55%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex h-[45%] flex-col justify-between bg-gradient-to-br from-[#0f1f35] to-[#0a1424] p-6">
        <div>
          <p className="mb-2 text-sm font-semibold text-cyan-400">{tag}</p>

          <h3 className="min-h-[72px] text-[1.8rem] font-bold leading-tight text-white">
            {title}
          </h3>

          <p className="mt-3 min-h-[44px] text-sm text-cyan-300">{subtitle}</p>

          <p className="mt-4 min-h-[84px] text-white/75 leading-7">{desc}</p>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-white font-medium">
          Open Link <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.a>
  );
}

function Section({ id, title, icon, children }) {
  return (
    <motion.section
      id={id}
      className="container-custom py-10"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-cyan-400">{icon}</span>
        <h2 className="section-title mb-0">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export default App;