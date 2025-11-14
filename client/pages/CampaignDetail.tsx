import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";

// Campaign data with all images
const campaignData: Record<string, { title: string; images: string[] }> = {
  diesel: {
    title: "Diesel",
    images: [
      "/diesel/PRINCIPAL.jpg",
      "/diesel/di (1).jpg",
      "/diesel/di (2).jpg",
      "/diesel/di (3).jpg",
      "/diesel/di (4).jpg",
      "/diesel/di (5).jpg",
      "/diesel/di (6).jpg",
      "/diesel/di (7).jpg",
      "/diesel/di (8).jpg",
      "/diesel/di (9).jpg",
      "/diesel/di (10).jpg",
      "/diesel/di (11).jpg",
      "/diesel/di (12).jpg",
      "/diesel/di (13).jpg",
      "/diesel/di (14).jpg",
      "/diesel/di (15).jpg",
      "/diesel/di (16).jpg",
    ],
  },
  redox: {
    title: "ReDOX",
    images: [
      "/redox/PRINCIPAL redox.jpg",
      "/redox/re (1).jpg",
      "/redox/re (2).jpg",
      "/redox/re (3).jpg",
      "/redox/re (4).jpg",
      "/redox/re (5).jpg",
      "/redox/re (6).jpg",
    ],
  },
  vibram: {
    title: "Vibram",
    images: [
      "/vibram/PRINCIPAL vibram.jpg",
      "/vibram/vibram (1).jpg",
      "/vibram/vibram (2).jpg",
      "/vibram/vibram (3).jpg",
      "/vibram/vibram (4).jpg",
      "/vibram/vibram (5).jpg",
      "/vibram/vibram (6).jpg",
      "/vibram/vibram (7).jpg",
      "/vibram/vibram (8).jpg",
      "/vibram/vibram (9).jpg",
      "/vibram/vibram (10).jpg",
    ],
  },
  millionvvv: {
    title: "Millionvvv",
    images: [
      "/millionvvv/PRINCIPALmillionvvv.jpg",
      "/millionvvv/visa (1).jpg",
      "/millionvvv/visa (2).jpg",
      "/millionvvv/visa (3).jpg",
      "/millionvvv/visa (4).jpg",
      "/millionvvv/visa (5).jpg",
      "/millionvvv/visa (6).jpg",
      "/millionvvv/visa (7).jpg",
      "/millionvvv/visa (8).jpg",
      "/millionvvv/visa (9).jpg",
    ],
  },
  "mott-projec-x-adidas": {
    title: "MOTT PROJEC X ADIDAS",
    images: [
      "/MOTT PROJEC X ADIDAS/PRINCIPAL mott.jpg",
      "/MOTT PROJEC X ADIDAS/mott (1).jpg",
      "/MOTT PROJEC X ADIDAS/mott (2).jpg",
      "/MOTT PROJEC X ADIDAS/mott (3).jpg",
      "/MOTT PROJEC X ADIDAS/mott (4).jpg",
      "/MOTT PROJEC X ADIDAS/mott (5).jpg",
      "/MOTT PROJEC X ADIDAS/mott (6).jpg",
      "/MOTT PROJEC X ADIDAS/mott (7).jpg",
    ],
  },
  "dj-gordo": {
    title: "DJ Gordo",
    images: [
      "/GORDO PESTAÑA/PRINCIPAL gordo.jpg",
      "/GORDO PESTAÑA/gor (1).jpg",
      "/GORDO PESTAÑA/gor (2).jpg",
      "/GORDO PESTAÑA/gor (3).jpg",
      "/GORDO PESTAÑA/gor (4).jpg",
      "/GORDO PESTAÑA/gor (5).jpg",
      "/GORDO PESTAÑA/gor (6).jpg",
      "/GORDO PESTAÑA/gor (7).jpg",
      "/GORDO PESTAÑA/gor (8).jpg",
      "/GORDO PESTAÑA/gor (9).jpg",
      "/GORDO PESTAÑA/gor (10).jpg",
      "/GORDO PESTAÑA/gor (11).jpg",
      "/GORDO PESTAÑA/gor (12).jpg",
      "/GORDO PESTAÑA/gor (13).jpg",
      "/GORDO PESTAÑA/gor (14).jpg",
      "/GORDO PESTAÑA/gor (15).jpg",
      "/GORDO PESTAÑA/gor (16).jpg",
      "/GORDO PESTAÑA/gor (17).jpg",
      "/GORDO PESTAÑA/gor (18).jpg",
      "/GORDO PESTAÑA/gor (19).jpg",
      "/GORDO PESTAÑA/gor (20).jpg",
      "/GORDO PESTAÑA/gor (21).jpg",
      "/GORDO PESTAÑA/gor (22).jpg",
      "/GORDO PESTAÑA/gor (23).jpg",
      "/GORDO PESTAÑA/gor (24).jpg",
      "/GORDO PESTAÑA/gor (25).jpg",
      "/GORDO PESTAÑA/gor (26).jpg",
      "/GORDO PESTAÑA/gor (27).jpg",
      "/GORDO PESTAÑA/gor (28).jpg",
      "/GORDO PESTAÑA/gor (29).jpg",
      "/GORDO PESTAÑA/gor (30).jpg",
      "/GORDO PESTAÑA/gor (31).jpg",
      "/GORDO PESTAÑA/gor (32).jpg",
      "/GORDO PESTAÑA/gor (33).jpg",
      "/GORDO PESTAÑA/gor (34).jpg",
      "/GORDO PESTAÑA/gor (35).jpg",
      "/GORDO PESTAÑA/gor (36).jpg",
      "/GORDO PESTAÑA/gor (37).jpg",
      "/GORDO PESTAÑA/gor (38).jpg",
      "/GORDO PESTAÑA/gor (39).jpg",
      "/GORDO PESTAÑA/gor (40).jpg",
      "/GORDO PESTAÑA/gor (41).jpg",
      "/GORDO PESTAÑA/gor (42).jpg",
      "/GORDO PESTAÑA/gor (43).jpg",
      "/GORDO PESTAÑA/gor (44).jpg",
      "/GORDO PESTAÑA/gor (45).jpg",
      "/GORDO PESTAÑA/gor (46).jpg",
      "/GORDO PESTAÑA/gor (47).jpg",
      "/GORDO PESTAÑA/gor (48).jpg",
      "/GORDO PESTAÑA/gor (49).jpg",
      "/GORDO PESTAÑA/gor (50).jpg",
      "/GORDO PESTAÑA/gor (51).jpg",
      "/GORDO PESTAÑA/gor (52).jpg",
      "/GORDO PESTAÑA/gor (53).jpg",
    ],
  },
  "dvm-studio": {
    title: "DVM STUDIO",
    images: [
      "/DVM STUDIO/PRINCIPAL principal.jpg",
      "/DVM STUDIO/dvm (1).jpg",
      "/DVM STUDIO/dvm (2).jpg",
      "/DVM STUDIO/dvm (3).jpg",
      "/DVM STUDIO/dvm (4).jpg",
    ],
  },
  bemba: {
    title: "BEMBA",
    images: [
      "/bemba/PRINCIPAL bemba.jpg",
      "/bemba/bemba (1).jpg",
      "/bemba/bemba (2).jpg",
      "/bemba/bemba (3).jpg",
      "/bemba/bemba (4).jpg",
      "/bemba/bemba (5).jpg",
    ],
  },
  "lust-panama": {
    title: "LUST PANAMA",
    images: [
      "/lust panama/PRINCIPAL lust.jpg",
      "/lust panama/lus (1).jpg",
      "/lust panama/lus (2).jpg",
      "/lust panama/lus (3).jpg",
      "/lust panama/lus (4).jpg",
      "/lust panama/lus (5).jpg",
      "/lust panama/lus (6).jpg",
    ],
  },
  "us-projec": {
    title: "US PROJEC",
    images: [
      "/us projec/PRINCIPAL US.jpg",
      "/us projec/US (1).jpg",
      "/us projec/US (2).jpg",
      "/us projec/US (3).jpg",
      "/us projec/US (4).jpg",
      "/us projec/US (5).jpg",
    ],
  },
  "concerts-party": {
    title: "CONCERTS & PARTY",
    images: [
      "/CONCERT&PARTY PESTAÑA/PRINCIPAL.jpg",
      "/CONCERT&PARTY PESTAÑA/6S5A4973.jpg",
      "/CONCERT&PARTY PESTAÑA/6S5A5254.jpg",
      "/CONCERT&PARTY PESTAÑA/6S5A7440.jpg",
      "/CONCERT&PARTY PESTAÑA/6S5A7537.jpg",
      "/CONCERT&PARTY PESTAÑA/6S5A7728.jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (3).jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT (8).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (10).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (11).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (12).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (13).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (14).jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT (18).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (21).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (22).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (23).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (24).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (25).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (31).jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT (33).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (36).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (51).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (59).jpg",
      "/CONCERT&PARTY PESTAÑA/by lit (60).jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6482.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6539.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6580.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6872.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6891.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6919.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-6943.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-7000.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-7063.jpg",
      "/CONCERT&PARTY PESTAÑA/BY LIT-7335.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0002.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0016.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0043.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0082.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0101.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0157.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0161.jpg",
      "/CONCERT&PARTY PESTAÑA/LIT_0184.jpg",
    ],
  },
};

