import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const ProjDemo=[{
//   title:'Project 1',
//   description:'This is project 1'
// },
// {
//  title:'Project 2',
//  description:'This is project 2'
// },
// {
//  title:'Project 3',
//  description:'This is project 3'
// },
// {
//  title:'Project 4',
//  description:'This is project 4'
// }];

const Projects = () => (
  <Section nopadding id="project">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,title,description,tags,source,visit,image}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          {/* <div>
            <TitleContent>
              Stack
            </TitleContent>
            <TagList>
              {tags.map((res_tag,i)=>(
                <Tag key={i}>{res_tag}</Tag>
              ))}
            </TagList>
          </div> */}
          <UtilityList>
            <ExternalLinks href={visit}>Explore</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
        
      ))}
    </GridContainer>
  </Section>
);

export default Projects;