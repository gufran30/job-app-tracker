"use client"
import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

import Link from "next/link";


export default function Home() {


  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32 bg-red-200">
          <div className="mx-auto max-w-4xl text-center bg-green-200">
            <h1 className="text-black mb-6 text-4xl md:text-6xl font-bold">
              A better way to track your job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-lg md:text-4xl">
              Capture, organize, and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start for free <ArrowRight className="ml-12" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">Free for ever. No credit card required.</p>
            </div>
          </div>
        </section>

        {/* Hero Images Section with Tabs */}
        <ImageTabs />


      </main>
    </div>
  );
}
