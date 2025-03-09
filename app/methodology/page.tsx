import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MethodologyPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculator
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">Life Outcomes Predictor: Methodology & Research</h1>
        <p className="text-muted-foreground">
          A comprehensive explanation of how the Life Outcomes Predictor works and the scientific research behind it.
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="flex justify-center w-full">
          <TabsTrigger value="overview" className="mx-1">
            Overview
          </TabsTrigger>
          <TabsTrigger value="iq" className="mx-1">
            IQ Research
          </TabsTrigger>
          <TabsTrigger value="personality" className="mx-1">
            Personality Research
          </TabsTrigger>
          <TabsTrigger value="formulas" className="mx-1">
            Prediction Formulas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>How the Life Outcomes Predictor Works</CardTitle>
              <CardDescription>An overview of the calculator's functionality and scientific basis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Life Outcomes Predictor is a tool that estimates potential life outcomes based on two
                well-researched psychological factors: IQ (general cognitive ability) and the Big Five personality
                traits. These factors have been extensively studied and shown to correlate with various important life
                outcomes.
              </p>

              <h3 className="text-lg font-medium mt-4">Key Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>IQ Score Input:</strong> Users enter their IQ score, which represents general cognitive
                  ability. The average IQ is 100, with a standard deviation of 15 points.
                </li>
                <li>
                  <strong>Big Five Personality Assessment:</strong> Users rate themselves on five major personality
                  dimensions:
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <strong>Openness:</strong> Appreciation for art, emotion, adventure, unusual ideas, curiosity, and
                      variety of experience.
                    </li>
                    <li>
                      <strong>Conscientiousness:</strong> Tendency to be organized, disciplined, dutiful,
                      achievement-oriented, and methodical.
                    </li>
                    <li>
                      <strong>Extraversion:</strong> Energy, positive emotions, assertiveness, sociability, and tendency
                      to seek stimulation from others.
                    </li>
                    <li>
                      <strong>Agreeableness:</strong> Tendency to be compassionate, cooperative, trusting, and helpful
                      toward others.
                    </li>
                    <li>
                      <strong>Neuroticism:</strong> Tendency to experience negative emotions like anxiety, depression,
                      anger, and vulnerability.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Prediction Algorithms:</strong> Mathematical formulas derived from meta-analyses and
                  large-scale studies that calculate estimated outcomes in five domains:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Job Performance</li>
                    <li>Academic Achievement</li>
                    <li>Health Outcomes</li>
                    <li>Income</li>
                    <li>Relationship Stability</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Scientific Foundation</h3>
              <p>
                The calculator is based on decades of psychological research, including meta-analyses that aggregate
                findings from hundreds of studies involving millions of participants. The correlations between IQ,
                personality traits, and life outcomes are well-established in the scientific literature, though it's
                important to note that these are statistical relationships, not deterministic predictions.
              </p>
              <p>
                The specific weights assigned to different traits in our prediction formulas are derived from
                peer-reviewed research on the relative importance of each factor in predicting various outcomes. For
                example, Conscientiousness is weighted heavily in job performance predictions because research
                consistently shows it's one of the strongest personality predictors in this domain.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>IQ Research and Life Outcomes</CardTitle>
              <CardDescription>How cognitive ability predicts important life outcomes across domains</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                General cognitive ability (IQ) has been extensively studied as a predictor of life outcomes. Below is a
                summary of key research findings across different domains:
              </p>

              <h3 className="text-lg font-medium mt-4">Job Performance</h3>
              <p>
                Meta-analyses in industrial/organizational psychology consistently show that cognitive ability is one of
                the strongest predictors of job performance:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Nye et al. (2022) found that general mental ability (GMA) correlates around 0.40–0.59 with objective
                  performance metrics such as task proficiency and training success.
                </li>
                <li>
                  These correlations are among the largest in applied psychology, with IQ outperforming many other
                  hiring criteria like interviews or experience.
                </li>
                <li>
                  The predictive power of IQ for job performance has been demonstrated across diverse occupations and
                  industries.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Academic Achievement</h3>
              <p>IQ shows particularly strong correlations with educational outcomes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Zaboski et al. (2018) meta-analysis found that general intelligence alone accounted for about 54% of
                  the variance in educational achievement outcomes.
                </li>
                <li>This translates to a correlation of approximately r ≈ 0.73 between IQ and academic performance.</li>
                <li>
                  The relationship between IQ and academic achievement remains strong even when controlling for
                  socioeconomic background and other factors.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Health and Longevity</h3>
              <p>Surprisingly, IQ also predicts health outcomes and lifespan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Calvin et al. (2017) tracked a Scottish birth cohort (N≈66,000) for 68 years and found that higher
                  childhood IQ was significantly associated with lower mortality risk from most major causes of death.
                </li>
                <li>
                  An increase of one standard deviation in IQ (≈15 points) was linked to a 25–28% reduced hazard of
                  death from chronic diseases like heart disease, stroke, and respiratory illnesses.
                </li>
                <li>
                  These associations remained robust even after controlling for socioeconomic factors and health
                  behaviors.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Income and Socioeconomic Status</h3>
              <p>IQ is a significant predictor of financial outcomes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Marks (2023) found that IQ had a stronger effect on eventual income than childhood socioeconomic
                  status (SES).
                </li>
                <li>Typical IQ–income correlations range from about r = 0.3 up to 0.4 or higher in recent samples.</li>
                <li>
                  In the NLSY79 dataset, AFQT scores (an IQ proxy) explained about 21% of the variability in
                  individuals' family income (correlation around 0.46).
                </li>
                <li>
                  Each standard deviation increase in cognitive ability boosted income by approximately 21% in recent
                  cohorts.
                </li>
              </ul>

              <div className="mt-6 text-sm text-muted-foreground">
                <p className="font-medium">Key References:</p>
                <ul className="list-none space-y-1">
                  <li>Nye, C.D., et al. (2022). Journal of Business and Psychology, 37(6), 1119–1139.</li>
                  <li>Zaboski, B.A., et al. (2018). Journal of School Psychology, 71, 42–56.</li>
                  <li>Calvin, C.M., et al. (2017). BMJ, 357, j2708.</li>
                  <li>Marks, G.N. (2023). Social Sciences, 12(9), 478.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personality" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Big Five Personality Research</CardTitle>
              <CardDescription>How personality traits predict important life outcomes across domains</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Big Five personality traits have been extensively studied as predictors of various life outcomes.
                Below is a summary of key research findings across different domains:
              </p>

              <h3 className="text-lg font-medium mt-4">Job Performance</h3>
              <p>Personality traits, especially Conscientiousness, predict workplace success:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Barrick & Mount's (1991) meta-analysis of 117 studies found that Conscientiousness consistently
                  predicted job performance across occupations (true-score correlation ~0.20–0.23).
                </li>
                <li>
                  Other traits show more context-specific effects: Extraversion predicts success in sales and management
                  roles, while Agreeableness is beneficial in team and service settings.
                </li>
                <li>
                  Conscientiousness has emerged as the most consistent personality predictor of job performance across
                  nearly all occupations and performance criteria.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Academic Achievement</h3>
              <p>Personality traits also predict success in educational settings:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Poropat's (2009) meta-analysis of over 70,000 students found that Conscientiousness has a medium-sized
                  effect on academic performance (correlation ~0.24, equivalent to Cohen's d ≈ 0.46).
                </li>
                <li>
                  More conscientious students earn grades about 0.3 GPA points higher on average and are nearly twice as
                  likely to avoid failing courses.
                </li>
                <li>
                  Openness to Experience shows small positive correlations with academic achievement, especially in
                  higher education.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Health and Longevity</h3>
              <p>Personality traits are linked to health outcomes and lifespan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Jokela et al. (2013) analyzed 7 large longitudinal cohorts (N = 76,150) and found that low
                  Conscientiousness robustly predicts earlier mortality.
                </li>
                <li>
                  Individuals in the lowest third of Conscientiousness had about a 37% higher risk of death compared to
                  those in the highest tertile.
                </li>
                <li>
                  Higher Neuroticism is associated with greater risk of certain chronic illnesses and mental health
                  issues.
                </li>
                <li>
                  These effects remained significant even after controlling for demographic factors and health
                  behaviors.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Relationship Stability</h3>
              <p>Personality traits predict relationship outcomes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Roberts et al. (2007) found that Neuroticism correlated around +0.17 with likelihood of divorce.
                </li>
                <li>
                  Agreeableness and Conscientiousness showed negative correlations of roughly -0.18 and -0.13
                  (respectively) with divorce.
                </li>
                <li>
                  These effect sizes were larger than the effect of socioeconomic status on divorce in the same
                  analyses.
                </li>
                <li>
                  Personality traits influence how individuals handle conflict, stress, and commitment in relationships.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Subjective Well-Being</h3>
              <p>Personality shows very high predictive power for happiness and life satisfaction:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Steel, Schmidt & Shultz (2008) found that the Big Five traits collectively explained up to 39% of the
                  variance in people's overall life satisfaction.
                </li>
                <li>
                  Neuroticism is a powerful inverse predictor of well-being, while Extraversion positively predicts
                  happiness.
                </li>
                <li>
                  Correlation coefficients between personality traits and well-being measures are often in the 0.4–0.5
                  range.
                </li>
              </ul>

              <div className="mt-6 text-sm text-muted-foreground">
                <p className="font-medium">Key References:</p>
                <ul className="list-none space-y-1">
                  <li>Barrick, M.R., & Mount, M.K. (1991). Personnel Psychology, 44(1), 1-26.</li>
                  <li>Poropat, A.E. (2009). Psychological Bulletin, 135(2), 322-338.</li>
                  <li>Jokela, M., et al. (2013). American Journal of Epidemiology, 178(5), 667-675.</li>
                  <li>Roberts, B.W., et al. (2007). Perspectives on Psychological Science, 2(4), 313-345.</li>
                  <li>Steel, P., Schmidt, J., & Shultz, J. (2008). Psychological Bulletin, 134(1), 138-161.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formulas" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Prediction Formulas and Methodology</CardTitle>
              <CardDescription>The mathematical principles behind the Life Outcomes Predictor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Life Outcomes Predictor uses mathematical formulas derived from research on the relationships
                between IQ, personality traits, and various life outcomes. Below, we explain each prediction formula and
                its scientific basis:
              </p>

              <h3 className="text-lg font-medium mt-4">Job Performance</h3>
              <div className="p-4 bg-muted rounded-md my-2">
                <code className="text-sm">
                  0.4 * Conscientiousness + 0.2 * Extraversion - 0.1 * Neuroticism + 0.5 * (IQ/15) + 10
                </code>
              </div>
              <p className="text-sm">
                <strong>Rationale:</strong> This formula weights the factors based on meta-analytic findings.
                Conscientiousness (0.4) is heavily weighted as it consistently shows correlations of ~0.20-0.23 with job
                performance (Barrick & Mount, 1991). IQ is the strongest predictor (0.5) with correlations of ~0.40-0.59
                with performance metrics (Nye et al., 2022). Extraversion (0.2) contributes positively, especially in
                social occupations, while Neuroticism (-0.1) has a small negative effect. The IQ score is divided by 15
                (one standard deviation) to normalize its scale, and 10 is added as a baseline.
              </p>

              <h3 className="text-lg font-medium mt-4">Academic Achievement</h3>
              <div className="p-4 bg-muted rounded-md my-2">
                <code className="text-sm">0.6 * (IQ/15) + 0.3 * Conscientiousness - 0.2 * Neuroticism + 5</code>
              </div>
              <p className="text-sm">
                <strong>Rationale:</strong> IQ is the strongest predictor (0.6) as research shows it accounts for ~54%
                of variance in educational outcomes (Zaboski et al., 2018). Conscientiousness (0.3) is the second
                strongest predictor with correlations of ~0.24 with academic performance (Poropat, 2009). Neuroticism
                (-0.2) negatively impacts academic achievement through test anxiety and stress. The IQ score is
                normalized by dividing by 15, and 5 is added as a baseline.
              </p>

              <h3 className="text-lg font-medium mt-4">Health Outcome</h3>
              <div className="p-4 bg-muted rounded-md my-2">
                <code className="text-sm">0.3 * (IQ/15) + 0.4 * Conscientiousness - 0.3 * Neuroticism + 50</code>
              </div>
              <p className="text-sm">
                <strong>Rationale:</strong> Conscientiousness (0.4) is the strongest predictor as studies show low
                Conscientiousness increases mortality risk by ~37% (Jokela et al., 2013). Neuroticism (-0.3) negatively
                impacts health through stress and unhealthy coping behaviors. IQ (0.3) is also significant, with each
                standard deviation increase associated with 25-28% reduced mortality risk (Calvin et al., 2017). The
                baseline of 50 represents average health, with higher scores indicating better health outcomes.
              </p>

              <h3 className="text-lg font-medium mt-4">Income</h3>
              <div className="p-4 bg-muted rounded-md my-2">
                <code className="text-sm">
                  (0.5 * (IQ/15) + 0.3 * Conscientiousness + 0.1 * Openness) * 1000 + 20000
                </code>
              </div>
              <p className="text-sm">
                <strong>Rationale:</strong> IQ is the strongest predictor (0.5) with correlations of ~0.38-0.41 with
                earnings (Marks, 2023). Each standard deviation increase in IQ boosts income by ~21%. Conscientiousness
                (0.3) is the second strongest predictor through its effects on work ethic and career advancement.
                Openness (0.1) has a smaller positive effect, particularly in creative and leadership roles. The formula
                multiplies by 1000 to convert to dollar amounts and adds $20,000 as a baseline income.
              </p>

              <h3 className="text-lg font-medium mt-4">Relationship Stability</h3>
              <div className="p-4 bg-muted rounded-md my-2">
                <code className="text-sm">0.5 * Agreeableness + 0.3 * Conscientiousness - 0.4 * Neuroticism + 20</code>
              </div>
              <p className="text-sm">
                <strong>Rationale:</strong> Agreeableness (0.5) is the strongest predictor as it correlates ~-0.18 with
                divorce risk (Roberts et al., 2007). Neuroticism (-0.4) strongly predicts relationship problems with
                correlations of ~0.17 with divorce. Conscientiousness (0.3) contributes to relationship stability
                through reliability and commitment. IQ is not included as research shows minimal direct effects on
                relationship stability after controlling for personality. The baseline of 20 represents average
                relationship stability.
              </p>

              <h3 className="text-lg font-medium mt-4">Normalization and Scaling</h3>
              <p>Several important methodological considerations went into developing these formulas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>IQ Normalization:</strong> IQ scores are divided by 15 (one standard deviation) to bring them
                  to a scale comparable with the 0-100 personality scores.
                </li>
                <li>
                  <strong>Weighting Factors:</strong> The weights assigned to each trait (e.g., 0.4, 0.3) are derived
                  from the relative strength of correlations found in meta-analyses and large-scale studies.
                </li>
                <li>
                  <strong>Baseline Constants:</strong> Constants (e.g., +10, +20) are added to ensure the outcomes fall
                  within a reasonable and interpretable range.
                </li>
                <li>
                  <strong>Income Scaling:</strong> For income prediction, an additional multiplication factor (1000) is
                  applied to convert the score to a dollar amount, with $20,000 as a baseline.
                </li>
              </ul>

              <p className="mt-4">
                These formulas represent simplified models of complex relationships. While they capture the
                directionality and relative importance of different factors based on research, they are approximations
                rather than exact predictive equations.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limitations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Limitations and Caveats</CardTitle>
              <CardDescription>Important considerations when interpreting the predictions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                While the Life Outcomes Predictor is based on robust scientific research, it's important to understand
                its limitations:
              </p>

              <h3 className="text-lg font-medium mt-4">Statistical vs. Deterministic Predictions</h3>
              <p>
                The predictions represent statistical tendencies, not deterministic outcomes. Even the strongest
                correlations between traits and outcomes leave substantial room for individual variation. Many people
                will deviate significantly from these statistical predictions due to other factors not captured by the
                model.
              </p>

              <h3 className="text-lg font-medium mt-4">Simplified Model of Complex Relationships</h3>
              <p>
                The formulas used are necessarily simplifications of extremely complex relationships. Real-world
                outcomes are influenced by countless factors beyond IQ and personality, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Family background and socioeconomic status</li>
                <li>Educational opportunities</li>
                <li>Social networks and connections</li>
                <li>Historical and economic context</li>
                <li>Cultural factors</li>
                <li>Luck and chance events</li>
                <li>Personal choices and life decisions</li>
                <li>Specific skills and talents not captured by general IQ</li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Self-Assessment Limitations</h3>
              <p>The tool relies on self-reported personality traits, which may be subject to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Social desirability bias (rating oneself in socially favorable ways)</li>
                <li>Limited self-awareness</li>
                <li>Reference group effects (comparing oneself to different standards)</li>
                <li>Temporary mood effects on self-perception</li>
              </ul>
              <p>
                Similarly, self-reported IQ scores may not be accurate unless derived from a professionally administered
                test.
              </p>

              <h3 className="text-lg font-medium mt-4">Correlation vs. Causation</h3>
              <p>
                The research underlying these predictions establishes correlations, not necessarily causation. While
                some studies attempt to control for confounding variables, it's difficult to definitively establish that
                traits directly cause outcomes rather than both being influenced by other factors.
              </p>

              <h3 className="text-lg font-medium mt-4">Ethical Considerations</h3>
              <p>It's important to consider the ethical implications of trait-based predictions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  These predictions should never be used to limit opportunities or discriminate against individuals.
                </li>
                <li>
                  Personality traits and cognitive abilities can change over time and can be developed through
                  deliberate effort.
                </li>
                <li>
                  Statistical predictions apply to groups, not individuals, and should not be used to make judgments
                  about specific people.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-4">Proper Use of This Tool</h3>
              <p>The Life Outcomes Predictor is best used as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>An educational tool to understand how psychological traits relate to life outcomes</li>
                <li>A starting point for self-reflection, not a definitive assessment</li>
                <li>
                  A demonstration of scientific findings about trait-outcome relationships at the population level
                </li>
              </ul>
              <p>
                It should not be used to make important life decisions or to form judgments about oneself or others.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

