import { ArchiveSection } from "@/components/invitation/archive-section";
import { EventInfoSection } from "@/components/invitation/event-info-section";
import { FooterSection } from "@/components/invitation/footer-section";
import { HeroSection } from "@/components/invitation/hero-section";
import { InvitationSection } from "@/components/invitation/invitation-section";
import { LocationSection } from "@/components/invitation/location-section";
import { RsvpSection } from "@/components/invitation/rsvp-section";
import { SectionPreview } from "@/components/invitation/section-preview";
import { TimetableSection } from "@/components/invitation/timetable-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <HeroSection />
      <InvitationSection />
      <EventInfoSection />
      <LocationSection />
      <TimetableSection />
      <ArchiveSection />
      <RsvpSection />
      <SectionPreview />
      <FooterSection />
    </main>
  );
}
