import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const JobsListWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobDetails = styled.ul`
  border: 1px solid #ccc;
`;

const Logo = styled.img`
  width: 10rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled.button`
  background-color: #555555;
  border: none;
  color: #FFFFFF;
  padding: 0.9375rem 2rem;
  text-align: center;
  margin: 1rem 0;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
`;

function JobsList(props) {
  const { jobs, handleClick } = props;

  return (
    <JobsListWrapper>
     <SectionWrapper>
      {
        jobs.map(job => {
          return (
            <JobDetails key={job.id}>
              <Header>
                <a href={job.company_url} target="_blank" rel="noopener noreferrer"><h3>Company: {job.company}</h3></a>
                <BackButton onClick={handleClick}>Back to Search</BackButton>
              </Header>
              <Logo src={job.company_logo} alt="no image" />
              <h3> Title: {job.title} </h3>
              <h4> Location: {job.location} </h4>
              { ReactHtmlParser(job.description) }
            </JobDetails>
          );
        })
      }
     </SectionWrapper>
    </JobsListWrapper>
  );

}

const mapToState = (state) => {
  return {
    jobs: state.jobs,
  }
};

const mapToProps = (dispatch, ownProps) => {
  return {
    handleClick() {
      ownProps.history.push('/')
    }
  }
};

const searchFormContainer = connect(mapToState, mapToProps)(JobsList);

export default searchFormContainer;
