import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/easybuild-sv/30min";

const schema = z.object({
  workType: z.enum(
    ["completa", "parziale", "esterni", "nuovo", "altro"],
    { message: "Seleziona il tipo di lavoro" },
  ),
  propertyType: z.enum(
    ["appartamento", "indipendente", "commerciale", "altro"],
    { message: "Seleziona il tipo di immobile" },
  ),
  zone: z
    .string()
    .trim()
    .min(2, { message: "Inserisci la città o il comune" })
    .max(120),
  timing: z.enum(
    ["asap", "1-3", "6m", "info"],
    { message: "Seleziona quando vorresti iniziare" },
  ),
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Inserisci nome e cognome" })
    .max(120),
  phone: z
    .string()
    .trim()
    .min(6, { message: "Inserisci un numero di telefono valido" })
    .max(30)
    .regex(/^[+\d\s().-]+$/, { message: "Numero non valido" }),
  email: z
    .string()
    .trim()
    .email({ message: "Inserisci un indirizzo email valido" })
    .max(255),
  privacy: z.literal(true, {
    message: "Devi accettare l'informativa privacy",
  }),
});

type FormValues = z.infer<typeof schema>;

const workOptions = [
  { value: "completa", label: "Ristrutturazione completa" },
  { value: "parziale", label: "Ristrutturazione parziale (bagno, cucina…)" },
  { value: "esterni", label: "Lavori esterni (facciata, giardino…)" },
  { value: "nuovo", label: "Nuovo immobile / costruzione" },
  { value: "altro", label: "Altro" },
] as const;

const propertyOptions = [
  { value: "appartamento", label: "Appartamento" },
  { value: "indipendente", label: "Casa indipendente / villa" },
  { value: "commerciale", label: "Locale commerciale" },
  { value: "altro", label: "Altro" },
] as const;

const timingOptions = [
  { value: "asap", label: "Prima possibile" },
  { value: "1-3", label: "Tra 1 e 3 mesi" },
  { value: "6m", label: "Entro 6 mesi" },
  { value: "info", label: "Solo informazioni per ora" },
] as const;

type StepKey = "workType" | "propertyType" | "zone" | "timing" | "contact";
const steps: StepKey[] = ["workType", "propertyType", "zone", "timing", "contact"];

