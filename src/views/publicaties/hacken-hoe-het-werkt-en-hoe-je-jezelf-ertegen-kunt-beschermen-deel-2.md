---
title: "Hacken: hoe het werkt en hoe je jezelf ertegen kunt beschermen deel 2"
description: Tweede deel in een serie over hacken dat ik schreef voor het blog van Incentro. Dit artikel werd op [de site van Incentro](https://www.incentro.com/nl/blog/hacken-hoe-het-werkt-en-hoe-je-jezelf-ertegen-kunt-beschermen-deel-2/) gepubliceerd.
tags: post
---
Als je dit leest is de kans groot dat je dat doet via een apparaat dat verbonden is met het internet via wifi of een andere draadloze verbinding zoals bijvoorbeeld het 4g netwerk van je telefoon. Zoals in het vorige artikel in de serie Hacken: hoe het werkt en hoe je jezelf ertegen kunt beschermen is aangekondigd, zal het dit keer gaan over wifi.

[Volgens Tele2](https://www.tele2.nl/klantenservice/thuis/internet/davolink-wifi-instellen/ "Tele2 over wachtwoorden") bestaat een veilig wachtwoord uit letters (hoofd- en kleine letters) en cijfers, maar in de praktijk maakt de vorm van je wachtwoord weinig uit voor de veiligheid van je wifi netwerk. Natuurlijk is het verstandiger om niet je naam of ander voor de hand liggend persoonlijk feitje als wachtwoord te nemen, omdat iemand die gewoon probeert in te loggen hier het eerst mee zal gokken. Tegen een stelselmatige wifi hack bescherm je jezelf geenszins met een sterk wachtwoord. In dit artikel gaan we het hebben over hoe hackers dan wél inbreken op wifi netwerken en wat je kunt doen om dit te voorkomen.

## Hoe hack je een wifi netwerk dan?
Om te begrijpen hoe een wifi netwerk gehackt kan worden is het eerst belangrijk om te weten hoe de beveiliging van een wifi netwerk werkt. De meeste moderne router staan standaard ingesteld om het netwerk te beveiligen met een WPA2 encryptie. Om toegang te krijgen tot het netwerk type je op het wachtwoord in op je computer. Die versleuteld het wachtwoord en stuurt dit in een pakketje naar je router. Je router kijkt of je wachtwoord klopt en stuurt dan een pakketje terug met daarin een bevestiging, ook wel handshake genoemd.

## Oke, er vliegen pakketjes heen en weer, en nu?
Normaal gesproken ontvangt een wifi antenne alleen de pakketjes die aan jouw computer "geadresseerd" zijn. Je kunt echter vrij eenvoudig met een zogenaamde packetsniffer alle pakketjes in de buurt bekijken. [Wireshark](https://www.wireshark.org/ "Officiele website van Wireshark") is een veelgebruikte tool hiervoor. Hiermee kun je dus het pakketje dat jij verstuurd met het wachtwoord en het pakketje met de bevestiging onderscheppen en inzien. Op het moment dat je dus een poging tot inloggen op het netwerk voorbij ziet komen en een bevestiging terug ziet gaan, weet je dat het pakketje het (weliswaar versleutelde) wachtwoord bevat.

Vervolgens kun je met een brute-force tool als bijvoorbeeld [Cowpatty](http://www.willhackforsushi.com/?page_id=50 "Artikel op Will Hack for Sushi over Cowpatty") het wachtwoord decoderen en voila toegang tot het netwerk is een feit.

## Eenmaal in hetzelfde netwerk, wat kan een hacker van mij stelen?
Als een hacker eenmaal verbonden is met hetzelfde netwerk als jij, kan hij dus op dezelfde wijze pakketjes onderscheppen die jij (via de router) naar websites verstuurd. Pakketjes met je Facebook wachtwoord bijvoorbeeld. Of erger nog, de pakketjes die je verstuurd naar je internetbankieren omgeving. Wellicht toch een goed idee om nog eens na te denken voordat je op een openbaar netwerk even wat geld overmaakt.

## Hoe kun je jezelf beschermen?
Om deze vorm van pakket onderschepping te voorkomen, kun je gebruik maken van een [VPN (virtual private network)](http://www.makeuseof.com/tag/vpn-tunnel-set/ "Artikel met uitleg over VPN op Make Use Of") tunnel. Deze zorgt er eigenlijk voor dat jouw apparaat en de router samen een nieuw mini netwerkje beginnen, waarop weer een andere vorm van encryptie wordt toegepast, zodat mensen die "meeluisteren" de pakketjes niet kunnen inzien.

## Maar...
Als iemand toegang heeft tot je computer is er geen veiligheidsmaatregel die je meer kan redden. Het opzoeken van een wifi wachtwoord in je computer is [zo gedaan](https://www.microsoft.com/surface/nl-nl/support/networking-and-connectivity/how-to-find-your-wireless-network-password?os=windows-10 "Artikel van Microsoft over het achterhalen van Wifi wachtwoorden."). Gelukkig gaat het volgende deel van Hacken: hoe het werkt en hoe je jezelf ertegen kunt beschermen over hoe je computer zelf beter kunt beveiligen. Zorg dus dat je geen enkel deel mist en houd Now Digital in de gaten!

## Samengevat
Over het algemeen is het verstandig om de volgende tips ter harte te nemen, als het gaat om internetten via wifi:

- Zorg ervoor dat je laptop/computer zelf goed beveiligd is
- Zorg dat (in ieder geval op je werk) een VPN tunnel wordt gebruikt op het wifi netwerk
- Maak nooit gebruik van openbare, onversleutelde netwerken