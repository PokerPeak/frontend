import React from "react";
import logo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightToLineIcon } from "lucide-react";
import { Faq } from "@/components/Faq";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Poker3dCard } from "@/components/Poker3dCard";

export default function Welcome() {
  const navigator = useNavigate();

  const token = localStorage.getItem("token");

  return (
    <div className="h-full relative p-3 dark bg-background min-h-screen">
      <div className="flex justify-between xl:px-20">
        <div className="flex gap-2">
          <div className="flex items-center justify-center">
            <img src={logo} className="w-[240px]" alt="" />
          </div>
        </div>
        {/* links */}
        <div className="flex space-x-14 text-[1.1rem] max-sm:hidden items-center">
          <Link to="/">Home</Link>
          <Link to="/home/tournament">Contest</Link>
          <Link to="/home/rooms">Rooms</Link>
          <Link to="/home/dashboard">DashBoard</Link>
        </div>
        <div className="flex items-center gap-4">
          {token === null ? (
            <>
              <Button
                className="p-1 px-7 rounded-[30px] border-2 border-[#110a02] hover:scale-x-105 transition-all ease-in-out"
                onClick={() => {
                  navigator("/signup");
                }}
              >
                Sign up
              </Button>
              <Button
                className="p-1 px-7 rounded-[30px] border-2  border-[#201509] hover:scale-x-105 transition-all ease-in-out"
                onClick={() => {
                  navigator("/login");
                }}
              >
                Log in
              </Button>
            </>
          ) : (
            <>
              <Link className="flex hover:text-pink-500" to="/home/dashboard">
                Go to DashBoard
                <ArrowRightToLineIcon className="ml-2" />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* main */}
      <main className="px-4 max-w-[1650px] pt-24 mx-auto">
        {/* container */}
        <div
          className="flex max-lg:flex-col  
         justify-between items-center"
        >
          {/* left */}
          <section className="flex flex-1 flex-col space-y-6 items-start">
            {/* play poker image */}
            <div className="w-full h-[250px] max-w-[460px]">
              <img
                src="/assets/playpoker.png"
                alt="Play Poker"
                className="w-full h-full"
              />
            </div>
            {/* description */}
            <p className="text-[#9c9c9c] pl-6 text-[1.1rem] lg:w-[90%]">
              Skill meets opportunity: Earn on the first Optimism poker game
            </p>
            {/* boxes */}
            <div className="flex w-full xl:w-[80%] gap-x-6 mt-6">
              <Faq />
            </div>
          </section>
          {/* right */}
          <div className="md:w-[600px] h-[700px] max-lg:w-full max-md:h-[500px]">
            {/* <img
              src='/assets/landing.png'
              alt='poker face'
              className='object-fill w-full h-full rounded-md shadow-xl'
            /> */}
            <Poker3dCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
