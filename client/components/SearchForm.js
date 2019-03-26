import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { writeSearch } from '../store';

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const KeyInput = styled.input`
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: solid;
  height: 4vh;
  font-size: 2vh;
`;

const SearchButton = styled.button`
  margin-top: 4vh;
  margin-left: auto;
  margin-right: auto;
  display:block;
  width:40vh;
  height:40vh;
  line-height: 3.125rem;
  border: 0.125rem solid #f5f5f5;
  border-radius: 50%;
  color:#f5f5f5;
  text-align:center;
  text-decoration:none;
  background: #464646;
  box-shadow: 0 0 0.1875rem gray;
  font-size: 1.25rem;
  font-weight:bold;
`;

function SearchForm(props) {
  const { searchInput, handleSubmit, handleChange } = props;

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <KeyInput
             id="search-input"
             type="text"
             placeholder="Enter key words such as javascript..."
             name="search"
             onChange={handleChange}
             value={searchInput}
          />
          <SearchButton>Click for Jobs!</SearchButton>
        </div>
      </form>
    </FormWrapper>
  )
}

const mapToState = (state) => {
  return {
    searchInput: state.searchInput,
  }
};

const mapToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(ev) {
      console.log('hit handleSubmit')
    },
    handleChange(ev) {
      const action = writeSearch(ev.target.value)
      dispatch(action)
    }
  }
};

const searchFormContainer = connect(mapToState, mapToProps)(SearchForm);

export default searchFormContainer;
