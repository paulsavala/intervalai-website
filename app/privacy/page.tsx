import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/chatgpt-20image-20aug-2022-2c-202025-2c-2002-52-20-20pm.png"
              alt="IntervalAI Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">IntervalAI</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeftIcon className="size-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="bg-muted/50 border border-border rounded-lg p-8 mb-8">
            <p className="text-muted-foreground italic m-0">
              Your privacy policy content will be added here. This section will contain details about how IntervalAI
              collects, uses, and protects your data.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Highlights</h2>
              <ul className="space-y-2 leading-relaxed">
                <li>Your workout text is NOT stored on our servers</li>
                <li>All workout data is saved locally on your device</li>
                <li>Secure device authentication</li>
                <li>No account creation required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us.</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
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
