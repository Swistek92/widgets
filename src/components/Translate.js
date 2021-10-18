// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options =[
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Polish",
    value: "pl",
  },
]

const Trasnlate = () => {
const [language, setLanguage]= useState(options[0]);
const [text,setText]=useState("");




return(
  <div>
    <div className="ui form">
      <div className="field">
        <label> enter text</label>
    <input value={text} onChange={(e)=> setText(e.target.value)}/>
        
        </div>  


    </div>
    <Dropdown 
    label="select a language"
    selected={language} 
    onSelectedChange={setLanguage} 
    options={options} />
  <hr/>

  <h3 className=" ui header"> output</h3>
 <Convert text={text} language={language}/>
 
  </div>


)




}
export default Trasnlate;