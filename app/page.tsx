"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  Activity,
  BookOpen,
  Github,
  ArrowRight,
  Lightbulb,
  FlaskConical,
  Dna,
  PersonStanding,
} from "lucide-react";

export default function LifeOutcomesPredictor() {
  const [bigFive, setBigFive] = useState({
    Openness: 50,
    Conscientiousness: 50,
    Extraversion: 50,
    Agreeableness: 50,
    Neuroticism: 50,
  });

  const [iq, setIq] = useState(100);
  const [showResults, setShowResults] = useState(false);

  const handleTraitChange = (trait: string, value: number[]) => {
    setBigFive((prev) => ({
      ...prev,
      [trait]: value[0],
    }));
  };

  const handleIqChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setIq(value);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const resetForm = () => {
    setBigFive({
      Openness: 50,
      Conscientiousness: 50,
      Extraversion: 50,
      Agreeableness: 50,
      Neuroticism: 50,
    });
    setIq(100);
    setShowResults(false);
  };

  // Prediction functions converted from Python to JavaScript
  const predictJobPerformance = () => {
    return (
      0.4 * bigFive.Conscientiousness +
      0.2 * bigFive.Extraversion -
      0.1 * bigFive.Neuroticism +
      0.5 * (iq / 15) +
      10
    );
  };

  const predictAcademicAchievement = () => {
    return (
      0.6 * (iq / 15) +
      0.3 * bigFive.Conscientiousness -
      0.2 * bigFive.Neuroticism +
      5
    );
  };

  const predictHealthOutcome = () => {
    return (
      0.3 * (iq / 15) +
      0.4 * bigFive.Conscientiousness -
      0.3 * bigFive.Neuroticism +
      50
    );
  };

  const predictIncome = () => {
    return (
      (0.5 * (iq / 15) +
        0.3 * bigFive.Conscientiousness +
        0.1 * bigFive.Openness) *
        1000 +
      20000
    );
  };

  const predictRelationshipStability = () => {
    return (
      0.5 * bigFive.Agreeableness +
      0.3 * bigFive.Conscientiousness -
      0.4 * bigFive.Neuroticism +
      20
    );
  };

  const traitDescriptions = {
    Openness:
      "Appreciation for art, emotion, adventure, unusual ideas, curiosity, and variety of experience.",
    Conscientiousness:
      "Tendency to be organized and dependable, show self-discipline, act dutifully, aim for achievement, and prefer planned rather than spontaneous behavior.",
    Extraversion:
      "Energy, positive emotions, assertiveness, sociability and the tendency to seek stimulation in the company of others.",
    Agreeableness:
      "Tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others.",
    Neuroticism:
      "Tendency to experience unpleasant emotions easily, such as anger, anxiety, depression, and vulnerability.",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              <span className="">Life Outcomes</span>
            </div>
            <Link href="/methodology">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Methodology
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h1 className="text-3xl md:text-5xl tracking-tight mb-6">
              Predict life outcomes with
              <span className="text-primary"> scientific accuracy</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based on decades of psychological research linking personality
              traits and IQ to life outcomes. Takes about 5 minutes to complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() =>
                  document
                    .getElementById("calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link href="https://github.com/nicoceron/life-outcomes-predictor">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="w-full max-w-[280px] shadow-lg border-none">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-violet-50 w-12 h-12 flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-violet-500" />
                  </div>
                  <h3 className="font-medium mb-2">Open Source</h3>
                  <p className="text-sm text-muted-foreground">
                    This is an open source project under MIT-license.
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-[280px] shadow-lg border-none">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-violet-50 w-12 h-12 flex items-center justify-center mb-4">
                    <FlaskConical className="h-6 w-6 text-violet-500" />
                  </div>
                  <h3 className="font-medium mb-2">Scientific</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on peer-reviewed research and meta-analyses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Existing calculator content */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PersonStanding className="h-5 w-5" />
                  Big Five Personality Traits
                </CardTitle>
                <CardDescription>
                  Rate yourself on each trait from 0 to 100
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(bigFive).map(([trait, value]) => (
                  <div key={trait} className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor={trait}>{trait}</Label>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                    <Slider
                      id={trait}
                      min={0}
                      max={100}
                      step={1}
                      value={[value]}
                      onValueChange={(val) => handleTraitChange(trait, val)}
                    />
                    <p className="text-sm text-muted-foreground">
                      {
                        traitDescriptions[
                          trait as keyof typeof traitDescriptions
                        ]
                      }
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dna className="h-5 w-5" />
                  IQ Score
                </CardTitle>
                <CardDescription>
                  Enter your IQ score (average is 100)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    value={iq}
                    onChange={handleIqChange}
                    min="1"
                    className="max-w-[200px]"
                  />
                  <span className="text-sm text-muted-foreground">
                    {iq < 85
                      ? "Below Average"
                      : iq < 115
                      ? "Average"
                      : iq < 130
                      ? "Above Average"
                      : iq < 145
                      ? "Superior"
                      : "Very Superior"}
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 mb-8">
              <Button size="lg" onClick={calculateResults}>
                Calculate Predictions
              </Button>
              <Button variant="outline" size="lg" onClick={resetForm}>
                Reset
              </Button>
            </div>

            {/* Rest of the existing results section */}
            {showResults && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Your Predicted Outcomes
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                  <Card className="w-full max-w-[340px]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        Job Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {predictJobPerformance().toFixed(2)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Driven by Conscientiousness, IQ, and Extraversion
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="w-full max-w-[340px]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        Academic Achievement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {predictAcademicAchievement().toFixed(2)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Strongly influenced by IQ and Conscientiousness
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="w-full max-w-[340px]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Health Outcome
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {predictHealthOutcome().toFixed(2)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Higher IQ and Conscientiousness predict better health
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="w-full max-w-[340px]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Annual Income
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        ${predictIncome().toFixed(2)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        IQ is a key predictor, with a boost from
                        Conscientiousness
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="w-full max-w-[700px]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        Relationship Stability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {predictRelationshipStability().toFixed(2)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Mainly driven by Agreeableness, Conscientiousness, and
                        low Neuroticism
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    These predictions are based on statistical correlations and
                    should be interpreted as general tendencies rather than
                    definitive outcomes. Many other factors influence life
                    outcomes beyond personality traits and IQ.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Scientific Basis</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This predictor is based on peer-reviewed research showing
                    correlations between personality traits, IQ, and life
                    outcomes:
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      • <strong>Job Performance:</strong> Meta-analyses show
                      Conscientiousness (r≈0.20-0.23) and IQ (r≈0.40-0.59) are
                      strong predictors of work performance (Barrick & Mount,
                      1991; Nye et al., 2022).
                    </p>
                    <p>
                      • <strong>Academic Achievement:</strong> IQ explains ~54%
                      of variance in educational outcomes, while
                      Conscientiousness shows medium effects (r≈0.24) (Zaboski
                      et al., 2018; Poropat, 2009).
                    </p>
                    <p>
                      • <strong>Health:</strong> Higher Conscientiousness and
                      lower Neuroticism predict better health outcomes and
                      longevity (Jokela et al., 2013; Calvin et al., 2017).
                    </p>
                    <p>
                      • <strong>Income:</strong> IQ correlates with earnings
                      (r≈0.38-0.41), with each standard deviation increase
                      boosting income by ~21% (Marks, 2023).
                    </p>
                    <p>
                      • <strong>Relationship Stability:</strong> Agreeableness
                      (r≈-0.18) and Conscientiousness (r≈-0.13) negatively
                      correlate with divorce risk, while Neuroticism (r≈0.17)
                      increases it (Roberts et al., 2007).
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <Link href="/methodology" className="underline">
                      Learn more about our methodology and research
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Life Predictor. Based on peer-reviewed
            psychological research.
          </p>
          <p className="mt-2">
            <Link
              href="/methodology"
              className="underline hover:text-foreground"
            >
              Learn more about our methodology
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
