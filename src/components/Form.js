/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import {useForm, ValidationError} from '@statickit/react'

function OptInForm() {
  const [state, handleSubmit] = useForm('optInForm')

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Sign Up
      </button>
    </form>
  )
}

export default OptInForm
