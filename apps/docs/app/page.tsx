import PublicationsList from "./components/publications-list";
import ContactSection from "./components/homepage/contact";
import Timeline from "./components/timeline";
import About from "./components/about";
import Skills from "./components/skills";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <About />
      <Timeline />
      <Skills />
      <PublicationsList limit={6} />
      <ContactSection />
    </div>
  )
}
