import React from "react";

interface FooterProps {
  className?: string;
  handleMenuClick?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ className, handleMenuClick }) => {
  const menus = ["Home Page", "About", "Service", "Order", "Partnership", "Galery", "Contact Us"];

  const services = ["Hassle-free ordering", "Flexible Delivery", "Ready to export"];

  return (
    <footer className={`bg-[#234D32] text-white ${className || ""}`}>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-6">
        {/* Brand Info */}
        <div className="bg-white text-[#234D32] p-6 rounded-md shadow-md">
          <div className="flex gap-2 items-center">
            <img src="/images/hantara.svg" alt="" className="w-8 h-8" />
            <h2 className="text-2xl font-bold">HANTARA</h2>
          </div>
          <p className="italic mt-2 text-sm sm:text-base">"From the Earth, For the World."</p>
          <p className="mt-4 text-sm sm:text-base">Sentul - Bogor, Indonesia</p>

          <p className="mt-4 font-bold text-sm sm:text-base">
            WhatsApp:{" "}
            <a
              href="https://wa.me/6288809250032?text=Hello%20HANTARA%20%F0%9F%91%8B%0AI%20would%20like%20to%20place%20an%20order%20with%20the%20following%20details%3A%0A%0A%F0%9F%A7%91%20*Name%3A*%20%0A%F0%9F%8F%A0%20*Address%3A*%20%0A%F0%9F%93%A6%20*Product%3A*%20%0A%F0%9F%94%A2%20*Quantity%3A*%20%0A%E2%9C%8D%EF%B8%8F%20*Additional%20Notes%3A*%20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal hover:underline text-[#234D32]">
              0888 0925 0032
            </a>
          </p>

          <p className="font-bold text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:hantara@gmail.com" className="font-normal hover:underline">
              hantara@gmail.com
            </a>
          </p>
        </div>

        <div className="flex justify-start gap-14  md:justify-between">
          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {menus.map((menu, idx) => (
                <li key={idx} className="hover:underline cursor-pointer" onClick={() => handleMenuClick?.(menu)}>
                  {menu}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {services.map((service, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-500 text-center py-4 text-xs sm:text-sm md:text-base">
        © 2025 <span className="font-bold">HANTARA</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
