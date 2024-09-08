import Link from "next/link";

export default function Imressum() {
    return (
        
      <div className="flex flex-col items-center justify-center p-6">
        <main className="max-w-4xl w-full">
          <section className="mb-10">
            <h1 className="text-3xl font-bold mb-4 text-green-400">Impressum</h1>
            <p className="font-thin mb-4">
              Verantwortlich für den Inhalt dieser App:
            </p>
            <p className="font-thin mb-4">
              <span className="font-bold text-lg">Samer Alaws</span><br />
              Gladiolenweg 4<br />
              25211 Geilenkirchen<br />
              Deutschland
            </p>
            <p className="font-thin mb-4">
              E-Mail: <a href="mailto:contact@alaws.de" className="underline hover:text-blue-300">contact@alaws.de</a><br />
            </p>
            <p className="font-thin mb-4">
              Alle Daten und Straßeninformationen in dieser App stammen von der offiziellen Website der  <Link 
                    href="https://www.geilenkirchen.de/rathaus/online-dienstleistungen-und-andere-angebote/abfallkalender/" 
                    className="font-bold underline hover:text-blue-300">Stadt Geilenkirchen</Link>
                    .
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4 text-green-400">Datenschutzerklärung</h2>
            <p className="font-thin mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. In dieser App werden keine persönlichen Daten von den Nutzern gesammelt oder gespeichert.
            </p>
            <p className="font-thin mb-4">
              Diese App verwendet keine Cookies, Analyse-Tools oder andere Techniken zur Sammlung von Daten. Alle Daten, einschließlich der Informationen zu den Straßen, stammen von der Website der Stadt Geilenkirchen und werden nur zur Anzeige in der App verwendet.
            </p>
            <p className="font-thin mb-4">
              Wenn Sie Fragen zum Datenschutz haben, können Sie uns jederzeit über die oben genannten Kontaktdaten erreichen.
            </p>
          </section>
        </main>
    </div>
    );
}