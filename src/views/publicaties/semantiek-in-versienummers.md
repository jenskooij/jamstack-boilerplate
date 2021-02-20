---
title: Semantiek in versienummers
tags: post
description: Artikel over de semantiek in versienummers, als het gaat over softwareontwikkeling. Op 10 april 2019 gepubliceerd door [Computable](https://www.computable.nl/artikel/blogs/development/6615926/5260614/semantiek-in-versienummers.html).
image: http://images.ctfassets.net/s0m3943n5459/14XwB7l8z0cdxxsSLS39OI/e23f598c6ce07d529c3eac2aa4167a50/6615925.jpg
publicationDate: 2019-05-03
---
__Wie met code werkt, kent het fenomeen: wanneer is een wijziging groot genoeg om het ophogen van een versienummer te rechtvaardigen. Is dit een minor change? Of toch meer een bugfix? Er zijn natuurlijk handvatten beschikbaar. In deze blog bespreken we semantiek in versienummering en presenteer ik mijn eigen variant: iterative versioning.
Allereerst een kleine toelichting van welke versienummeringen er bestaan en in welke situatie ze bruikbaar zijn.__

## Semantic versioning
Een van de bekendste versioneringsschema’s is [semantic versioning](https://semver.org/).  Een duidelijke manier van structureren van je versienummer. Drie cijfers.

1. De major, wanneer een wijziging niet compatible is met de vorige versies.
2. De minor, wanneer er nieuwe functionaliteit wordt toegevoegd, die wel compatible is met de huidige major versie.
3. De patch, voor bugfixes die compatible zijn met vorige minor versies.

Een goed en duidelijk systeem, waarmee je aan de developers die gebruik maken van jouw code om hun software mee te ontwikkelen. Maar wat als er geen developers zijn die jouw code gebruiken, behalve je teamgenoten? Als je bijvoorbeeld aan een product werkt dat publiekelijk gebruikt wordt?

## Public versioning
Een goed voorbeeld, of eigenlijk niet zo’n goed voorbeeld, van public versioning is [Microsoft](https://www.computable.nl/bedrijfsprofiel/microsoft/23700/artikelen.html) Windows. In het begin was er logica. Versie 2 volgende op versie 1. Versie drie volgde daarop, maar werd publiek beter bekend na wat patches: Windows 3.11. Daarna ging Microsoft over op een versienummering gebaseerd op het jaar waarin Windows gelanceerd werd. 95, 98, 2000. Begrijpelijker voor consumenten. Echter met de flop van Windows 2000 (of erger nog Millennium Edition), besloten ze wéér van versienummering te veranderen. Met XP was er de eerste Windows versie die na een kwakkelende lancering één van de meest succesvolle versies bleek. Met 13 jaar lang support die eindigde in 2014, was dit een ongekend succes in de Windows serie. Daarna volgde Vista, een minder goed ontvangen versie, gevolgd door 7, 8 en 10, [met als opvallend ontbrekende versie 9](https://www.extremetech.com/computing/191279-why-is-it-called-windows-10-not-windows-9). Andere bekende versienummeringen zijn die van Android (toetjes en gebak, zoals FroYo, Gingerbread, Donut) of [Apple](https://www.computable.nl/bedrijfsprofiel/apple/195514/artikelen.html) (sinds versie 10 allerlei katachtigen: Cheetah, Tiger, Leopard) en zo zijn er nog [meer voorbeelden](https://royal.pingdom.com/2010/05/27/the-developer-obsession-with-code-names-114-interesting-examples/). Echte logica is hierin niet altijd terug te herkennen, maar deze versienummers hebben dan ook als doel om het product in de markt te zetten. Maar wat als jouw product niet in de markt gezet wordt? Sterker nog, wat als er van jouw product maar één versie tegelijkertijd bestaat, zoals bij een website bijvoorbeeld? Wellicht is het dan een goed idee om eens na te denken over iterative versioning.

## Iterative versioning
Wanneer je met [scrum](https://www.computable.nl/keyword/scrum/3238243/artikelen.html) werkt, een voorbeeld van de vele verschillende [agile methodieken](https://agilescrumgroup.nl/wat-is-agile/) die er bestaan, werk je in sprints. Afgebakende tijdsperioden, waarna je productie(waardige) software oplevert. In het geval van websites, zal er uiteindelijk maar één versie op productie terecht komen. Het is in dat geval zinnig om [iterative versioning](https://itver.org/) toe te passen.

### Hoe werkt het?
De versienummering die gebruikt wordt, kent het volgende formaat:
> jaar.sprint-of-productierelease.iteratie(-toelichting).

1. Jaar: het jaar waarin deze productierelease gebouwd werd.
2. Sprint of productierelease: De hoeveelste sprint van dit jaar is dit? Of als je niet in sprints werkt, de hoeveelste productierelease dit is.
3. Iteratie: De hoeveelste bouwpoging dit is.
4. -toelichting: Wanneer je een release maakt die tussentijds bepaalde functionaliteit moet testen. Het toevoegen van een toelichting is gelijk ook een aanduiding dat deze release niet geschikt is voor productie.

### Over iteraties
In veel gevallen wordt in professionele omgevingen gebruik gemaakt van een bouwstraat, ook wel bekend als OTAP of DTAP. Een ontwikkel- (of development), test-, acceptatie- en productieomgeving. Wanneer een release naar bijvoorbeeld de testomgeving gaat kunnen hieruit bugs of andere bevindingen komen. Deze wil je verhelpen voordat je naar productie gaat. Iedere keer dat er nieuwe wijzigingen naar een van de omgevingen worden gereleaset, hoog je het iteratienummer op.

Deze manier van versioneren werkt heel goed samen in combinatie met [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), een methodiek die gebruikt kan worden om version control in te richten. Hieronder staat een schematische weergave van hoe dit er aan toe zou kunnen gaan in een ontwikkelproces.

### Releases
[Hier](https://itver.org/images/iterative-versioning-2019-01-02.png) vind je een vereenvoudigde weergave van hoe je met behulp van de richtlijnen die geschetst worden in het artikel over Git Flow, een release kunt uitbrengen. Nadat de verschillende feature branches zijn gemerged in de develop branche, maak je een release branche aan. Op het moment dat je hier een releasebuild van maakt, tag je de laatste commit met het versienummer. Deze releasebuild deploy je naar test. Soms komen daar bevindingen uit, die doorgang naar de volgende stap in de ontwikkelstraat belemmeren. De ontwikkelaars kunnen deze verhelpen. Daarna maak je een nieuwe releasebuild, hoog je het iteratienummer op en tag je opnieuw de commit waarvan je de release gebouwd hebt. Vervolgens deploy je deze nieuwe build naar test. Geen bevindingen? Op dezelfde manier ga je door naar acceptatie en uiteindelijk productie.

### Tips nodig?
Varieer en gebruik wat het best past bij jou project en team. Plus maak bekend welke logica er achter een versienummer zit, door bijvoorbeeld een comment op te nemen die refereert naar documentatie waarin dit staat toegelicht of noem het in de readme van je project.

### Wanneer gebruik je welke versienummering?
Je kunt je dus afvragen voor wie deze versienummers zijn? Wat mij betreft zijn er dus verschillende doelen die je kunt bereiken met versienummering. Hier vind je drie situaties en de bijbehorende strategie voor versionering.

- Wordt jouw code gebruikt door andere ontwikkelaars? Bijvoorbeeld als je aan een open source project werkt, of als je software of API’s publiek toegankelijk zijn. Gebruik dan semantic versioning.
- Is jouw code de basis van een product dat publiekelijk gebruikt wordt? Gebruik dan versienummers die de eindgebruiker laten weten welke versie ze gebruiken.
- Is jouw team de enige partij die met de software werkt en maak je gebruik van agile methodieken? Gebruik dan iterative versioning.

Welke methode gebruik jij binnen je team? Wat zijn daar de voor- en nadelen van? Zou iterative versioning iets voor jullie zijn? Of waarom juist niet? Laat het weten in de reacties!