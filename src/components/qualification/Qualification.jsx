import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Information Technology Grad
                </h3>
                <span className="qualification__subtitle">
                  Netaji Subhas University Of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 12/2020 - 05/2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th (High School)</h3>
                <span className="qualification__subtitle">
                  Shri Ram Shiksha Mandir School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 04/2019 - 03/2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th (School)</h3>
                <span className="qualification__subtitle">
                  Shri Ram Shiksha Mandir School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 04/2017 - 03/2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Test Engineer</h3>
                <span className="qualification__subtitle">Wipro</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 04/2025 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Wealth Officer</h3>
                <span className="qualification__subtitle">
                  Bajaj Captial Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10/2024 - 02/2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Dev Intern</h3>
                <span className="qualification__subtitle">UpSkillz</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 07/2022 - 09/2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
