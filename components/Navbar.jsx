import React, { useState } from 'react';
import Logo from '@/assets/Cake-Logotype-Black.png';
import Image from 'next/image';
import ColoredHamBurger from '@/assets/burger-menu-colored.svg';
import WhiteHamBurger from '@/assets/burger-menu-white.svg';

const Navbar = ({ hasScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full group ">
      <div className="max-w-[1340px] py-[10px] justify-between z-10 h-[78.8px] mx-auto w-[90%] flex items-center sticky top-0">
        <div className="w-fit flex items-center">
          <Image
            src={Logo}
            alt="logo"
            width={90}
            className="w-[90px] bg-transparent"
          />
          <div className="items-center hidden small-lg:flex pl-[20px] text-[#222]  text-[0.875rem] leading-[1.3]">
            <p className="py-[30px] px-[15px] ">Product</p>
            <p className="py-[30px] px-[15px] ">About</p>
            <p className="py-[30px] px-[15px] ">Features</p>
            <p className="py-[30px] px-[15px] ">Pricing</p>
          </div>
        </div>
        <div className="hidden md:flex gap-[10px] ">
          <button className="bg-transparent hover:text-white mr-[5px] hover:bg-primary pt-[9px] pb-[8px] px-5 text-[#242424] text-[0.875rem] leading-[110%] font-medium rounded-[12px]">
            Login
          </button>
          <button className="  mr-[5px] bg-gray hover:bg-secondary-gray pt-[9px] pb-[8px] px-5 text-secondary-text text-[0.875rem] leading-[110%] font-medium rounded-[12px]">
            Talk to Sales
          </button>
          <button className="bg-primary text-white mr-[5px] hover:bg-secondary hover:text-secondary-text pt-[9px] pb-[8px] px-5  text-[0.875rem] leading-[110%] font-medium rounded-[12px]">
            Get started free
          </button>
        </div>
        <div
          className={`h-[62px] w-[62px] flex items-center justify-center overflow-hidden small-lg:hidden rounded-[10px] ${
            isMenuOpen && 'bg-primary'
          }`}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
            <Image
              src={isMenuOpen ? WhiteHamBurger : ColoredHamBurger}
              alt="logo"
              className="w-8"
            />
          </button>
        </div>
      </div>
      <div
        className={`absolute transition-all duration-200 ${
          (hasScrolled && 'opacity-[100%]') ||
          (isMenuOpen && 'opacity-[100%]') ||
          'group-hover:opacity-[100%]'
        } ease-in-out top-0  opacity-0 w-full  h-[78.8px] bg-[#F2F2F2]`}></div>
    </div>
  );
};

export default Navbar;
