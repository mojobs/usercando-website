import React from "react";

interface HamburgerProps {
  hamburgerValue: boolean;
  toggleNavbar(): void;
}

const Hamburger = ({ hamburgerValue, toggleNavbar }: HamburgerProps) => {
  const navBarData = [
    {text : "Home",
      image: "",
      route :""
    },
    {text : "How It Works",
      image: "",
      route :""
    },
    {text : "Pricing",
      image: "",
      route :""
    },
    {text : "FAQ",
      image: "",
      route :""
    },
    {text : "Blog",
      image: "",
      route :""
    },
  ]
  return (
    <div>
      <button onClick={toggleNavbar} className="p-2 z-50 relative">
        <img
          src={
            hamburgerValue
              ? "/icons/icons-close.svg"
              : "/icons/icons-menu-50.svg"
          }
          alt="Toggle menu"
          className="w-8 h-8"
        />
      </button>

      {/* Side Navigation */}
      {hamburgerValue && (
        <div className="fixed top-0 left-0 h-[50%] w-64 bg-background opacity-95 text-white shadow-lg z-40 p-6 space-y-4">
          {navBarData.map((data)=>(
                      <div><img src={data.image} alt="" /><a href={data.route} className="block text-lg font-medium">{data.text}</a></div>

          ))}
          
        </div>
      )}
    </div>
  );
};

export default Hamburger;
