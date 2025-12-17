import { Button } from "@/components/ui/button"
import { AppleIcon, CheckIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <Image
              src="/images/chatgpt-20image-20aug-2022-2c-202025-2c-2002-52-20-20pm.png"
              alt="IntervalAI Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">IntervalAI</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">Transform Words into Workouts</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              IntervalAI uses artificial intelligence to convert natural language descriptions into structured interval
              workouts for your Apple Watch. No more complex workout builders—just describe your training in plain
              English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] text-white hover:opacity-90 transition-opacity shadow-lg"
              >
                <AppleIcon className="size-5" />
                Download on App Store
              </Button>
            </div>
          </div>

          {/* App Screenshot Placeholders */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] aspect-[9/19] flex items-center justify-center text-white/60 text-sm p-4 text-center">
              Screenshot 1
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] aspect-[9/19] flex items-center justify-center text-white/60 text-sm p-4 text-center">
              Screenshot 2
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] aspect-[9/19] flex items-center justify-center text-white/60 text-sm p-4 text-center">
              Screenshot 3
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Describe Your Workout</h3>
              <p className="text-muted-foreground leading-relaxed">
                Type or dictate your workout plan naturally: &quot;5 minute warmup, then 8x400m at 5K pace with 90
                second recovery&quot;
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Review & Customize</h3>
              <p className="text-muted-foreground leading-relaxed">
                IntervalAI parses your description and creates a structured workout with intervals, pace zones, and
                alerts
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Send to Apple Watch</h3>
              <p className="text-muted-foreground leading-relaxed">
                With one tap, send your workout directly to Apple Watch using WorkoutKit integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Natural Language Parsing",
              description: "No need to learn complex workout syntax—just describe what you want",
            },
            {
              title: "Smart Pace Recognition",
              description: 'Automatically interprets pace zones like "5K pace," "marathon pace," "easy," "threshold"',
            },
            {
              title: "Custom Pace Settings",
              description: "Configure your personal VDOT zones and Critical Power calculations",
            },
            {
              title: "Workout Library",
              description: "Save unlimited workouts for future use with search and filter capabilities",
            },
            { title: "Apple Watch Integration", description: "Seamless WorkoutKit support for Apple Watch" },
            {
              title: "Flexible Goals",
              description: "Distance (meters), time (seconds), energy (calories), or open-ended workouts",
            },
            {
              title: "Multiple Alert Types",
              description: "Speed ranges, heart rate zones, cadence, and power targets",
            },
            {
              title: "Privacy First",
              description: "Your workout text is NOT stored on our servers—everything stays on your device",
            },
          ].map((feature, index) => (
            <div key={index} className="flex gap-4 bg-card rounded-lg p-6 border border-border">
              <div className="shrink-0">
                <CheckIcon className="size-6 text-[rgb(51,77,230)]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Description */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Perfect For</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "Distance runners training for races",
              "Coaches creating workout plans",
              "Athletes following structured training programs",
              "Anyone who wants to simplify workout creation",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckIcon className="size-5 text-[rgb(51,77,230)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Subscription Plans</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Free Tier</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>10 workout parses per minute</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>40 per day, 150 per month</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>Full access to all features</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>Unlimited saved workouts</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Premium</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>Unlimited workout parsing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>100/min, 1000/day, 10000/month</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon className="size-4 shrink-0 mt-0.5" />
                    <span>Early access to new features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Training Smarter Today</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Download IntervalAI and transform the way you create and manage your running workouts with the power of AI.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-br from-[rgb(51,77,230)] to-[rgb(102,51,204)] text-white hover:opacity-90 transition-opacity shadow-lg"
        >
          <AppleIcon className="size-5" />
          Download on App Store
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/chatgpt-20image-20aug-2022-2c-202025-2c-2002-52-20-20pm.png"
                alt="IntervalAI Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold">IntervalAI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <span>© 2025 IntervalAI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
