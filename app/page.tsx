import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-white" viewBox="0 -4.15 57.875 57.875" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_37" data-name="Group 37" transform="translate(-1209.722 -1357.465)"> <path id="Path_95" data-name="Path 95" d="M1224.729,1387.963v16.4l26.032-28.734Z" fill="#d1d3d4" stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path> <path id="Path_96" data-name="Path 96" d="M1228.118,1390.522l37.479-30.686-17.1,45.207Z" fill="#ffffff" stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path> <path id="Path_97" data-name="Path 97" d="M1211.722,1378.673l16.4,11.712,37.479-30.92Z" fill="#ffffff" stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path> </g> </g></svg>
            <span className="text-xl font-bold text-white">Vuelax</span>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <a href="#features" className="text-sm font-medium text-zinc-300 hover:text-white">
              Features
            </a>
            <a href="#insights" className="text-sm font-medium text-zinc-300 hover:text-white">
              Insights
            </a>
            <a href="#testimonials" className="text-sm font-medium text-zinc-300 hover:text-white">
              Testimonials
            </a>
            <Link href="/preferences" className="text-sm font-medium text-zinc-300 hover:text-white">
              Get Started
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden text-zinc-300 hover:text-white md:inline-flex">
              Log in
            </Button>
            <Button
              size="sm"
              className="hidden border border-white bg-black text-white hover:bg-zinc-900 md:inline-flex"
            >
              Sign up
            </Button>
            <Button variant="ghost" size="icon" className="text-white md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Smart Flight Preferences <br className="hidden md:inline" />
            <span className="text-zinc-400">Personalized Travel Experience</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 md:text-xl">
            Discover the easiest way to manage your flight preferences and get personalized recommendations for your
            next adventure. Never miss the perfect flight deal again.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/preferences">
              <Button size="lg" className="border border-white bg-white text-black hover:bg-zinc-200">
                Start Managing Preferences <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>
    </div>
  );
}
