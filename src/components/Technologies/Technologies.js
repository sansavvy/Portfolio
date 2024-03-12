import React from "react";
import {
  DiAngularSimple,
  DiCloud9,
  DiCss3,
  DiDatabase,
  DiDotnet,
  DiFirebase,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiZend,
} from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Explored web development and cloud development.</SectionText>
    <List>
      <ListItem>
        <DiHtml5 size={"3rem"} />
        <ListContainer>
          <ListTitle>HTML 5</ListTitle>
          {/* <ListParagraph>Experience with React and Angular</ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size={"3rem"} />
        <ListContainer>
          <ListTitle>CSS 3</ListTitle>
          {/* <ListParagraph>Experience with C#, LINQ, ASP.NET</ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size={"3rem"} />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          {/* <ListParagraph>
            Experience with ,MySql,SQL server, Postgre SQL
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAngularSimple size={"3rem"} />
        <ListContainer>
          <ListTitle>Angular</ListTitle>
          {/* <ListParagraph>
            Experience with ,MySql,SQL server, Postgre SQL
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMicrosoftazure size={"3rem"} />
        <ListContainer>
          <ListTitle>Azure</ListTitle>
          {/* <ListParagraph>
            Experience with Microsoft Azure and it's services, AzureDevops.
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
