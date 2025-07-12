import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import Query from "esri/rest/support/Query"
import FeatureLayer from 'esri/layers/FeatureLayer';
import { ResultsFieldSetting } from 'dist/widgets/arcgis/query/src/setting/results-field';
import { useEffect, useState } from 'react';

const Widget = (props: AllWidgetProps<IMConfig>) => {

const [county, setCounty] = useState(null);
const [planName, setPlanName] = useState(null);
const [template1, setTemplate1] = useState(null);
const [placeholder1, setPlaceholder1] = useState(null);


let layer = new FeatureLayer({
      portalItem: {
        id: "fe99b3f489534897838074a87ed7e425"
      }
    })

   useEffect(() => {
      layer.queryFeatures().then(results => {
            setCounty(results.features[0].attributes.county_name)
            setPlanName(results.features[0].attributes.plan_name)
            setTemplate1(results.features[0].attributes.template_1)
            setPlaceholder1(results.features[0].attributes.placeholder_1)
           
      })
        
      
   }, [])




  return (
    <div className="widget-demo jimu-widget m-2">
      <h1>This is the {planName} prepared by {county} County Emergency Management.</h1>
      <p>{template1}</p>
      <p>{placeholder1}</p>
    </div>
  )
}

export default Widget
