import {  timeFormat } from "d3";

export const optionsAge = [
    { value: "00+", label: "00+" },
    { value: "00-04", label: "00-04" },
    { value: "05-14", label: "05-14" },
    { value: "15-34", label: "15-34" },
    { value: "35-59", label: "35-59" },
    { value: "60-79", label: "60-79" },
    { value: "80+", label: "80+" },
  ];

  export const options = [
    { value: "DE", label: "Deutschland" },
    { value: "DE-SH", label: "Schleswig-Holstein" },
    { value: "DE-HH", label: "Hamburg" },
    { value: "DE-NI", label: "Niedersachsen" },
    { value: "DE-HB", label: "Bremen" },
    { value: "DE-NW", label: "Nordrhein-Westfahlen" },
    { value: "DE-HE", label: "Hessen" },
    { value: "DE-RP", label: "Rheinland-Pfalz" },
    { value: "DE-BW", label: "Baden-Württemberg" },
    { value: "DE-BY", label: "Bayern" },
    { value: "DE-SL", label: "Saarland" },
    { value: "DE-BE", label: "Berlin" },
    { value: "DE-BB", label: "Brandenburg" },
    { value: "DE-MV", label: "Mecklenburg-Vorpommern" },
    { value: "DE-SN", label: "Sachsen" },
    { value: "DE-ST", label: "Sachsen-Anhalt" },
    { value: "DE-TH", label: "Thüringen" },
  ];

  export const methodenTabelle = [
    { value: "Epiforecasts-independent", label: "independent Epiforecasts" },
    { value: "ILM-prop", label: "ILM prop" },
    { value: "KIT-simple_nowcast", label: "KIT Simple Nowcast" },
    { value: "LMU_StaBLab-GAM_nowcast", label: "LMU StaBLab-GAM Nowcast" },
    { value: "NowcastHub-MeanEnsemble", label: "NowcastHub MeanEnsemble" },
    { value: "RIVM-KEW", label: "RIVM Weekly Report" },
    { value: "RKI-weekly_report", label: "RKI Weekly Report" },
    { value: "SU-hier_bayes", label: "SU hier bayes" },
    { value: "SZ-hosp_nowcast", label: "SZ Nowcast" },
  ]

export const initialValueAge = "00+";
export const initialValueAnzeige = "absoluteZahlen";
export const initialValue = "Deutschland";


export const initialValueIntervall = "keines";
export const initialValueTabelle = "KIT-simple_nowcast";

export const dateFormatter = timeFormat("%Y-%m-%d");
export const initialDate = dateFormatter(new Date());