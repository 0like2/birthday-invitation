import { ArchiveSection } from "@/components/invitation/archive-section";
import { EventInfoSection } from "@/components/invitation/event-info-section";
import { FooterSection } from "@/components/invitation/footer-section";
import { HeroSection } from "@/components/invitation/hero-section";
import { InvitationSection } from "@/components/invitation/invitation-section";
import { PrincesSection } from "@/components/invitation/princes-section";
import { LocationSection } from "@/components/invitation/location-section";
import { GuestbookSection } from "@/components/invitation/guestbook-section";
import { RsvpSection } from "@/components/invitation/rsvp-section";
import { TimetableSection } from "@/components/invitation/timetable-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <HeroSection />
      <PrincesSection />
      <InvitationSection />
      <EventInfoSection />
      <LocationSection />
      <TimetableSection />
      <ArchiveSection />
      <div id="rsvp">
        <RsvpSection />
      </div>
      <GuestbookSection />
      <FooterSection />
    </main>
  );
}
