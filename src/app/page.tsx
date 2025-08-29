"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleFloatingNavbar from '@/components/navigation/SimpleFloatingNavbar';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { useState } from 'react';

const Home = () => {
  const [formState, setFormState] = useState("initial");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormState("submitted");
  };

  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 1,
      textAnimation: 'slide',
    }}>
      <SimpleFloatingNavbar navItems={[
        { id: 'hero', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'testimonials', name: 'Testimonials' },
        { id: 'contact', name: 'Contact' },
      ]} logoSrc="/images/logo.svg" logoWidth={100} logoHeight={40} buttonText="Inquire" onButtonClick={() => {}} className="bg-transparent" />

      <section id="hero" className="bg-hero pattern-section">
        <SimpleHero title="Welcome to My Portfolio" description="Showcasing my work and skills in a futuristic UI." primaryButtonText="View Work" secondaryButtonText="Learn More" />
      </section>
      <section id="about" className="bg-hero pattern-section">
        <MinimalAbout description="I am a passionate developer with a love for creating unique digital experiences." />
      </section>
      <section id="skills" className="bg-hero pattern-section">
        <SimpleKPIBento items={[
          { value: "HTML", description: "Markup language for structuring content." },
          { value: "CSS", description: "StyleSheet language for designing webpages." },
          { value: "JavaScript", description: "Programming language for web development." },
          { value: "React", description: "Library for building user interfaces." }
        ]} className="custom-class" gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" itemClassName="skill-card" />
      </section>
      <section id="projects" className="bg-projects pattern-section">
        <GalleryBento items={[
          { title: "Project 1", image: "/images/placeholder1.avif" },
          { title: "Project 2", image: "/images/placeholder2.avif" },
          { title: "Project 3", image: "/images/placeholder3.avif" },
          { title: "Project 4", image: "/images/placeholder4.avif" }
        ]} className="custom-class" gridClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
      </section>
      <section id="testimonials" className="bg-hero pattern-section">
        <div className="flex flex-col gap-4 p-6">
          <blockquote>
            <p>“Innovative and efficient solutions!”</p>
            <footer>— User1</footer>
          </blockquote>
          <blockquote>
            <p>“Transformed our project!”</p>
            <footer>— User2</footer>
          </blockquote>
        </div>
      </section>
      <section id="contact" className="bg-contact pattern-section">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
          <input type="text" placeholder="Name" required className="p-2 border" />
          <input type="email" placeholder="Email" required className="p-2 border" />
          <textarea placeholder="Message" required className="p-2 border" />
          <button type="submit" className="p-2 border bg-primary text-white">Submit</button>
          {formState === "submitted" && <p>Thank you for your message!</p>}
        </form>
      </section>
      <SimpleFooter columns={[
        { title: "Quick Links", items: [
          { label: "Home", onClick: () => {} },
          { label: "About", onClick: () => {} }
        ] }
      ]} copyrightText="© 2023 NeonFrame Portfolio" onPrivacyClick={() => {}} />
    </SiteThemeProvider>
  );
};

export default Home;
