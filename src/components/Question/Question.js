import React from "react";

const Question = () => {
  return (
    <div>
      <main className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button title-first-word"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How does react works?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                ReactJS divides the UI into isolated reusable pieces of code
                known as components. React components work similarly to
                JavaScript functions as they accept arbitrary inputs called
                properties or props. It's possible to have as many components as
                necessary without cluttering your code.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Difference between props and state in react?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Simply put, State is the local state of the component which
                cannot be accessed and modified outside of the component. It's
                equivalent to local variables in a function. Props, on the other
                hand, make components reusable by giving components the ability
                to receive data from their parent component in the form of
                props.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                what is the purpose of using useeffect hook?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The useEffect Hook allows you to perform side effects in your
                components. Some examples of side effects are: fetching data,
                directly updating the DOM, and timers. useEffect accepts two
                arguments.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Question;
