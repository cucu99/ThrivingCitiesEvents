// Library imports
import React, { Component } from 'react';
import styled from 'styled-components';
// Function imports
import { Row } from '../../helpers/grid';
import { SecondaryH2 } from '../../helpers/typography';
import { FormatText } from '../../helpers/utility';
import { ButtonPrimary, ButtonText } from '../../Button';
// Booking container style
const BookingWrapper = styled.div`
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    rgba(41, 152, 255, 0.8),
    rgba(86, 67, 250, 0.8)
  );
`;
// Booking content style
const BookingContainer = styled.div`
  /* Linear gradient over image */
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ),
    url(${props => props.imgURL2});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);

  height: 50rem;
`;

// Form container style
const BookFormContainer = styled.div`
  width: 50%;
  padding: 6rem;
  padding-top: 4rem;
`;

// Form style
const BookForm = styled.form``;
// Form title style
const FormSecondaryH2 = SecondaryH2.extend`
  font-size: 2rem;
`;
// Group of inputs style
const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

// Label style
const BookLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`;

// Input style
const BookInput = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid rgba(41, 152, 255, 1);
  }

  &::placeholder {
    color: #999;
  }

  &:placeholder-shown + ${BookLabel} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  &:focus:invalid {
    border-bottom: 3px solid rgba(255, 45, 20, 1);
  }
`;

const RadioContainer = styled.div`
  width: 50%;
  display: inline-block;
`;
const RadioLabel = styled.label`
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
`;

const RadioInput = styled.input`
  margin-left: 1rem;
`;

const ButtonContainer = styled.div`
  width: 90%;
`;

class Booking extends Component {
  // Get events from react router (index.js)
  state = {
    event: this.props.location.state.event
  };
  render() {
    return (
      <BookingWrapper>
        <Row marginBottom="4rem">
          {/* Pass image props to styled component */}
          <BookingContainer imgURL2={this.state.event.imgURL2}>
            <BookFormContainer>
              <BookForm action="#">
                <FormatText textAlign="left" marginBottom="2.5rem">
                  <FormSecondaryH2>
                    Sign up for {this.state.event.title}!
                  </FormSecondaryH2>
                </FormatText>

                <FormGroup>
                  <BookInput
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    required
                  />

                  <BookLabel for="name">Full Name</BookLabel>
                </FormGroup>

                <FormGroup>
                  <BookInput
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required
                  />

                  <BookLabel for="email">Email address</BookLabel>
                </FormGroup>

                <FormGroup>
                  <RadioContainer>
                    <RadioLabel for="subscribe_no">
                      {/* <RadioButtonStyle /> */}
                      Don't subscribe
                      <RadioInput
                        type="radio"
                        id="subscribe_no"
                        name="subscription"
                      />
                    </RadioLabel>
                  </RadioContainer>

                  <RadioContainer>
                    <RadioLabel for="subscribe_yes">
                      {/* <RadioButtonStyle /> */}
                      Subscribe for more events
                      <RadioInput
                        type="radio"
                        id="subscribe_yes"
                        name="subscription"
                        checked
                      />
                    </RadioLabel>
                  </RadioContainer>
                </FormGroup>
                <ButtonContainer>
                  <FormatText marginTop="8rem">
                    <ButtonText to="/">&larr; back</ButtonText>
                    <ButtonPrimary
                      float="right"
                      type="submit"
                      color1="41, 152, 255"
                      color2="86, 67, 250"
                      color="#fff"
                      bs="rgba(86, 67, 250, 0.3)"
                      to="#"
                    >
                      Sign up
                    </ButtonPrimary>
                  </FormatText>
                </ButtonContainer>
              </BookForm>
            </BookFormContainer>
          </BookingContainer>
        </Row>
      </BookingWrapper>
    );
  }
}

export default Booking;