export function RequestForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { zone: "", fullName: "", phone: "", email: "" },
  });

  const { register, handleSubmit, trigger, watch, formState: { errors } } = form;

  const goNext = async () => {
    const fieldsForStep: Record<StepKey, (keyof FormValues)[]> = {
      workType: ["workType"],
      propertyType: ["propertyType"],
      zone: ["zone"],
      timing: ["timing"],
      contact: ["fullName", "phone", "email", "privacy"],
    };
    const ok = await trigger(fieldsForStep[steps[step]]);
    if (ok && step < steps.length - 1) setStep(step + 1);
  };

  const goPrev = () => setStep(Math.max(0, step - 1));

  const onSubmit = (data: FormValues) => {
    // Placeholder: in produzione i dati vengono inviati via Make/Zapier → email + Calendly
    setSubmitted(data);
  };

  if (submitted) {
    const firstName = submitted.fullName.split(" ")[0];
    return (
      <section id="richiesta" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h2 className="font-display mt-6 text-4xl font-semibold text-success sm:text-5xl">
            Grazie {firstName}!
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Abbiamo ricevuto la tua richiesta. Per completare,
            prenota subito la tua chiamata conoscitiva di 30 minuti.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:bg-primary/90"
          >
            <Calendar className="h-5 w-5" />
            Prenota ora la tua chiamata di 30 minuti
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Riceverai a breve anche una mail di conferma con il link.
          </p>
        </div>
      </section>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;
  const currentStep = steps[step];

  return (
    <section id="richiesta" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            In 2 minuti
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            Raccontaci il tuo progetto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ti bastano 2 minuti. Ti ricontattiamo noi.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10"
          noValidate
        >
          {/* progress */}
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Passo {step + 1} di {steps.length}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="mb-10 h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step 1 */}
          {currentStep === "workType" && (
            <Question
              title="Che tipo di lavoro devi fare?"
              hint="Questa informazione ci aiuta a capire subito il tipo di intervento e darti una risposta più precisa."
              error={errors.workType?.message}
            >
              <div className="space-y-3">
                {workOptions.map((opt) => (
                  <RadioCard
                    key={opt.value}
                    label={opt.label}
                    value={opt.value}
                    {...register("workType")}
                  />
                ))}
              </div>
            </Question>
          )}

          {/* Step 2 */}
          {currentStep === "propertyType" && (
            <Question
              title="Che tipo di immobile è?"
              hint="Ci serve per stimare tempi e risorse necessarie."
              error={errors.propertyType?.message}
            >
              <div className="space-y-3">
                {propertyOptions.map((opt) => (
                  <RadioCard
                    key={opt.value}
                    label={opt.label}
                    value={opt.value}
                    {...register("propertyType")}
                  />
                ))}
              </div>
            </Question>
          )}

          {/* Step 3 */}
          {currentStep === "zone" && (
            <Question
              title="In quale zona si trova l'immobile?"
              hint="Verifichiamo se operiamo nella tua zona."
              error={errors.zone?.message}
            >
              <input
                type="text"
                placeholder="Città o comune"
                autoComplete="address-level2"
                className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                {...register("zone")}
              />
            </Question>
          )}

          {/* Step 4 */}
          {currentStep === "timing" && (
            <Question
              title="Quando vorresti iniziare i lavori?"
              hint="Ci aiuta a organizzare il calendario dei sopralluoghi."
              error={errors.timing?.message}
            >
              <div className="space-y-3">
                {timingOptions.map((opt) => (
                  <RadioCard
                    key={opt.value}
                    label={opt.label}
                    value={opt.value}
                    {...register("timing")}
                  />
                ))}
              </div>
            </Question>
          )}

          {/* Step 5 */}
          {currentStep === "contact" && (
            <Question
              title="Come ti ricontattiamo?"
              hint="Useremo questi dati solo per richiamarti su questa richiesta."
            >
              <div className="grid grid-cols-1 gap-4">
                <Field
                  label="Nome e cognome"
                  error={errors.fullName?.message}
                >
                  <input
                    type="text"
                    autoComplete="name"
                    className={inputCls}
                    {...register("fullName")}
                  />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Telefono"
                    error={errors.phone?.message}
                  >
                    <input
                      type="tel"
                      autoComplete="tel"
                      placeholder="+39 ..."
                      className={inputCls}
                      {...register("phone")}
                    />
                  </Field>
                  <Field
                    label="Email"
                    error={errors.email?.message}
                  >
                    <input
                      type="email"
                      autoComplete="email"
                      className={inputCls}
                      {...register("email")}
                    />
                  </Field>
                </div>
                <label className="mt-2 flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background p-4 hover:border-primary/40">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 cursor-pointer accent-primary"
                    {...register("privacy")}
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    Ho letto e accetto l'{" "}
                    <a href="#privacy" className="font-medium text-primary underline-offset-2 hover:underline">
                      informativa privacy
                    </a>{" "}
                    e acconsento al trattamento dei miei dati per essere ricontattato. *
                  </span>
                </label>
                {errors.privacy?.message && (
                  <p className="-mt-2 text-sm text-destructive">{errors.privacy.message}</p>
                )}
              </div>
            </Question>
          )}

          {/* Nav */}
          <div className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-6">
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Indietro
            </button>

            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:bg-primary/90"
              >
                Avanti
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            ) : (
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:bg-primary/90"
              >
                Invia richiesta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Question({
  title,
  hint,
  error,
  children,
}: {
  title: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h3>
      {hint && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hint}</p>
      )}
      <div className="mt-6">{children}</div>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label} <span className="text-primary">*</span>
      </span>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </label>
  );
}

const RadioCard = ({
  label,
  value,
  ...rest
}: { label: string; value: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="group flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background p-4 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-2 has-[:checked]:ring-primary/20 hover:border-primary/40">
      <input
        type="radio"
        value={value}
        className="h-4 w-4 cursor-pointer accent-primary"
        {...rest}
      />
      <span className="text-base text-foreground">{label}</span>
    </label>
  );
};
