import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Wind,
  Wrench,
  ThermometerSun,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Check,
  Snowflake,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ImageCarousel } from "@/components/image-carousel";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-foreground text-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-background/10 bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex size-9 items-center justify-center">
              <span className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-sky-400/20 via-sky-300/30 to-sky-400/20 shadow-[0_0_22px_rgba(135,206,235,0.55)] ring-1 ring-sky-300/60" />
              <span className="absolute inset-[2px] rounded-md pointer-events-none bg-gradient-to-b from-sky-400 via-sky-500 to-sky-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
              <Snowflake className="size-5 text-white z-10 relative" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Szabó Klíma
            </span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a
              href="#szolgaltatasok"
              className="text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              Szolgáltatások
            </a>
            <a
              href="#arak"
              className="text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              Árak
            </a>
            <a
              href="#rolunk"
              className="text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              Rólunk
            </a>
            <a
              href="#kapcsolat"
              className="text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              Kapcsolat
            </a>
          </nav>
          <a
            href="tel:+36706215852"
            className="hidden md:inline-flex text-sm transition-all hover:brightness-110 font-light text-white tracking-tight h-9 rounded-full px-5 relative items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-sky-400/20 via-sky-300/30 to-sky-400/20 shadow-[0_0_22px_rgba(135,206,235,0.55)] ring-1 ring-sky-300/60" />
            <span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-sky-400 via-sky-500 to-sky-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-sky-300/35" />
            <span className="font-medium z-10 relative">Hívjon most</span>
          </a>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex text-sm font-medium text-foreground tracking-tight h-8 items-center justify-center gap-2 rounded-full border border-border px-4">
              <span className="flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-400" />
              </span>
              <span>Hívjon minket most</span>
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Szabó Klíma
            </h1>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg md:text-xl">
              Klíma beszerelés, karbantartás és javítás Pest megyében, valamint Tokaj és Dabas vonzáskörzetében. Több mint 15 év tapasztalat, minden munkára garanciát vállalunk.
            </p>
          </div>
        </div>

        {/* Infinite scrolling image gallery */}
        <div className="w-full mb-8 bg-muted/30 border-y border-border/50 py-8 overflow-hidden">
          <ImageCarousel
            images={[
              "IMG_4133.jpeg",
              "IMG_4675.jpeg",
              "IMG_4676.jpeg",
              "IMG_4698.jpeg",
              "IMG_4704.jpeg",
              "IMG_4708.jpeg",
              "IMG_4709.jpeg",
              "IMG_4710.jpeg",
              "IMG_4711.jpeg",
              "IMG_4775.jpeg",
              "IMG_4776.jpeg",
              "IMG_4940.jpeg",
              "IMG_4941.jpeg",
              "IMG_4961.jpeg",
              "IMG_5003.jpeg",
              "IMG_5004.jpeg",
              "IMG_5025.jpeg",
              "IMG_5027.jpeg",
              "IMG_5118.jpeg",
              "IMG_5480.jpeg",
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="szolgaltatasok" className="bg-background pt-0 pb-12 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <Image
                src="/logo.png"
                alt="Szabó Klíma logó"
                width={200}
                height={100}
                className="mx-auto mb-4 -mt-4 w-32 sm:w-40 md:w-48 rotate-90"
              />
              <span className="mb-4 inline-flex text-sm transition-all font-light text-white tracking-tight h-7 rounded-full px-4 relative items-center justify-center">
                <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60" />
                <span className="absolute inset-[2px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
                <span className="font-medium z-10 relative">Szolgáltatások</span>
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Teljes körű klímaszolgáltatás
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A beszerelésétől a karbantartásig minden szolgáltatást egy
                helyről.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0}>
              <Card className="border border-orange-400/50 transition-all hover:ring-2 hover:ring-primary/20 h-full">
              <CardHeader>
                <CardTitle className="mb-3 flex items-center gap-3 text-2xl font-bold">
                  <span className="text-2xl font-bold text-primary">1.</span>
                  Klíma beszerelés
                </CardTitle>
                <CardDescription>
                  Új klímaberendezések szakszerű telepítése lakásokba és
                  irodákba.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Helyszíni felmérés
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Minden márka
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Garancia
                  </li>
                </ul>
              </CardContent>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="border border-orange-400/50 transition-all hover:ring-2 hover:ring-primary/20 h-full">
              <CardHeader>
                <CardTitle className="mb-3 flex items-center gap-3 text-2xl font-bold">
                  <span className="text-2xl font-bold text-primary">2.</span>
                  Karbantartás
                </CardTitle>
                <CardDescription>
                  Rendszeres tisztítás és karbantartás a hosszú élettartamért.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Szűrőtisztítás
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Fertőtlenítés
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Hűtőközeg pótlás
                  </li>
                </ul>
              </CardContent>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border border-orange-400/50 transition-all hover:ring-2 hover:ring-primary/20 h-full">
              <CardHeader>
                <CardTitle className="mb-3 flex items-center gap-3 text-2xl font-bold">
                  <span className="text-2xl font-bold text-primary">3.</span>
                  Hibajavítás
                </CardTitle>
                <CardDescription>
                  Gyors és hatékony javítás minden típusú meghibásodásnál.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Diagnosztika
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    Alkatrészcsere
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    24 órán belül
                  </li>
                </ul>
              </CardContent>
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="arak" className="bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-flex text-sm transition-all font-light text-white tracking-tight h-7 rounded-full px-4 relative items-center justify-center">
                <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60" />
                <span className="absolute inset-[2px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
                <span className="font-medium z-10 relative">Árak</span>
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Átlátható árazás
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Nincsenek rejtett költségek. Az alapszerelési díj mindent
                tartalmaz.
              </p>
            </div>
          </ScrollReveal>

          {/* Main Pricing Cards */}
          <div className="mx-auto mb-12 grid max-w-3xl gap-6 md:grid-cols-2">
            <ScrollReveal delay={0}>
              <Card className="border border-orange-400/50 h-full">
              <CardHeader className="pb-2">
                <CardDescription className="text-foreground text-lg font-semibold">Split klíma alapszerelés</CardDescription>
                <CardTitle className="text-4xl">
                  <span className="font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">85.000</span> <span className="text-xl font-normal">Ft</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-base text-muted-foreground">
                  3 méter csőhosszig, 3,5 kW-ig
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  +10.000 Ft/fm 3m felett
                </p>
              </CardContent>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="border border-orange-400/50 h-full">
              <CardHeader className="pb-2">
                <CardDescription className="text-foreground text-lg font-semibold">Split klíma alapszerelés</CardDescription>
                <CardTitle className="text-4xl">
                  <span className="font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">90.000</span> <span className="text-xl font-normal">Ft</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-base text-muted-foreground">
                  3 méter csőhosszig, 5 kW-tól
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  +11.000 Ft/fm 3m felett
                </p>
              </CardContent>
            </Card>
            </ScrollReveal>
          </div>

          {/* What's Included */}
          <ScrollReveal>
            <Card className="mx-auto max-w-5xl border-none shadow-none ring-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl md:text-3xl">Mit tartalmaz az alapszerelés?</CardTitle>
              <CardDescription className="text-lg">
                Komplett szolgáltatás, mindenre kiterjedő garanciával
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Helyszíni felmérés, szaktanácsadás</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Ingyenes kiszállítás</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Teljes hatósági ügyintézés</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">1 db faláttörés</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Kábelcsatorna és idomok</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Szigetelt hűtőközeg csövek</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Villamos kábelek kiépítése</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Hálózati betáp (5m-ig)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Kondenzvíz elvezetés</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">45cm-es fali tartókonzol</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Beüzemelés, jegyzőkönyv</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-primary" />
                  <span className="text-lg">Szerelés utáni takarítás</span>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>

          {/* Additional Pricing */}
          <ScrollReveal>
            <div className="mx-auto mt-12 max-w-4xl">
              <h3 className="mb-8 text-center text-3xl font-semibold text-foreground">
                Egyéb szolgáltatások
              </h3>
              <div className="grid gap-6 sm:grid-cols-3">
                <Card className="border border-orange-400/50">
                <CardHeader className="text-center py-6">
                  <CardDescription className="text-lg">Előcsövezett helyre</CardDescription>
                  <CardTitle className="text-3xl"><span className="font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">60.000</span> Ft</CardTitle>
                </CardHeader>
              </Card>
              <Card className="border border-orange-400/50">
                <CardHeader className="text-center py-6">
                  <CardDescription className="text-lg">Klíma leszerelés</CardDescription>
                  <CardTitle className="text-3xl"><span className="font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">20.000</span> Ft</CardTitle>
                </CardHeader>
              </Card>
              <Card className="border border-orange-400/50">
                <CardHeader className="text-center py-6">
                  <CardDescription className="text-lg">Plusz faláttörés</CardDescription>
                  <CardTitle className="text-3xl"><span className="font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">5.000</span> Ft</CardTitle>
                </CardHeader>
              </Card>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-10 text-center text-lg text-muted-foreground">
              Kérdés esetén keressen minket bizalommal!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="rolunk" className="border-t border-background/10 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-flex text-sm transition-all font-light text-white tracking-tight h-7 rounded-full px-4 relative items-center justify-center">
                <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60" />
                <span className="absolute inset-[2px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
                <span className="font-medium z-10 relative">Miért minket?</span>
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Tapasztalat és megbízhatóság
              </h2>
              <p className="mx-auto max-w-2xl text-background/70">
                Több mint 15 éve dolgozunk a klímaszerelés területén, több ezer
                elégedett ügyféllel.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            <ScrollReveal delay={0}>
              <div className="text-center">
              <div className="mb-2 text-4xl font-bold font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">15+</div>
              <h3 className="mb-1 font-semibold">Év tapasztalat</h3>
              <p className="text-sm text-background/70">
                A szakmában szerzett tudás.
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">24h</div>
                <h3 className="mb-1 font-semibold">Gyors kiszállás</h3>
                <p className="text-sm text-background/70">
                  Sürgős esetben is számíthat ránk.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">1000+</div>
                <h3 className="mb-1 font-semibold">Elégedett ügyfél</h3>
                <p className="text-sm text-background/70">
                  Akik már minket választottak.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold font-extrabold bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(248,181,129,0.5)]">100%</div>
                <h3 className="mb-1 font-semibold">Garancia</h3>
                <p className="text-sm text-background/70">
                  Minden munkánkra garanciát vállalunk.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kapcsolat" className="bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
