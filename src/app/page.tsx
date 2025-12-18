"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { UtensilsCrossed, Clock, Users, Star, Leaf, Heart, Calendar } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Reservations", id: "contact" },
            { name: "Contact", id: "footer" }
          ]}
          brandName="Jovalunga"
          bottomLeftText="Fine Dining Experience"
          bottomRightText="reservations@jovalunga.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Welcome to Jovalunga"
          description="Experience culinary excellence in an atmosphere of warmth and elegance. Indulge in our signature dishes crafted with the finest ingredients."
          tag="Fine Dining Restaurant"
          tagIcon={UtensilsCrossed}
          buttons={[
            { text: "Make a Reservation", href: "contact" },
            { text: "View Menu", href: "features" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051943567-tzvyzois.jpg",
              imageAlt: "Gourmet plated dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051944818-qdmg51ra.jpg",
              imageAlt: "Restaurant ambiance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051946352-r35xk8u2.jpg",
              imageAlt: "Chef preparing meal"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051947508-s0z5ea3i.jpg",
              imageAlt: "Elegant table setting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051948616-8uixfxto.jpg",
              imageAlt: "Artistic food plating"
            }
          ]
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Crafted with Passion Since 2010"
          description="Jovalunga brings together decades of culinary expertise and a passion for local, sustainable ingredients. Our chefs create memorable dining experiences that celebrate flavor, artistry, and hospitality."
          textboxLayout="default"
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051949951-0o02ok6v.jpg",
            imageAlt: "Restaurant kitchen operations"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051951094-91hgv6vg.jpg",
            imageAlt: "Restaurant exterior entrance"
          }}
          buttons={[
            { text: "Learn More", href: "#" },
            { text: "Book Now", href: "contact" }
          ]}
          useInvertedBackground="invertCard"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Signature Experiences"
          description="Discover our carefully curated menu featuring seasonal specialties and time-honored recipes"
          tag="Menu"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Seasonal Appetizers",
              description: "Fresh starters featuring locally-sourced ingredients, changing with the seasons",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051952133-t8q33th1.jpg"
            },
            {
              id: 2,
              title: "Main Courses",
              description: "Signature grilled selections and chef's specialties prepared with precision",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051953413-13ayrc0l.jpg"
            },
            {
              id: 3,
              title: "Artisan Desserts",
              description: "Sweet creations by our pastry chef, featuring classic and modern flavors",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051954556-dfom4s42.jpg"
            },
            {
              id: 4,
              title: "Wine Selection",
              description: "Curated wine pairings from renowned vineyards around the world",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051964958-lhk3ik4a.jpg"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSix
          title="By The Numbers"
          description="Trusted by thousands of diners seeking exceptional culinary experiences"
          tag="Our Impact"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          metrics={[
            {
              id: "1",
              value: "15+",
              tag: "Years",
              tagIcon: Clock,
              title: "Years of Excellence"
            },
            {
              id: "2",
              value: "50K+",
              tag: "Guests",
              tagIcon: Users,
              title: "Happy Diners Annually"
            },
            {
              id: "3",
              value: "4.9★",
              tag: "Rating",
              tagIcon: Star,
              title: "Average Guest Rating"
            },
            {
              id: "4",
              value: "100%",
              tag: "Local",
              tagIcon: Leaf,
              title: "Sourced Ingredients"
            }
          ]}
          useInvertedBackground="invertCard"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Team"
          description="Passionate culinary professionals dedicated to your dining experience"
          tag="Our Chefs"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          team={[
            {
              id: "1",
              name: "Chef Marcus",
              role: "Executive Chef & Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051955816-4pywjlpb.jpg"
            },
            {
              id: "2",
              name: "Chef Elena",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051956794-xs6u90ob.jpg"
            },
            {
              id: "3",
              name: "Thomas",
              role: "Head Server",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051957668-l1kof5u5.jpg"
            },
            {
              id: "4",
              name: "Sofia",
              role: "Sommelier",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051958499-hzwbo632.jpg"
            },
            {
              id: "5",
              name: "Chef Marcus",
              role: "Executive Chef & Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051955816-4pywjlpb.jpg"
            },
            {
              id: "6",
              name: "Chef Elena",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051956794-xs6u90ob.jpg"
            },
            {
              id: "7",
              name: "Thomas",
              role: "Head Server",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051957668-l1kof5u5.jpg"
            },
            {
              id: "8",
              name: "Sofia",
              role: "Sommelier",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051958499-hzwbo632.jpg"
            }
          ]
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Over 10,000 guests celebrate special moments at Jovalunga every year"
          cardTag="See what they say"
          cardTagIcon={Heart}
          useInvertedBackground="invertCard"
          testimonials={[
            {
              id: "1",
              name: "John",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051959971-odn7c04o.jpg"
            },
            {
              id: "2",
              name: "Sarah",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051961455-1x12odjh.jpg"
            },
            {
              id: "3",
              name: "Michael",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051962517-5zu3egj0.jpg"
            },
            {
              id: "4",
              name: "Lisa",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051963873-cgpjshps.jpg"
            },
            {
              id: "5",
              name: "David",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051959971-odn7c04o.jpg"
            },
            {
              id: "6",
              name: "Emma",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051961455-1x12odjh.jpg"
            }
          ]
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Join Us for an Unforgettable Evening"
          description="Reserve your table or subscribe to our newsletter for exclusive offers, menu previews, and special dining events."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766051964958-lhk3ik4a.jpg"
          mediaPosition="right"
          tagIcon={Calendar}
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. We'll only send you dining updates and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Jovalunga"
          copyrightText="© 2025 Jovalunga Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Menu", href: "features" },
                { label: "Private Events", href: "#" },
                { label: "Catering", href: "#" }
              ]
            },
            {
              title: "Reservations",
              items: [
                { label: "Book a Table", href: "contact" },
                { label: "Gift Cards", href: "#" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Allergen Info", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}