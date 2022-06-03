import { useForm, ValidationError } from "@formspree/react";
import useInput from "../../helpers/useInput";
import styled from "styled-components";
import { Button } from "../../elements";
import Map from "./Map";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");
const isComment = value => value.trim() !== "";

const Form = () => {
  //   const [state, handleSubmit] = useForm("mnqwwyrv");
  //   if (state.succeeded) {
  //     return <p>Thank you for your inquiry!</p>;
  //   }

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: enteredComment,
    valueChangeHandler: commentChangeHandler,
    inputBlurHandler: commentBlurHandler,
  } = useInput(isComment);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("Submitted");
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetCommentInput();
  };

  const nameInputClasses = nameInputHasError ? "invalid" : "";
  const emailInputClasses = emailInputHasError ? "invalid" : "";
  const phoneInputClasses = phoneInputHasError ? "invalid" : "";

  return (
    <Section>
      <FormContainer>
        <form action='https://formspree.io/f/mnqwwyrv' method='POST'>
          <FormControl className={nameInputClasses}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={nameChangeHandler}
              value={enteredName}
              onBlur={nameInputBlurHandler}
            />
            {nameInputHasError && (
              <p className='error-text'>Please Enter a Name.</p>
            )}
          </FormControl>
          <FormControl className={emailInputClasses}>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className='error-text'>Email must be a valid Email</p>
            )}
          </FormControl>
          <FormControl className={phoneInputClasses}>
            <label htmlFor='phone'>Phone</label>
            <input
              type='phone'
              id='phone'
              name='phone'
              onChange={phoneChangeHandler}
              value={enteredPhone}
              onBlur={phoneBlurHandler}
            />
            {phoneInputHasError && (
              <p className='error-text'>Please enter a valid Phone Number</p>
            )}
          </FormControl>
          <FormControl>
            <label htmlFor='message'>
              Message <span>*Optional</span>
            </label>
            <textarea id='message' name='message' cols='30' rows='10' />
          </FormControl>
          <Buttons>
            <Button href='/' outline='true'>
              Home
            </Button>
            <button type='submit' className='btn' disabled={!formIsValid}>
              Submit
            </button>
          </Buttons>
        </form>
      </FormContainer>
      <Map />
    </Section>
  );
};

const FormContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 4rem;
  flex: 1;
  width: 100%;

  form {
    width: 100%;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  margin: 0 auto;
  padding: 5rem 0;

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
  }
`;

const FormControl = styled.div`
  margin-bottom: 0.8;
  flex: 1;

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    background: ${props => props.theme.colors.light2};
    transition: all 350ms ease-in-out;
    border-radius: 0.25rem;
    border: none;

    &:focus {
      outline: none;
    }
  }

  label {
    font-family: ${props => props.theme.fonts.title};
    text-align: left;
    display: block;
    font-size: 0.8rem;
    margin: 0 0 5px 3px;
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }

  .error-text {
    color: #b40e0e;
    margin-top: -0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.25rem 0 3rem;

  Button {
    margin: 0;
  }
  .btn {
    background: ${props => props.theme.colors.main1};
    color: ${props => props.theme.colors.dark1};
    padding: 1rem 1.7rem;
    border: none;
    box-shadow: ${props => props.theme.shadows.shadow2};
    font-size: clamp(0.8rem, 3vw, 1.1rem);
    font-family: ${props => props.theme.fonts.accent};
    letter-spacing: ${props => props.theme.letterSpacing.small};
    text-transform: uppercase;
    font-weight: 500;
    /* margin: 2rem; */
    transition: all 350ms ease-in-out;
    margin: 0;

    &:hover {
      background: ${props => props.theme.colors.main2};
      transform: scale(0.95);
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      background-color: #ccc;
      color: #292929;
      border-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export default Form;
