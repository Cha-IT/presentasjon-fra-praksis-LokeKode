import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image, UnorderedList, ListItem, Appear } from 'spectacle';
import ntnuEks from './assets/ntnu-eks.jpg'

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
            <ListItem></ListItem>
          </Appear>

        </UnorderedList>
      </Slide>

    </Deck>
  );
}

export default App;