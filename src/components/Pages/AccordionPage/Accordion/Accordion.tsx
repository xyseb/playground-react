import React, { useContext } from 'react';
import './Accordion.scss';

import { CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';

function Accordion() {
  const { centre } = useContext(CentreContext) as CentreContextType;
  const centreNameElement = (centre.Nom === undefined)
        ? <h2>Centre "anonyme"</h2>
        : <h2>{centre.Nom}</h2>;

  let centreParamElement, centreNameElementChildren
  if (centre.Params === undefined) {
    centreParamElement = <ul><li>Paramètres de centre non chargés. Click le bouton 😀</li></ul>;
  }
  else {
    // centreParamElement = "<ul>" + Object.entries(dataCentre.Params)
    //                        .forEach(([key, value]) => "<li><span>"+{key}+": </span>"+{value}+"</li>") + "</ul>"
    centreNameElementChildren = Object.entries(centre.Params).map((d) => <li>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  const dataCentreElement = <div>{centreNameElement}{centreParamElement}</div>

  return (
        <details className="Accordion">
            <summary>centres params</summary>
            {dataCentreElement}
        </details>
  );
}

export default Accordion;
