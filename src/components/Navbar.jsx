import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setToggle(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full transition-all duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
        {/* Logo / Name */}
        <button
          type="button"
          onClick={() => {
            setActive("");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Saad logo"
            className="h-9 w-9 rounded-full object-cover"
          />

          <div className="flex flex-col items-start">
            <span className="text-[18px] font-bold text-white">
              Saad Ali
            </span>

            <span className="text-[11px] text-secondary">
              Software Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden list-none flex-row items-center gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <button
                type="button"
                onClick={() => handleNavClick(nav.id)}
                className={`text-[16px] font-medium transition-colors duration-200 ${
                  active === nav.id
                    ? "text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? "Close menu" : "Open menu"}
              className="h-7 w-7 object-contain"
            />
          </button>

          {toggle && (
            <div className="black-gradient absolute right-4 top-20 min-w-[160px] rounded-xl p-5 shadow-lg">
              <ul className="flex flex-col gap-5">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(nav.id)}
                      className={`w-full text-left text-[16px] font-medium ${
                        active === nav.id
                          ? "text-white"
                          : "text-secondary"
                      }`}
                    >
                      {nav.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

