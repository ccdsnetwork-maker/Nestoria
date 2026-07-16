import Link from "next/link";
import BackButton from "@/components/layout/BackButton";

const actions = [
  {
    title: "My Properties",
    icon: "🏠",
    description: "Manage properties you have listed on Nestoria.",
    link: "/properties/list",
  },
  {
    title: "My Requests",
    icon: "🔍",
    description: "Track properties you requested from Nestoria.",
    link: "/properties/request",
  },
  {
    title: "Interior Projects",
    icon: "🛋",
    description: "View your interior quotations and projects.",
    link: "/interiors/projects",
  },
  {
    title: "Saved Properties",
    icon: "❤️",
    description: "Access properties saved for later.",
    link: "/properties",
  },
  {
    title: "Messages",
    icon: "💬",
    description: "Chat with agents and Nestoria support.",
    link: "/messages",
  },
  {
    title: "Settings",
    icon: "⚙️",
    description: "Manage your account preferences.",
    link: "/profile",
  },
];


export default function Dashboard() {

  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <BackButton />

        <section className="mt-6 rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-md">

          <h1 className="text-4xl font-extrabold">
            Welcome Back To Nestoria
          </h1>

          <p className="mt-3 text-blue-100">
            Manage your properties, requests, interior projects and account.
          </p>

        </section>


        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md">

          <div className="flex flex-col gap-5 md:flex-row md:items-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-5xl">
              👤
            </div>

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                User Name
              </h2>

              <p className="text-gray-600">
                user@email.com
              </p>

              <p className="text-gray-600">
                Lagos, Nigeria
              </p>

            </div>

            <Link
              href="/profile"
              className="md:ml-auto rounded-lg bg-[#FFF700] px-6 py-3 text-center font-bold text-[#0B2E6B]"
            >
              Edit Profile
            </Link>

          </div>

        </section>


        <section className="mt-8 grid gap-5 md:grid-cols-4">

          <div className="rounded-xl bg-white p-5 shadow-md">
            <p className="text-3xl">✅</p>
            <h3 className="mt-3 font-bold text-[#0B2E6B]">
              Account
            </h3>
            <p className="text-gray-600">
              Verified
            </p>
          </div>


          <div className="rounded-xl bg-white p-5 shadow-md">
            <p className="text-3xl">🏠</p>
            <h3 className="mt-3 font-bold text-[#0B2E6B]">
              Properties
            </h3>
            <p className="text-gray-600">
              0 Listed
            </p>
          </div>


          <div className="rounded-xl bg-white p-5 shadow-md">
            <p className="text-3xl">🛋</p>
            <h3 className="mt-3 font-bold text-[#0B2E6B]">
              Interiors
            </h3>
            <p className="text-gray-600">
              0 Projects
            </p>
          </div>


          <div className="rounded-xl bg-white p-5 shadow-md">
            <p className="text-3xl">💬</p>
            <h3 className="mt-3 font-bold text-[#0B2E6B]">
              Messages
            </h3>
            <p className="text-gray-600">
              0 New
            </p>
          </div>

        </section>


        <section className="mt-10">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Dashboard Actions
          </h2>


          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {actions.map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#0B2E6B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

              </Link>

            ))}

          </div>

        </section>


      </div>

    </main>

  );

}
