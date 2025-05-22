import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, BarChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-400/30 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.5)]">
        <div className="container flex h-24 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.5)] glow-blue-animate">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A__2_-removebg-preview-ZabQoiu2niiPHLJlKWKnvBDhqIBgyh.png"
                alt="TrueClaim Logo"
                className="h-20 w-auto drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              />
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-lg font-medium text-white hover:text-blue-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:glow-white"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-lg font-medium text-white hover:text-blue-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:glow-white"
            >
              Benefits
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium text-white hover:text-blue-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:glow-white"
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-white hover:text-blue-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:glow-white"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base px-6 py-6 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              Log In
            </Button>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 text-base px-6 py-6 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-36 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/30 mix-blend-overlay blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-300/30 mix-blend-overlay blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(25,118,210,0.4)_0%,transparent_70%)]"></div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block rounded-lg bg-blue/10 backdrop-blur-sm px-4 py-2 text-base text-white font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse-slow">
                  Transforming Insurance Claims
                </div>
                <h1 className="font-montserrat text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-white text-glow-lg">
                  <span>Trueclaim</span>
                  <br />
                  Your Partner in Insurance Claims
                </h1>
                <p className="text-xl text-blue-100 max-w-[600px] text-glow-sm">
                  Our platform TrueClaim Intel leverages Generative AI to resolve claims in minutes, reduce fraud, and
                  deliver real-time transparency. It's not just automation—it's a leap in trust, speed, and accuracy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 h-14 px-8 text-lg shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-105">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-14 px-8 text-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 text-sm border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      JD
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-700 text-sm border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      MR
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white text-sm border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      KL
                    </div>
                  </div>
                  <span className="text-base font-medium text-blue-100 text-glow-sm">
                    Trusted by 200+ insurance companies
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-400/40 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-300/40 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.4)] border-4 border-white/20 transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,255,255,0.6)] hover:scale-[1.02] glow-blue-animate">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                    alt="TrueClaim Intel Dashboard"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Banner Section */}
        <section className="py-16 bg-gradient-to-b from-blue-700 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-white mb-8 text-center text-glow-md">Our Platform</h2>
              <div className="flex justify-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.4)] glow-blue-animate">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A__2_-removebg-preview-ZabQoiu2niiPHLJlKWKnvBDhqIBgyh.png"
                  alt="TrueClaim Logo"
                  className="h-40 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse-slow"
                />
              </div>
              <p className="mt-8 text-xl text-center text-blue-100 font-medium max-w-3xl text-glow-md">
                Faster settlements! Smarter decisions! Happier customers!
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-montserrat text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow-lg">
                The TrueClaim Advantage
              </h2>
              <p className="mt-4 text-lg text-blue-100 text-glow-sm">
                Experience the future of insurance claims processing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-white/20 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] glow-blue-animate">
                <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.4)] glow-white-animate">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-glow-md">Faster Settlements</h3>
                <p className="text-blue-100 text-glow-sm">
                  Process claims up to 80% faster with our AI-powered system, reducing settlement time from weeks to
                  minutes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-white/20 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] glow-blue-animate">
                <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.4)] glow-white-animate">
                  <BarChart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-glow-md">Smarter Decisions</h3>
                <p className="text-blue-100 text-glow-sm">
                  Our AI analyzes thousands of data points to make accurate, consistent, and fair claim assessments.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-white/20 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] glow-blue-animate">
                <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.4)] glow-white-animate">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-glow-md">Happier Customers</h3>
                <p className="text-blue-100 text-glow-sm">
                  Transparent, fast processing leads to higher customer satisfaction and improved retention rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-blue-400 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-5 -left-5 w-full h-full bg-blue-600 rounded-2xl transform rotate-3 shadow-[0_0_30px_rgba(37,99,235,0.5)]"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.6)] border-4 border-white glow-blue-animate">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                      alt="Insurance professionals using TrueClaim"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <h2 className="font-montserrat text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-6 drop-shadow-[0_0_10px_rgba(30,64,175,0.3)]">
                    Reimagine the Claims Experience
                  </h2>
                  <p className="text-lg text-blue-700 mb-8">
                    TrueClaim Intel is a comprehensive platform that transforms every aspect of the insurance claims
                    process.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4 bg-blue-100/80 backdrop-blur-sm p-4 rounded-xl hover:bg-blue-100 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700">AI-Powered Fraud Detection</h3>
                      <p className="text-blue-600">
                        Identify potentially fraudulent claims with 99.8% accuracy using advanced pattern recognition.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-blue-100/80 backdrop-blur-sm p-4 rounded-xl hover:bg-blue-100 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700">Automated Document Processing</h3>
                      <p className="text-blue-600">
                        Extract, validate, and organize claim documentation automatically, eliminating manual data
                        entry.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-blue-100/80 backdrop-blur-sm p-4 rounded-xl hover:bg-blue-100 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700">Real-Time Transparency</h3>
                      <p className="text-blue-600">
                        Provide customers with instant updates and clear visibility into their claim status.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-blue-100/80 backdrop-blur-sm p-4 rounded-xl hover:bg-blue-100 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700">Intelligent Claim Routing</h3>
                      <p className="text-blue-600">
                        Automatically assign claims to the right adjusters based on expertise and workload.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-montserrat text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl drop-shadow-[0_0_10px_rgba(30,64,175,0.3)]">
                How TrueClaim Intel Works
              </h2>
              <p className="mt-4 text-lg text-blue-700">
                Our platform seamlessly integrates with your existing systems to transform your claims process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-blue-400 glow-blue-sm md:hidden"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-200 h-full hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:-right-4 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    1
                  </div>
                  <div className="absolute hidden md:block top-1/2 -translate-y-1/2 -right-12 h-px w-8 bg-blue-400 glow-blue-sm"></div>
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Claim Submission</h3>
                  <p className="text-blue-600 mb-4">
                    Claims are submitted through our intuitive portal or API, with immediate validation and
                    acknowledgment.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] glow-blue-animate">
                    <img
                      src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop"
                      alt="Claim Submission Process"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-blue-400 glow-blue-sm md:hidden"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-200 h-full hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:-right-4 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    2
                  </div>
                  <div className="absolute hidden md:block top-1/2 -translate-y-1/2 -right-12 h-px w-8 bg-blue-400 glow-blue-sm"></div>
                  <h3 className="text-xl font-bold text-blue-700 mb-4">AI Analysis</h3>
                  <p className="text-blue-600 mb-4">
                    Our AI engine analyzes the claim, verifies policy coverage, and assesses risk factors in real-time.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] glow-blue-animate">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                      alt="AI Analysis Dashboard"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-blue-400 glow-blue-sm md:hidden"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-200 h-full hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:-right-4 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Resolution & Payment</h3>
                  <p className="text-blue-600 mb-4">
                    Claims are processed, approved, and payments are issued automatically for straightforward cases.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] glow-blue-animate">
                    <img
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop"
                      alt="Payment Processing"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-600 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.5)] p-8 md:p-12 text-white glow-blue-animate">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.5)] glow-white-animate">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                      alt="Sarah Johnson, CIO at National Insurance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <svg
                      className="h-12 w-12 text-blue-300 mb-4 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl text-blue-100 mb-6 text-glow-sm">
                      "TrueClaim Intel has revolutionized our claims department. We've reduced processing time by 75%
                      while improving accuracy. Our customers are happier, and our adjusters can focus on complex cases
                      that truly need human expertise."
                    </p>
                    <div>
                      <h4 className="font-bold text-white text-xl text-glow-md">Sarah Johnson</h4>
                      <p className="text-blue-200 text-lg text-glow-sm">CIO at National Insurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/20 mix-blend-overlay blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-300/20 mix-blend-overlay blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="font-montserrat text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow-lg">
                  Ready to Transform Your Claims Process?
                </h2>
                <p className="text-xl text-blue-100 text-glow-sm">
                  Join the 200+ insurance companies already benefiting from TrueClaim Intel. Schedule a demo today and
                  see the difference for yourself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 h-14 px-8 text-lg shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-105">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700/50 h-14 px-8 text-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.4)] glow-blue-animate">
                <h3 className="text-2xl font-bold text-blue-700 mb-6 drop-shadow-[0_0_10px_rgba(30,64,175,0.3)]">
                  Get in Touch
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-12 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0_0_10px_rgba(37,99,235,0.2)] focus:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-12 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0_0_10px_rgba(37,99,235,0.2)] focus:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0_0_10px_rgba(37,99,235,0.2)] focus:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      id="company"
                      className="flex h-12 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0_0_10px_rgba(37,99,235,0.2)] focus:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      placeholder="Insurance Co."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0_0_10px_rgba(37,99,235,0.2)] focus:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 h-12 text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-blue-700 text-white py-12 shadow-[0_0_30px_rgba(30,64,175,0.3)]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.5)] glow-blue-animate">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A__2_-removebg-preview-ZabQoiu2niiPHLJlKWKnvBDhqIBgyh.png"
                alt="TrueClaim Logo"
                className="h-24 w-auto drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              />
            </div>
            <p className="text-lg text-blue-200 max-w-2xl text-center text-glow-sm">
              Transforming insurance claims processing with efficiency, accuracy, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-6 text-xl text-white text-glow-md">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white text-base hover:text-glow-sm transition-all duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white text-base hover:text-glow-sm transition-all duration-300"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white text-base hover:text-glow-sm transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl text-white text-glow-md">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white text-base hover:text-glow-sm transition-all duration-300"
                  >
                    Claims Verification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white text-base hover:text-glow-sm transition-all duration-300"
                  >
                    Expedited Processing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white text-base hover:text-glow-sm transition-all duration-300"
                  >
                    Compliance Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl text-white text-glow-md">Contact</h3>
              <ul className="space-y-4">
                <li className="text-blue-200 text-base">123 Business Avenue, Suite 500</li>
                <li className="text-blue-200 text-base">Chicago, IL 60601</li>
                <li className="text-blue-200 text-base">info@trueclaim.com</li>
                <li className="text-blue-200 text-base">+1 (800) 555-1234</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-300 text-glow-sm">© 2024 TrueClaim. All rights reserved.</p>
            <nav className="flex gap-8 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm hover:underline text-blue-300 hover:text-white hover:text-glow-sm transition-all duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline text-blue-300 hover:text-white hover:text-glow-sm transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline text-blue-300 hover:text-white hover:text-glow-sm transition-all duration-300"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
