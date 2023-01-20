import React, { useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Graph } from "../Graph/Graph";
import "./DesignMethoden.css";
import { Dropdown } from "./Dropdown";
import { color, timeFormat } from "d3";
import { useData } from "../Graph/useData";
import { QuestionMark } from "./QuestionMark";
import { Tabelle } from "../Graph/Tabelle";
import { useDataFede } from "../Graph/useDataFede";
import {
  optionsAge,
  options,
  methodenTabelle,
  initialValueAge,
  initialValueAnzeige,
  initialValue,
  initialValueIntervall,
  initialValueTabelle,
  dateFormatter,
  initialDate,
} from "./optionsCollection";

export const MethodenDiv = () => {
  //Const to show and hide the line for the method ----------------------------------------------------------
  const [isDatenstand, setDatenstand] = useState(false);
  const [isEpiforecast, setEpiforecast] = useState(false);
  const [isILM, setILM] = useState(true);
  const [isKIT, setKIT] = useState(false);
  const [isLMU, setLMU] = useState(false);
  const [isNowcast, setNowcast] = useState(false);
  const [isRIVM, setRIVM] = useState(false);
  const [isRKI, setRKI] = useState(false);
  const [isSU, setSU] = useState(false);
  const [isSZ, setSZ] = useState(false);

  //Hide and Show the selection section for methods ----------------------------------------------------------
  const [label, setLabel] = useState("Methoden einblenden");
  const [isVisible, setIsVisible] = useState(false);
  
  function handleClick() {
    setIsVisible(!isVisible);
    setLabel(isVisible ? "Methoden einblenden" : "Methoden ausblenden");
  }

  //Function to show and hide the line for the method ----------------------------------------------------------
  function handleClickDatenstand() {
    setDatenstand(!isDatenstand);
  }
  function handleClickEpi() {
    setEpiforecast(!isEpiforecast);
  }
  function handleClickILM() {
    setILM(!isILM);
  }
  function handleClickKIT() {
    setKIT(!isKIT);
  }
  function handleClickLMU() {
    setLMU(!isLMU);
  }
  function handleClickNowcast() {
    setNowcast(!isNowcast);
  }
  function handleClickRIVM() {
    setRIVM(!isRIVM);
  }
  function handleClickRKI() {
    setRKI(!isRKI);
  }
  function handleClickSU() {
    setSU(!isSU);
  }
  function handleClickSZ() {
    setSZ(!isSZ);
  }

  // const for the selection section on the left side of the window ----------------------------------------------------------

  const [menuAge, setmenuAge] = useState(initialValueAge);
  const [anzeige, setAnzeige] = useState(initialValueAnzeige);
  const [selectedScope, setScope] = useState(initialValue);
  const [date, setDate] = useState(initialDate);
  const [intervall, setIntervall] = useState(initialValueIntervall);

  //Importing the data for the graph

  const realData = useDataFede(
    "ILM-prop",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const data = useData(
    "ILM-prop",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  ); // here we still have to figure out how we set the scope of the axes
  const EPIdata = useData(
    "Epiforecasts-independent",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const ILMdata = useData(
    "ILM-prop",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const KITdata = useData(
    "KIT-simple_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const LMUdata = useData(
    "LMU_StaBLab-GAM_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const Nowcastdata = useData(
    "NowcastHub-MeanEnsemble",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const RIVMdata = useData(
    "RIVM-KEW",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const RKIdata = useData(
    "RKI-weekly_report",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const SUdata = useData(
    "SU-hier_bayes",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const SZdata = useData(
    "SZ-hosp_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );

  // Tabelle -----------------------------------

  // Section ein und auschalten
  const [dataTabelleMethode, setdataTabelleMethode] = useState(initialValueTabelle);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };

  //Data import











  //_________________________________
  return (
    <div>
      <div id="menuBand">
        <div id="datenstand" className="menuOptionen">
          <label className="einführung">Datenstand</label>
          <div id="inhalt">
            <div className="container">
              <label>Datenstand:</label>
              <div>
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  max={initialDate}
                  min="2021-07-01"
                />
                {/* Man kann ein anderes Datum nicht auswählen. Jedoch werden sie trz. angezeigt. @Lena, kannst du dir das mal anschauen? */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="filter" className="menuOptionen">
          <t className="einführung">Filter</t>
          <div id="inhalt">
            <div>
              <label for="scope-select">Bundesland:</label>
              {/* <Dropdown
                options={options}
                id="scope-select"
                selectedValue={selectedScope}
                onSelectedValueChange={setScope}
              /> */}
              <select
                id={"scope-select"}
                onChange={(event) => setScope(event.target.value)}
              >
                {options.map(({ value, label }) => (
                  <option value={value} selected={value === selectedScope}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label for="scope-select">Ater</label>
              <Dropdown
                options={optionsAge}
                id="age-select"
                menuAge={menuAge}
                onSelectedValueChange={setmenuAge}
              />
            </div>
          </div>
        </div>

        <div id="anzeige" className="menuOptionen">
          <t className="einführung">Anzeige</t>
          <div id="inhalt">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <label>Pro 100.000: </label>
              <input
                type="radio"
                name="größe"
                value="hunderttausend"
                onChange={(e) => setAnzeige(e.target.value)}
                checked={anzeige === "hunderttausend"}
              />
              <label>absolute Zahlen: </label>{" "}
              <input
                type="radio"
                name="größe"
                value="absoluteZahlen"
                onChange={(e) => setAnzeige(e.target.value)}
                checked={anzeige === "absoluteZahlen"}
              />
            </div>
          </div>
        </div>

        <div id="unsicherheitsintervall" className="menuOptionen">
          <t className="einführung">Unsicherheitsintervall</t>
          <div id="inhalt">
            <div>
              95 % :{" "}
              <input
                type="radio"
                name="unsicherheitsintervall"
                value="FÜNFundNEUNZIG"
                onChange={(e) => setIntervall(e.target.value)}
                defaultChecked
              />
              50 % :{" "}
              <input
                type="radio"
                name="unsicherheitsintervall"
                value="FÜNFZIG"
                onChange={(e) => setIntervall(e.target.value)}
              />
              keines :{" "}
              <input
                type="radio"
                name="unsicherheitsintervall"
                value="keines"
                onChange={(e) => setIntervall(e.target.value)}
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>

      {/* Graph ----------------------------------------------------------- */}
      <div className="GraphundMethoden">
        <Graph
          className="graph"
          isVisible={isVisible}
          isDatenstand={isDatenstand}
          isEpiforecast={isEpiforecast}
          isILM={isILM}
          isKIT={isKIT}
          isLMU={isLMU}
          isNowcast={isNowcast}
          isRIVM={isRIVM}
          isRKI={isRKI}
          isSU={isSU}
          isSZ={isSZ}
          data={data}
          EPIdata={EPIdata}
          ILMdata={ILMdata}
          KITdata={KITdata}
          LMUdata={LMUdata}
          Nowcastdata={Nowcastdata}
          RIVMdata={RIVMdata}
          RKIdata={RKIdata}
          SUdata={SUdata}
          SZdata={SZdata}
          menuAge={menuAge}
          selectedScope={selectedScope}
          realData={realData}
        />

        {/* Methoden ----------------------------------------------------------- */}

        <div className="Methoden">
          <button className="RoundButton" onClick={handleClick}>
            {isVisible ? (
              <FiChevronRight className="iconPfeil" />
            ) : (
              <FiChevronLeft className="iconPfeil" />
            )}
          </button>
          <label className="methodenEinblenden" onClick={handleClick}>
            {label}
          </label>
        </div>

        {isVisible && (
          <table>
            <div className="auswahl">
              <div
                className={`container ${isDatenstand ? "moved" : ""}`}
                onClick={handleClickDatenstand}
              >
                <p
                  className={`datenstand ${isDatenstand ? "bold" : ""}`}
                  onClick={handleClickDatenstand}
                >
                  Datenstand
                </p>
              </div>

            <tr>
            
            <div
              className={`container ${isEpiforecast ? "moved" : ""}`}
              onClick={handleClickEpi}
            >
            <td class="linelayout">
              <hr
                className="line"
                style={{
                  backgroundColor: "rgb(0,200,100)",
                  height: "1px",
                  height: "3.4px",
                  width: "30px",
                }}
              />
            </td>

                  {/* karina*/}

                  <td>
                    <p
                      className={`Epiforecast ${isEpiforecast ? "bold" : ""}`}
                      onClick={handleClickEpi}
                    >
                      independent Epiforecast
                    </p>
                  </td>
                  <td>
                    <div
                      class="hovertext questionmark"
                      data-hover="hover text 1"
                    >
                      <div class="">
                        <p> ?</p>
                      </div>
                    </div>
                  </td>
                </div>
              </tr>
              {/* karina*/}

              <div
                className={`container ${isILM ? "moved" : ""}`}
                onClick={handleClickILM}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`ILM ${isILM ? "bold" : ""}`}
                  onClick={handleClickILM}
                >
                  ILM prop
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div
                className={`container ${isKIT ? "moved" : ""}`}
                onClick={handleClickKIT}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`KIT ${isKIT ? "bold" : ""}`}
                  onClick={handleClickKIT}
                >
                  KIT Simple Nowcast
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div
                className={`container ${isLMU ? "moved" : ""}`}
                onClick={handleClickLMU}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`LMU ${isLMU ? "bold" : ""}`}
                  onClick={handleClickLMU}
                >
                  LMU StaBlab-GAM Nowcast
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div
                className={`container ${isNowcast ? "moved" : ""}`}
                onClick={handleClickNowcast}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`Nowcast ${isNowcast ? "bold" : ""}`}
                  onClick={handleClickNowcast}
                >
                  NowcastHub MeanEnsemble
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div
                className={`container ${isRIVM ? "moved" : ""}`}
                onClick={handleClickRIVM}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`RIVM ${isRIVM ? "bold" : ""}`}
                  onClick={handleClickRIVM}
                >
                  RIVM Weekly Report
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div
                className={`container ${isRKI ? "moved" : ""}`}
                onClick={handleClickRKI}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`RKI ${isRKI ? "bold" : ""}`}
                  onClick={handleClickRKI}
                >
                  RKI Weekly Report
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div
                className={`container ${isSU ? "moved" : ""}`}
                onClick={handleClickSU}
              >
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />
                <p
                  className={`SU ${isSU ? "bold" : ""}`}
                  onClick={handleClickSU}
                >
                  SU hier bayes
                </p>
                <QuestionMark explanation="Erklärung" />
              </div>

              <div onClick={handleClickSZ} className="NervNicht">
                <p
                  className={`SZ container ${isSZ ? "bold moved" : ""}`}
                  onClick={handleClickSZ}
                  style={{
                    lineHeight: "1px",
                    position: "absolute",
                    right: "170px",
                    top: "23px",
                  }}
                >
                  SZ Nowcast
                </p>
                <hr
                  className="line"
                  style={{
                    backgroundColor: "rgb(0,200,100)",
                    height: "1px",
                    // verticalAlign: "middle",
                    position: "absolute",
                    left: "250px",
                    top: "28.9px",
                    height: "3.4px",
                    width: "30px",
                  }}
                />

                <QuestionMark
                  explanation="Erklärung"
                  style={{ position: "absolute", left: "1100px" }}
                />
              </div>
            </div>
          </table>
        )}
      </div>


      <section id="tabelle" style={{ position: "absolute", top: "600px" }}>
        <div class="table">
          <button onClick={toggleCollapse}> Tabelle anzeigen</button>
          {isCollapsed && (
            <div
              class={`collapse ${!isCollapsed ? "show" : ""}`}
              id="collapseExample"
            >
              <div class="card card-body card-table">
                <Dropdown
                  options={methodenTabelle}
                  id="methodenSelectTabelle"
                  dataTabelle={dataTabelleMethode}
                  onSelectedValueChange={setdataTabelleMethode}
                />
                <Tabelle menuAge={menuAge} selectedScope={selectedScope} intervall={intervall} anzeige={anzeige} date={date} dataTabelleMethode={dataTabelleMethode}/>
              </div>
            </div>
          )}
        </div>
      </section>


    </div>
  );
};
