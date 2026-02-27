import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image, UnorderedList, ListItem, Appear } from 'spectacle';
import ntnuEks from './assets/ntnu-eks.jpg'
import pcRack from './assets/pc-rack.jpg'
import pultSluppen from './assets/pult-sluppen.jpg'
import DA from './assets/DA.webp'
import rettssal from './assets/rettssal.jpg'
import magasin from './assets/magasin.jpg'
import skjermhav from './assets/skjermhav.jpg'
import pakke from './assets/pakke-domstol.jpg'

function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide>

        <FlexBox height="100%" flexDirection="column">
          <Heading>Utplassering uke 6 & 7</Heading>
          <Text>Laget av Loke</Text>
        </FlexBox>

      </Slide>

      {/* Slide 2: Uke 6 Tittel */}
      <Slide>

        <FlexBox height="100%" alignItems="center" justifyContent="center" flexDirection="column">
          <Heading>Uke 6 - NTNU Eksamensbygget på Sluppen</Heading>
          <Image src={ ntnuEks } width="40%" alt="Bilde av NTNU eksamensbygget" />
        </FlexBox>

      </Slide>

      {/* Slide 3: Uke 6 Innhold */}
      <Slide>

        <Heading>Hva gjorde jeg?</Heading>

        <FlexBox flexDirection="row" width="90%" justifyContent="space-around" alignItems="center">
          <UnorderedList>

            <Appear>
              <ListItem>Tanking av bærbare pc-er</ListItem>
            </Appear>

            <Appear>
              <ListItem>Var med i møter</ListItem>
            </Appear>

            <Appear>
                <ListItem>Diskuterte bestilling av 300 headset</ListItem>
            </Appear>

            <Appear>
              <ListItem>Fikk se på AD-oppsett</ListItem>
            </Appear>

          </UnorderedList>

          <Image src={pcRack} alt="Bilde av meg som sitter ved en pult" width="35%" />
        </FlexBox>

      </Slide>

      {/* Slide 4: Uke 6 Refleksjon */}
      <Slide>

          <Heading>Refleksjon</Heading>

          <FlexBox flexDirection="row" width="90%" justifyContent="space-evenly" alignItems="center">
            <Text>Det var ikke så mye å gjøre siden vi ikke var i en eksamensperiode. Ikke så mange som jobber der. Fint sosialt miljø, kan være et greit sted å søke.</Text>
            <Image src={pultSluppen} alt="Bilde av pc rack hvor jeg satte pc-ene på lading" width="35%" />
          </FlexBox>

      </Slide>

      {/* Slide 5: Uke 7 Tittel */}
      <Slide>

        <FlexBox height="100%" justifyContent="center" alignItems="center" flexDirection="column">
          <Heading>Uke 7 - Domstoladministrasjonen</Heading>
          <Image src={DA} alt="Bilde av inngangen til domstoladministrasjonen" width="35%" />
        </FlexBox>

      </Slide>

      {/* Slide:6 Uke 7 Brukersenteret */}
      <Slide>

        <Heading>Brukersenteret</Heading>

          <UnorderedList>

            <Appear>
              <ListItem>Lyttet på samtaler med brukere</ListItem>
            </Appear>

            <Appear>
              <ListItem>Håndterte innkommende og utgående pakker</ListItem>
            </Appear>

            <Appear>
              <ListItem>Løste saker og bestillinger innsendt av brukere</ListItem>
            </Appear>

            <Appear>
              <ListItem>Byttet ut defekt utstyr</ListItem>
            </Appear>

            <Appear>
              <ListItem>Lagde nye ikoner for brukersenterportalen</ListItem>
            </Appear>

          </UnorderedList>

      </Slide>

      {/* Slide 7: Uke 7 Bildeslide */}
      <Slide>

        <Heading>Bilder</Heading>

        <FlexBox width="90%" height="100%" justifyContent="space-around" alignItems="center" flexDirection="row">
          <Image src={pakke} alt="Bilde av en pakke" width="25%" />
          <Image src={skjermhav} alt="Bilde av skjermer som lå på lageret i kjelleren" width="40%" />
        </FlexBox>

      </Slide>

      {/* Slide 8: Uke 7 Frostatinget */}
      <Slide>

        <Heading>Frostatinget</Heading>

          <UnorderedList>

            <Appear>
              <ListItem>Fikk en guide av noen av rettssalene.</ListItem>
            </Appear>

            <Appear>
              <ListItem>Så på oppsett av utstyr</ListItem>
            </Appear>

            <Appear>
              <ListItem>Ble med å teste utstyret i en av de store rettssalene</ListItem>
            </Appear>

            <Appear>
              <ListItem>Fikk se kjelleren av bygget som var fra krigstiden</ListItem>
            </Appear>

          </UnorderedList>

      </Slide>

      {/* Slide 9: Uke 7 BildeSlide */}
      <Slide>

        <Heading>Bilder</Heading>

        <FlexBox width="90%" height="100%" justifyContent="space-around" alignItems="center" flexDirection="row">
          <Image src={rettssal} alt="Bilde av en av rettssalene jeg fikk se på frostatinget" width="40%" />
          <Image src={magasin} alt="Bilde av et magasin vi fant i kjelleren på frostatinget" width="40%" />
        </FlexBox>

      </Slide>

      {/* Slide 10: Uke 7 Refleksjon */}
      <Slide>

        <Heading>Refleksjon</Heading>
        <FlexBox width="85%" flexDirection="column">
          <Text>Jeg synes det var veldig gøy å være på DA. Det var varierte arbeidsoppgaver og ofte noe å gjøre. De hadde et godt sosialt miljø.</Text>
          <Text>Jeg fikk lærlingplass der. Det er ikke lenger aktuelt å søke der siden de allerede har tatt inn nye lærlinger.</Text>
        </FlexBox>

      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent="center" alignItems="center">
          <Heading>Takk for meg</Heading>
        </FlexBox>
      </Slide>

    </Deck>
  );
}

export default App;