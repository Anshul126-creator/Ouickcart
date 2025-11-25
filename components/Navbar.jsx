"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast";

const Navbar = () => {

  const { isSeller, router } = useAppContext();
  const { isSignedIn } = useAuth();

  const handleAccountClick = () => {
    if (!isSignedIn) {
      toast.error("Please login first to access your account!", {
        duration: 3000,
        position: "top-center",
      });
      router.push('/sign-in');
      return;
    }
    router.push('/account');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      router.push('/');
      setTimeout(() => scrollToSection('about'), 100);
    } else {
      scrollToSection('about');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      router.push('/');
      setTimeout(() => scrollToSection('contact'), 100);
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <a href="#about" onClick={handleAboutClick} className="hover:text-gray-900 transition cursor-pointer">
          About Us
        </a>
        <a href="#contact" onClick={handleContactClick} className="hover:text-gray-900 transition cursor-pointer">
          Contact
        </a>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <button onClick={handleAccountClick} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        <button onClick={handleAccountClick} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
