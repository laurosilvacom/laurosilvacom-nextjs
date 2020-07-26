/* eslint-disable react/button-has-type */
import React from 'react'

const REACT_COMPONENTS_FORM_ID = '1554269'
const OVERREACTED_FORM_ID = '1554269'

class Signup extends React.Component {
  render() {
    let form
    const {cta} = this.props
    switch (cta) {
      case 'react':
        form = {
          id: REACT_COMPONENTS_FORM_ID,
          title: `Learn to Build Resilient React Components`,
          subTitle: `Get a one week email course and learn how I think about writing React components based on 4 Principles.`,
          buttonText: `Start Learning`,
        }
        break
      default:
        form = {
          id: OVERREACTED_FORM_ID,
          title: `Join the Newsletter`,
          subTitle: `I'm pretty into React, JavaScript, and tooling. My weekly emails reflect this preference. Get an update when something new comes out by signing up!`,
          buttonText: `Subscribe`,
        }
    }
    return (
      <div className="max-w-screen-xl mx-auto lg:py-16 m-10">
        <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1 max-w-lg">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              {form.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              {form.subTitle}
            </p>
          </div>

          <div className="mt-8  xl:mt-0 xl:ml-8 text-white">
            <div data-element="fields">
              <ul
                className="text-red-500"
                data-element="errors"
                data-group="alert"
              ></ul>
              <form
                action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
                method="post"
              >
                <div className="text-white sm:flex">
                  <input
                    aria-label="Your first name"
                    name="fields[first_name]"
                    placeholder="Your first name"
                    type="text"
                    required
                    className="appearance-none w-full px-5 py-3 mt-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out mr-4"
                  />
                  <input
                    name="email_address"
                    aria-label="Your email address"
                    placeholder="Your email address"
                    required
                    type="email"
                    className="appearance-none w-full px-5 py-3 mt-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                  />
                  <div className="mt-3 rounded-md shadow  sm:ml-3 sm:flex-shrink-0">
                    <button
                      ata-element="submit"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
                    >
                      {form.buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <p className="mt-3 text-sm leading-5 text-indigo-200">
              You can always unsubscribe!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
