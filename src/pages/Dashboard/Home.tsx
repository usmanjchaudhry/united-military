// pages/Dashboard/Home.tsx
import PageMeta from "../../components/common/PageMeta";

// Imported assets (from /public/images)
import Logo2 from "../../../public/images/Logo2.jpg";
import GroupPhoto from "../../../public/images/groupPhoto.jpg";
import GroupPhoto2 from "../../../public/images/groupPhoto2.jpg";
import SergeTshirt from "../../../public/images/SergeTshirt.jpg";
import WheelChair from "../../../public/images/wheelChair.jpg";

// Stripe Payment Link — donors choose the amount on Stripe
const STRIPE_DONATE_URL = "https://buy.stripe.com/dRm9AU2O81YUcRYfHc2VG00";

// --- Helper to normalize image size ---
type ImageRatio = "square" | "4/3" | "16/9" | "21/9";
type FramedImageProps = {
  src: string;
  alt: string;
  ratio?: ImageRatio;    // default 4:3 across the site
  contain?: boolean;     // true = show full image (letterbox as needed)
  className?: string;
  imgClassName?: string; // optional per-image object-position adjustments
  eager?: boolean;
};
const FramedImage = ({
  src,
  alt,
  ratio = "4/3",
  contain = false,
  className = "",
  imgClassName = "",
  eager = false,
}: FramedImageProps) => {
  const ratioClass =
    ratio === "square"
      ? "aspect-square"
      : ratio === "16/9"
      ? "aspect-[16/9]"
      : ratio === "21/9"
      ? "aspect-[21/9]"
      : "aspect-[4/3]";
  const fit = contain ? "object-contain" : "object-cover";
  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${ratioClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${fit} object-center ${imgClassName}`}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
};

// Impact gallery
const impactPhotos = [
  {
    src: GroupPhoto,
    title: "Group Boxing Class — Unity in Action",
    caption:
      "Youth and adults training side by side in an inclusive, empowering environment open to all ages and backgrounds.",
  },
  {
    src: GroupPhoto2,
    title: "Youth Boxing Team",
    caption:
      "Respect, discipline, and resilience—providing a safe space for kids who may not otherwise afford training.",
  },
  {
    src: WheelChair,
    title: "Adaptive Training & Recovery",
    caption:
      "Trauma‑informed, inclusive training that supports people with chronic illnesses and mobility needs.",
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="United Military Sports — United Military For Healthier Tomorrow"
        description="Veteran‑founded nonprofit empowering veterans, youth, women, people with chronic illnesses, and the community through fitness, wellness, and recovery programs in Greater Los Angeles."
      />

      <div className="space-y-10 md:space-y-12">
        {/* Front Cover */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                United Military Sports
              </h1>
              <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-300">
                “United Military For Healthier Tomorrow”
              </p>
            </div>

            {/* One Donate button only (Stripe Payment Link) */}
            <a
              href={STRIPE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate via Stripe (opens in a new tab)"
className="inline-flex items-center rounded-lg bg-rose-600 px-5 py-3 text-sm font-medium text-white hover:bg-rose-700 focus:outline-hidden focus-visible:ring-2 ring-rose-500/30 transition-colors"
            >
              Donate
            </a>
          </div>
        </section>

        {/* Logo only (no wrappers; full image shown, no crop) */}
        <img
          src={Logo2}
          alt="United Military Sports logo"
          className="block mx-auto w-[clamp(20rem,45vw,48rem)] max-w-full h-auto select-none"
          loading="eager"
          draggable="false"
        />

        {/* About Us (text + single image) */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
                About Us
              </h2>
              <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  United Military Sports is a veteran‑founded nonprofit dedicated to empowering
                  veterans, youth, women, individuals with chronic illnesses, and members of the
                  community through fitness, wellness, and recovery programs.
                </p>
                <p>
                  We proudly serve the greater Los Angeles area through partnerships with local gyms,
                  including Showtime Boxing Gym, to provide access to physical training, mental health
                  support, mentorship, and community‑based services.
                </p>
                <p>
                  Our leadership team includes Emmanuel Salazar, a Purple Heart recipient and disabled
                  veteran, who serves as our Chief Financial Officer (CFO) and community advocate.
                </p>
              </div>
            </div>

            {/* Single image beside the text.
               Use contain to show full photo if needed; switch to cover for edge-to-edge. */}
            <div className="md:self-center">
              <FramedImage
                src={GroupPhoto}
                alt="Inclusive training with youth and veterans"
                className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] xl:aspect-[16/9]"
                // For no cropping, uncomment the next line:
                // contain
                // To reframe the crop (when using cover), tweak the focal point:
                // imgClassName="object-[50%_35%]"
              />
            </div>
          </div>
        </section>

        {/* Mission (with supporting photo) */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
                Our Mission
              </h2>
              <ul className="mt-4 grid list-disc gap-2 pl-5 text-gray-700 dark:text-gray-300 sm:grid-cols-2">
                <li>Foster physical and mental resilience</li>
                <li>Support veterans transitioning to civilian life</li>
                <li>Empower youth and troubled teens</li>
                <li>Promote healthy habits and self‑discipline</li>
                <li>Provide trauma‑informed training and mentorship</li>
                <li>Reduce isolation for people with chronic illnesses</li>
                <li>Build stronger, healthier communities</li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <FramedImage
                src={SergeTshirt}
                alt="Coach and leadership supporting the mission"
                // If the subject is high in frame, nudge focus:
                // imgClassName="object-[50%_30%]"
              />
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
            Our Impact
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactPhotos.map((p) => (
              <figure
                key={p.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <FramedImage src={p.src} alt={p.title} />
                <figcaption className="p-4">
                  <div className="font-medium text-gray-900 dark:text-white">{p.title}</div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Why Sponsor Us */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
            Why Sponsor Us?
          </h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Your support directly funds:
              </h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Free programs for veterans and youth</li>
                <li>Rent and utilities at our partnered gym</li>
                <li>Equipment, gear, and safety supplies</li>
                <li>Salaries for trainers and coaches</li>
                <li>Community outreach and fundraising events</li>
                <li>Mental health and recovery resources</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Sponsors receive:
              </h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Logo placement on event banners and flyers</li>
                <li>Social media shout‑outs and recognition</li>
                <li>Tax‑deductible donation acknowledgment</li>
                <li>Community impact report and photos</li>
                <li>Media partnership and promotion opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Donate/Partner Info */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
            Donate or Partner With Us
          </h2>

          <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              We are currently seeking <span className="font-medium">$10,000+</span> in donations to
              sustain and expand our services.
            </p>
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">Ways to Donate:</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>One‑time or monthly contribution</li>
                <li>In‑kind equipment or gear</li>
                <li>Sponsor a specific program or event</li>
                <li>Fundraise with your company or group</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">Contact Us</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="text-gray-700 dark:text-gray-300">
              <p>
                Email: <span className="font-medium">unitedmilitarysports@gmail.com</span>
              </p>
              <p>
                Phone: <span className="font-medium">(323) 536‑6771</span>
              </p>
              <p>Website coming soon!</p>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <p>Location: Lake Balboa / Encino, California</p>
              <p>Serving the Greater Los Angeles area</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