<a
              href="tel:+36706215852"
              className="mb-6 text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-3xl md:text-5xl lg:text-6xl"
            >
              +36 70 621 5852
            </a>

            <a
              href="mailto:szabozoltanklima@gmail.com"
              className="mb-3 text-base text-muted-foreground transition-colors hover:text-primary sm:text-lg md:text-2xl break-all"
            >
              szabozoltanklima@gmail.com
            </a>

            <p className="mb-8 text-base text-muted-foreground sm:text-lg">
              Pest megye, Tokaj és Dabas vonzáskörzete
            </p>

            <a
              href="tel:+36706215852"
              className="inline-flex text-base sm:text-lg md:text-xl transition-all hover:brightness-110 font-light text-white tracking-tight h-12 sm:h-14 md:h-16 rounded-full px-8 sm:px-10 md:px-12 relative items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-orange-400/20 via-amber-300/30 to-orange-400/20 shadow-[0_0_22px_rgba(248,181,129,0.55)] ring-1 ring-amber-300/60" />
              <span className="absolute inset-[3px] rounded-full pointer-events-none bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-full blur-xl pointer-events-none bg-amber-300/35" />
              <span className="font-medium z-10 relative">Ingyenes konzultáció</span>
            </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-background/10">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
          {/* Main footer content */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative flex size-10 items-center justify-center">
                  <span className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-sky-400/20 via-sky-300/30 to-sky-400/20 shadow-[0_0_22px_rgba(135,206,235,0.55)] ring-1 ring-sky-300/60" />
                  <span className="absolute inset-[2px] rounded-md pointer-events-none bg-gradient-to-b from-sky-400 via-sky-500 to-sky-300 shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
                  <Snowflake className="size-5 text-white z-10 relative" />
                </div>
                <span className="text-xl font-bold">Szabó Klíma</span>
              </div>
              <p className="text-sm text-background/70">
                Professzionális klímaszerelés és karbantartás több mint 15 éve.
                Megbízhatóság, szakértelem, garancia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold">Gyors linkek</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#szolgaltatasok" className="text-background/70 transition-colors hover:text-primary">
                    Szolgáltatások
                  </a>
                </li>
                <li>
                  <a href="#arak" className="text-background/70 transition-colors hover:text-primary">
                    Árak
                  </a>
                </li>
                <li>
                  <a href="#rolunk" className="text-background/70 transition-colors hover:text-primary">
                    Rólunk
                  </a>
                </li>
                <li>
                  <a href="#kapcsolat" className="text-background/70 transition-colors hover:text-primary">
                    Kapcsolat
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 font-semibold">Szolgáltatások</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-background/70">Klíma beszerelés</li>
                <li className="text-background/70">Karbantartás</li>
                <li className="text-background/70">Hibajavítás</li>
                <li className="text-background/70">Klíma leszerelés</li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="mb-4 font-semibold">Kapcsolat</h4>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+36706215852"
                  className="flex items-center gap-2 text-background/70 transition-colors hover:text-primary"
                >
                  <Phone className="size-4" />
                  06 70 621 5852
                </a>
                <a
                  href="mailto:szabozoltanklima@gmail.com"
                  className="flex items-center gap-2 text-background/70 transition-colors hover:text-primary"
                >
                  <Mail className="size-4" />
                  szabozoltanklima@gmail.com
                </a>
                <div className="flex items-center gap-2 text-background/70">
                  <MapPin className="size-4" />
                  Pest megye, Tokaj és Dabas vonzáskörzete
                </div>
              </div>
                          </div>
          </div>

          <Separator className="my-8 bg-background/20" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-background/50">
              &copy; 2024 Szabó Klíma. Minden jog fenntartva.
            </p>
            <div className="flex items-center gap-2 text-background/50">
              <span>Készítette:</span>
              <a href="tel:+36308952632" className="font-medium text-background/70 hover:text-primary">
                Király Ruben – 06 30 895 2632
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
