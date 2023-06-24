import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];
const data = [
  {
    text: "Passed AZ 900 Microsoft Azure Fundamentals",
  },
  {
    text: "Passed AI 900 Microsoft Azure AI Fundamentals",
  },
  {
    text: "Passed DP 900 Microsoft Azure DP Fundamentals",
  },
  {
    text: "Passed AZ 204 Microsoft Azure Developer Associate Certification",
  },
];
const Acomplishments = () => (
  <Section>
    <SectionTitle>Certification Done </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{card.number}+</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