// Get all campaign keys for navigation
const campaignKeys = Object.keys(campaignData);

export default function CampaignDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const campaign = name ? campaignData[name] : null;
  const currentIndex = name ? campaignKeys.indexOf(name) : -1;

  if (!campaign) {
    return (
      <div className="bg-[#2E2E2E] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#F2F2F2] text-4xl mb-4">Campaign Not Found</h1>
          <Link
            to="/"
            className="text-[#ffc000] text-xl hover:opacity-80 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const previousCampaign =
    currentIndex > 0 ? campaignKeys[currentIndex - 1] : null;
  const nextCampaign =
    currentIndex < campaignKeys.length - 1 ? campaignKeys[currentIndex + 1] : null;

  return (
    <div className="bg-[#2E2E2E] min-h-screen">
      <Header variant="dark" />

      {/* Campaign Header */}
      <section className="px-4 md:px-16 lg:px-36 pt-24 md:pt-32 pb-12 md:pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#ffc000] hover:opacity-80 transition-opacity mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-lg">Back to Portfolio</span>
        </Link>

        <h1 className="text-[#ffc000] text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-8">
          {campaign.title}
        </h1>
      </section>

      {/* Campaign Images Grid */}
      <section className="grid grid-cols-2 gap-4 px-4 md:px-16 lg:px-36 mb-12 md:mb-16">
        {campaign.images.map((image, index) => (
          <div key={index} className="rounded-lg">
            <img
              src={image}
              alt={`${campaign.title} image ${index + 1}`}
              className="w-full h-auto object-contain block hover:opacity-95 transition-opacity duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </section>

      {/* Navigation */}
      <section className="px-4 md:px-16 lg:px-36 py-12 md:py-16 flex items-center justify-between border-t border-[#444]">
        {previousCampaign ? (
          <Link
            to={`/campaign/${previousCampaign}`}
            className="flex items-center gap-4 text-[#F2F2F2] hover:text-[#ffc000] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-xl md:text-2xl font-bold lowercase">
              {campaignData[previousCampaign].title}
            </span>
          </Link>
        ) : (
          <div></div>
        )}
        {nextCampaign ? (
          <Link
            to={`/campaign/${nextCampaign}`}
            className="flex items-center gap-4 text-[#F2F2F2] hover:text-[#ffc000] transition-colors"
          >
            <span className="text-xl md:text-2xl font-bold lowercase">
              {campaignData[nextCampaign].title}
            </span>
            <ChevronRight className="w-6 h-6" />
          </Link>
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}
