import React from "react";
import styled from "styled-components";
import SmallTitle from "../components/SmallTitle";
import { Title } from "../components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "../components/ResumeItem";
import Button from '@mui/material/Button';

export const ResumeView = () => {
  const work = <WorkIcon />;
  const school = <SchoolIcon />;
  return (
    <MainLayout>
      <ResumeViewStyled>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/12E8Gr7sM_h5CyQqqsrQ-VA5_IfcV_KYE/view?usp=sharing"
        >                
        <Button>CLICK HERE FOR FULL RESUME</Button>
        </a>
          <div className="smalltitle">
            <SmallTitle icon={work} title={"Experience"} />
          </div>
          <div className="resume-content">
            <ResumeItem
              title={"Marketing Analyst"}
              subtitle={"FutureStar Sports Agency"}
              description={
                "Development and execution of marketing campaigns. Creation of marketing goals related to customer acquisition, lead generation and revenue. Producing and editing content for social media posts, videos, e-books, infographics, presentation decks and webinars. Cultivating relationships with potential customers such as prospects and leads—to build the company's clientele. Monitoring social media traffic to measure the public's perception of the company's brand. Testing the quality of emails, social media posts and the company's landing page. Analyzing the results of campaigns and making changes to outlast competitors "
              }
              year={"Feb 2021 - Jan 2022"}
            />
            <ResumeItem
              title={"Sales Administrator"}
              subtitle={"Sekur Merchant Solutions"}
              description={
              "Services existing accounts, obtains orders, and establishes new accounts by planning and organizing daily work schedule to call on existing or potential sales outlets and other trade factors.Keeps management informed by submitting activity and results reports, such as daily call reports, weekly work plans, and monthly and annual territory analyses.Monitors competition by gathering current marketplace information on pricing, products, new products, delivery schedules, and merchandising techniques."
              }
              year={"Apr 2021 - Dec 2021"}
            />
          </div>
          <div className="smalltitle">
            <SmallTitle
              className="smalltitle"
              icon={school}
              title={"Education"}
            />
          </div>
          <div className="education-content">
            <ResumeItem
              title={"BBA (Marketing)"}
              subtitle={"Georgia Southern University"}
              description={
                "Over the course of my degree, not only did I learn how to code but also theory behind it. Data structures, (linked lists, binary trees, dictionaries, etc), useful algorithms (e.g. Dijkstra's algorithm), the ways data is stored and interpreted at the bit and byte level , code design patterns, parallel programming & many more skills that has set me up for the rest of my career.  "
              }
              year={"Sept 2017 - Apr 2020"}
            />
          </div>
          <div className="education-content">
            <ResumeItem
              title={"Business Commerce (Marketing)"}
              subtitle={"Carleton University"}
              description={
                "Over the course of my degree, not only did I learn how to code but also theory behind it. Data structures, (linked lists, binary trees, dictionaries, etc), useful algorithms (e.g. Dijkstra's algorithm), the ways data is stored and interpreted at the bit and byte level , code design patterns, parallel programming & many more skills that has set me up for the rest of my career.  "
              }
              year={"Sept 2021 - Apr 2022"}
            />
          </div>
        </InnerLayout>
      </ResumeViewStyled>
    </MainLayout>
  );
};

const ResumeViewStyled = styled.header`
  height: max-content;
  width: 100%;
  .smalltitle {
    padding: 2rem 0;
  }
  .resume-content,
  .education-content {
    border-left: 2px solid var(--border-color);
  }
`;
