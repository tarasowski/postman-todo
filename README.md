REST (Representational State Transfer) Prinzipien sind Richtlinien für die Gestaltung von netzwerkbasierten Anwendungen. Hier sind die Hauptprinzipien:

- **Client-Server-Architektur**: Trennung von Client und Server, sodass sie unabhängig voneinander weiterentwickelt werden können.
- **Zustandslosigkeit**: Jede Anfrage vom Client an den Server muss alle Informationen enthalten, die zur Verarbeitung der Anfrage notwendig sind.
- **Cachebarkeit**: Antworten müssen sich als cachebar oder nicht cachebar definieren, um zu verhindern, dass Clients veraltete oder unangemessene Daten wiederverwenden.
- **Einheitliche Schnittstelle**: Vereinfacht die Architektur und entkoppelt die Komponenten, sodass sie sich unabhängig voneinander entwickeln können. Dazu gehören:
  - Ressourcenidentifikation in Anfragen (mittels URIs).
  - Manipulation von Ressourcen durch Repräsentationen (typischerweise JSON oder XML).
  - Selbstbeschreibende Nachrichten (unter Verwendung standardisierter HTTP-Methoden wie GET, POST, PUT, DELETE).
  - HATEOAS (Hypermedia as the Engine of Application State): Clients interagieren vollständig über Hypermedia, das dynamisch von Anwendungsservern bereitgestellt wird.
- **Schichtungssystem**: Der Client kann nicht feststellen, ob er direkt mit dem Endserver oder einem Vermittler verbunden ist.
- **Code on Demand (optional)**: Server können die Funktionalität des Clients vorübergehend durch die Übertragung von ausführbarem Code erweitern oder anpassen.

Im Kontext des `postman-todo` Projekts würden diese Prinzipien wie folgt angewendet:
- **Client-Server-Architektur**: Das Projekt trennt die Client-Seite (Postman oder eine andere Front-End-Anwendung) vom Backend-Server, der die To-Do-Elemente verwaltet.
- **Zustandslosigkeit**: Jede API-Anfrage zur Verwaltung von To-Do-Elementen (z.B. Hinzufügen, Aktualisieren, Löschen) sollte unabhängig sein und alle notwendigen Informationen enthalten.
- **Cachebarkeit**: Antworten der API können als cachefähig markiert werden, um die Leistung zu verbessern.
- **Einheitliche Schnittstelle**: Das Projekt sollte konsistente URIs für To-Do-Elemente verwenden, diese mit standardisierten HTTP-Methoden manipulieren und Antworten in einem standardisierten Format wie JSON bereitstellen.
- **Schichtungssystem**: Das Projekt kann Vermittler wie Lastverteiler oder Proxies verwenden, ohne dass der Client dies bemerkt.
- **Code on Demand**: Falls erforderlich, kann das Projekt ausführbare Skripte an Clients senden, um die Funktionalität zu erweitern, obwohl dies optional ist.

Diese Prinzipien stellen sicher, dass die API skalierbar, wartbar und weiterentwickelbar ist.
