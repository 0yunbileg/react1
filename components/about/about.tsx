"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Emma Johnson",
    role: "Head Baker",
    image: "/images/about/team/emma.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Liam Smith",
    role: "Pastry Chef",
    image: "/images/about/team/liam.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Sophia Brown",
    role: "Customer Relations",
    image: "/images/about/team/sophia.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#ab886d] p-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-[#fffbe9] rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Bakery</h1>
            <p className="text-lg">
              At Sweet Crust Bakery, we believe in baking with love and
              tradition. From artisanal breads to decadent pastries, every treat
              is crafted to perfection for our customers.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/about/bakery-hero.jpg"
              alt="Bakery"
              width={400}
              height={300}
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* Our Story */}
        <div className="flex bg-[#493628] !text-[#fffbe9] rounded-2xl p-8 shadow-lg flex-col md:flex-row items-center gap-6 mb-12">
          <div className="flex-1">
            <Image
              src="/images/about/our-story.jpg"
              alt="Our Story"
              width={800}
              height={400}
              className="rounded-2xl mb-6 object-cover shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg">
              Founded in 2010, Sweet Crust Bakery started as a small family-run
              bakery with a passion for creating fresh, high-quality baked
              goods. Over the years, we’ve grown, but our commitment to quality,
              creativity, and customer happiness has never wavered.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-[#fffbe9] rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Freshness & Quality: We use only the finest ingredients.</li>
              <li>
                Creativity: Every product is made with care and imagination.
              </li>
              <li>
                Community: We love serving our neighborhood and online
                customers.
              </li>
              <li>Customer Happiness: Your smile is our favorite reward.</li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src="/images/about/our-values.jpg"
              alt="Bakery"
              width={400}
              height={300}
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
        {/* Meet the Team */}
        <h2 className="text-3xl font-bold !mb-[30px] !text-[#fffbe9] text-center">
          Meet the Team
        </h2>
        <div className="text-[#fffbe9] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="shadow-lg flex flex-col items-center text-center bg-[#493628] rounded-xl p-4 hover:scale-105 transform transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover border-2 border-[#ab886d]"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm mb-3">{member.role}</p>
              <div className="flex gap-3 text-[#ab886d]">
                <a href={member.socials.facebook} target="_blank">
                  <FaFacebookF />
                </a>
                <a href={member.socials.instagram} target="_blank">
                  <FaInstagram />
                </a>
                <a href={member.socials.twitter} target="_blank">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
