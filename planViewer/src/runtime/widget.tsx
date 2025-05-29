import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import Query from "esri/rest/support/Query"
import FeatureLayer from 'esri/layers/FeatureLayer';
import { ResultsFieldSetting } from 'dist/widgets/arcgis/query/src/setting/results-field';
import { useEffect, useState } from 'react';

const Widget = (props: AllWidgetProps<IMConfig>) => {

const [county, setCounty] = useState(null);
const [em, setEM] = useState(null);
const [longResponse1, setLongResponse1] = useState(null);


let layer = new FeatureLayer({
      portalItem: {
        id: "5664ec66e2e14022accea039773a2712"
      }
    })

   useEffect(() => {
      layer.queryFeatures().then(results => {
            setCounty(results.features[2].attributes.name_of_county)
            setEM(results.features[2].attributes.emergency_manager)
            setLongResponse1(results.features[2].attributes.animal_sheltering_question_long)
      })
        
      
   }, [])




  return (
    <div className="widget-demo jimu-widget m-2">
      <h1>LEOP Plan for {county} County. Prepared by {county} county Emergency Manager {em}.</h1><br></br>
      <p>This would be a template text paragraph, pretend it is much larger. This would be a template text paragraph, pretend it is much larger. 
        This would be a template text paragraph, pretend it is much larger. Approach to animal sheltering</p>
      <p>{longResponse1}</p>
    </div>
  )
}

export default Widget
