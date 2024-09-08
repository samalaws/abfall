export default function Trennen() {
  return (
    <div className="min-h-screen   flex items-center justify-center">
      <div className="p-8  shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
          Mülltrennung: Was ist richtig,
          was falsch?
        </h1>

        <div className="space-y-6">
          {/* Introduction */}
          <p className="text-lg ">
            Eine korrekte Mülltrennung
            hilft nicht nur der Umwelt,
            sondern auch bei der
            Wiederverwertung von
            Rohstoffen. Aber welche
            Abfälle gehören in welche
            Tonne? Hier klären wir die
            häufigsten Fehler auf.
          </p>

          {/* Section: Gelber Sack / Wertstofftonne */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-500">
              Gelber Sack /
              Wertstofftonne
            </h2>
            <p className="mt-2">
              Hier gehören Verpackungen
              aus Kunststoff, Metall und
              Verbundmaterialien hinein,
              z.B. Joghurtbecher,
              Konservendosen und
              Milchkartons.
            </p>
            <p className=" mt-2">
              <span className="font-semibold">
                Nicht hinein:
              </span>{" "}
              Essensreste, Spielzeug,
              Elektrogeräte oder
              Textilien.
            </p>
          </div>

          {/* Section: Papiertonne */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">
              Papiertonne
            </h2>
            <p className=" mt-2">
              In die Papiertonne gehören
              sauberes Papier, Pappe und
              Karton, z.B. Zeitungen,
              Briefumschläge und
              Kartons.
            </p>
            <p className=" mt-2">
              <span className="font-semibold">
                Nicht hinein:
              </span>{" "}
              Verschmutztes Papier,
              beschichtetes Papier (z.B.
              Butterpapier) oder
              Getränkekartons.
            </p>
          </div>

          {/* Section: Biotonne */}
          <div>
            <h2 className="text-2xl font-semibold text-green-500">
              Biotonne
            </h2>
            <p className=" mt-2">
              In die Biotonne gehören
              organische Abfälle wie
              Küchenabfälle, Obst- und
              Gemüsereste, Eierschalen
              und Kaffeesatz.
            </p>
            <p className=" mt-2">
              <span className="font-semibold">
                Nicht hinein:
              </span>{" "}
              Plastik, Glas, Metalle
              oder behandeltes Holz.
            </p>
          </div>

          {/* Section: Restmüll */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-500">
              Restmüll
            </h2>
            <p className=" mt-2">
              Der Restmüll ist für
              Abfälle, die nicht
              recycelt werden können,
              z.B. verschmutztes Papier,
              Windeln, Staubsaugerbeutel
              und Zigarettenstummel.
            </p>
            <p className=" mt-2">
              <span className="font-semibold">
                Nicht hinein:
              </span>{" "}
              Gefährliche Stoffe wie
              Batterien oder Farben
              (Sondermüll),
              Elektroschrott oder
              recycelbare Materialien.
            </p>
          </div>

          {/* Section: Glascontainer */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-500">
              Glascontainer
            </h2>
            <p className=" mt-2">
              Glas sollte nach Farben
              getrennt in die
              entsprechenden
              Glascontainer entsorgt
              werden: Weißglas, Grünglas
              und Braunglas.
            </p>
            <p className=" mt-2">
              <span className="font-semibold">
                Nicht hinein:
              </span>{" "}
              Keramik, Porzellan,
              Fensterglas oder
              Spiegelglas.
            </p>
          </div>

          {/* Conclusion */}
          <p className="text-lg  mt-8">
            Eine richtige Mülltrennung
            ist entscheidend, um
            Recycling zu ermöglichen und
            Umweltbelastungen zu
            reduzieren. Informiere dich
            regelmäßig über lokale
            Vorgaben, da Mülltrennung
            regional variieren kann.
          </p>
        </div>
      </div>
    </div>
  );
}
