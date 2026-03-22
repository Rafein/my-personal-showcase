import PageDecor from "@/components/PageDecor";
import { Link } from "react-router-dom";

const Imprint = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <PageDecor />
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto glass-card-hover p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">Impressum</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-8">Angaben gemaess Paragraf 5 DDG</p>

          <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-7">
            <section className="space-y-1">
              <p className="font-semibold text-foreground">Rafein Abdulla</p>
              <p>40211 Duesseldorf</p>
            </section>

            <section className="space-y-2">
              <p className="font-semibold text-foreground">Kontakt:</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:DevRafeinAbdulla@outlook.com" className="text-primary underline underline-offset-4">
                  DevRafeinAbdulla@outlook.com
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <p className="font-semibold text-foreground">Haftungsausschluss:</p>

              <div className="space-y-3">
                <p className="font-semibold text-foreground">Haftung fuer Inhalte</p>
                <p>
                  Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt. Fuer die Richtigkeit,
                  Vollstaendigkeit und Aktualitaet der Inhalte kann jedoch keine Gewaehr uebernommen werden. Als
                  Diensteanbieter bin ich gemaess den allgemeinen Gesetzen fuer eigene Inhalte auf diesen Seiten
                  verantwortlich. Es besteht jedoch keine Verpflichtung, uebermittelte oder gespeicherte fremde
                  Informationen dauerhaft zu ueberwachen oder nach Umstaenden zu forschen, die auf eine rechtswidrige
                  Taetigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                  den allgemeinen Gesetzen bleiben hiervon unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab
                  dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moeglich. Bei Bekanntwerden entsprechender
                  Rechtsverletzungen werden diese Inhalte umgehend entfernt.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-foreground">Haftung fuer Links</p>
                <p>
                  Diese Website enthaelt Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht.
                  Deshalb kann fuer diese fremden Inhalte auch keine Gewaehr uebernommen werden. Fuer die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf moegliche Rechtsverstoesse ueberprueft.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-10">
            <Link to="/" className="text-primary underline underline-offset-4 hover:text-primary/80">
              Zurueck zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
