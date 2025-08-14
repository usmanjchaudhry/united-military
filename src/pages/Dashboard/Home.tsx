// pages/Dashboard/Home.tsx
import PageMeta from "../../components/common/PageMeta";

const STRIPE_DONATE_URL = "https://your-stripe-checkout-link"; // ← paste your Stripe link

const impactPhotos = [
  {
    src: "/images/impact/group-boxing.jpg",
    title: "Group Boxing Class — Unity in Action",
    caption:
      "Youth and adults training side by side in an inclusive, empowering environment open to all ages and backgrounds.",
  },
  {
    src: "/images/impact/vets-recruits.jpg",
    title: "Veterans and Recruits Training Together",
    caption:
      "Collaboration with the U.S. Armed Forces Career Center in Lake Balboa: recruits prepare physically and mentally while veterans mentor them.",
  },
  {
    src: "/images/impact/women-workout.jpg",
    title: "Women’s Empowerment Workout",
    caption:
      "Confidence, health, and connection through supportive group fitness for women.",
  },
  {
    src: "/images/impact/youth-team.jpg",
    title: "Youth Boxing Team",
    caption:
      "Respect, discipline, and resilience—providing a safe space for kids who may not otherwise afford training.",
  },
  {
    src: "/images/impact/birthday.jpg",
    title: "Community Birthday Celebration",
    caption:
      "We celebrate life events for underserved kids, showing we care beyond the gym.",
  },
  {
    src: "/images/impact/certificates.jpg",
    title: "Certificates & Recognition Day",
    caption:
      "Graduation moments that honor commitment, responsibility, and achievement.",
  },
  {
    src: "/images/impact/coaches-leadership.jpg",
    title: "Coaches & Leadership Team",
    caption:
      "Passionate trainers and veteran leaders—many volunteers—creating real impact together.",
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
            <div className="flex items-center gap-4">
              {/* Replace with your real logo file */}
              <img
                src="/images/logo/ums-logo.svg"
                alt="United Military Sports logo"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                  United Military Sports
                </h1>
                <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-300">
                  “United Military For Healthier Tomorrow”
                </p>
              </div>
            </div>

            {/* The one and only donate button */}
            <a
              href={STRIPE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-hidden focus-visible:ring ring-indigo-500/30"
            >
              Donate
            </a>
          </div>
        </section>

        {/* About Us */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
            About Us
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              United Military Sports is a veteran‑founded nonprofit dedicated to
              empowering veterans, youth, women, individuals with chronic
              illnesses, and members of the community through fitness, wellness,
              and recovery programs.
            </p>
            <p>
              We proudly serve the greater Los Angeles area through partnerships
              with local gyms, including Showtime Boxing Gym, to provide access
              to physical training, mental health support, mentorship, and
              community‑based services.
            </p>
            <p>
              Our leadership team includes Emmanuel Salazar, a Purple Heart
              recipient and disabled veteran, who serves as our Chief Financial
              Officer (CFO) and community advocate.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
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
        </section>

        {/* Impact: photos + captions */}
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
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {p.title}
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {p.caption}
                  </p>
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

        {/* Donate or Partner With Us (info only; button is in Front Cover) */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
            Donate or Partner With Us
          </h2>

          <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              We are currently seeking <span className="font-medium">$10,000+</span> in
              donations to sustain and expand our services.
            </p>
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Ways to Donate:
              </h3>
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
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
            Contact Us
          </h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="text-gray-700 dark:text-gray-300">
              <p>Email: <span className="font-medium">unitedmilitarysports@gmail.com</span></p>
              <p>Phone: <span className="font-medium">(323) 536‑6771</span></p>
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
