import { useState } from "react";
import { createRoot } from 'react-dom/client';

function Questions() {

  //Can Func
  const [canControll, setCanControll] = useState(false);

  const [canSwedish, setCanSwedish] = useState(false);
  const [canFinnish, setCanFinnish] = useState(false);
  const [canArabic, setCanArabicl] = useState(false);
  const [canSerboCroatian, setCanSerboCroatian] = useState(false); 
  const [canKurdish, setCanKurdish] = useState(false);
  const [canPolish, setCanPolish] = useState(false);
  const [canSpanish, setCanSpanish] = useState(false);
  const [canPersian, setCanPersian] = useState(false);
  const [canGerman, setCanGerman] = useState(false);
  const [canDanish, setCanDanish] = useState(false);
  const [canNorwegian, setCanNorwegian] = useState(false);
  const [canEnglish, setCanEnglish] = useState(false);
  const [canSomali, setCanSomali] = useState(false);
  const [canAramaic, setCanAramaic] = useState(false); 
  const [canTurkish, setCanTurkish] = useState(false);
  const [canAlbanian, setCanAlbanian] = useState(false);
  const [canThai, setCanThai] = useState(false);
  const [canRussian, setCanRussian] = useState(false);
  const [canHungarian, setCanHungarian] = useState(false);
  const [canCantonese, setCanCantonese] = useState(false);

  const onChangeHandlerC = (fieldName, value)=>{
    if(fieldName === "Swedish"){
      setCanSwedish(value);
    }
    if(fieldName === "Finnish"){
      setCanFinnish(value);
    }
    if(fieldName === "Arabic"){
      setCanArabicl(value);
    }
    if(fieldName === "SerboCroatian"){
      setCanSerboCroatian(value);
    }
    if(fieldName === "Kurdish"){
      setCanKurdish(value);
    }
    if(fieldName === "Polish"){
      setCanPolish(value);
    }
    if(fieldName === "Spanish"){
      setCanSpanish(value);
    }
    if(fieldName === "Persian"){
      setCanPersian(value);
    }
    if(fieldName === "German"){
      setCanGerman(value);
    }
    if(fieldName === "Danish"){
      setCanDanish(value);
    }
    if(fieldName === "Norwegian"){
      setCanNorwegian(value);
    }
    if(fieldName === "English"){
      setCanEnglish(value);
    }
    if(fieldName === "Somali"){
      setCanSomali(value);
    }
    if(fieldName === "Aramaic"){
      setCanAramaic(value);
    }
    if(fieldName === "Turkish"){
      setCanTurkish(value);
    }
    if(fieldName === "Albanian"){
      setCanAlbanian(value);
    }
    if(fieldName === "Thai"){
      setCanThai(value);
    }
    if(fieldName === "Russian"){
      setCanRussian(value);
    }
    if(fieldName === "Hungarian"){
      setCanHungarian(value);
    }
    if(fieldName === "Cantonese"){
      setCanCantonese(value);
    }  
  }

  // Need Func

  const [needSwedish, setNeedSwedish] = useState(false);
  const [needFinnish, setNeedFinnish] = useState(false);
  const [needArabic, setNeedArabicl] = useState(false);
  const [needSerboCroatian, setNeedSerboCroatian] = useState(false); 
  const [needKurdish, setNeedKurdish] = useState(false);
  const [needPolish, setNeedPolish] = useState(false);
  const [needSpanish, setNeedSpanish] = useState(false);
  const [needPersian, setNeedPersian] = useState(false);
  const [needGerman, setNeedGerman] = useState(false);
  const [needDanish, setNeedDanish] = useState(false);
  const [needNorwegian, setNeedNorwegian] = useState(false);
  const [needEnglish, setNeedEnglish] = useState(false);
  const [needSomali, setNeedSomali] = useState(false);
  const [needAramaic, setNeedAramaic] = useState(false); 
  const [needTurkish, setNeedTurkish] = useState(false);
  const [needAlbanian, setNeedAlbanian] = useState(false);
  const [needThai, setNeedThai] = useState(false);
  const [needRussian, setNeedRussian] = useState(false);
  const [needHungarian, setNeedHungarian] = useState(false);
  const [needCantonese, setNeedCantonese] = useState(false);

  const onChangeHandlerN = (fieldName, value)=>{
    if(fieldName === "Swedish"){
      setNeedSwedish(value);
    }
    if(fieldName === "Finnish"){
      setNeedFinnish(value);
    }
    if(fieldName === "Arabic"){
      setNeedArabicl(value);
    }
    if(fieldName === "SerboCroatian"){
      setNeedSerboCroatian(value);
    }
    if(fieldName === "Kurdish"){
      setNeedKurdish(value);
    }
    if(fieldName === "Polish"){
      setNeedPolish(value);
    }
    if(fieldName === "Spanish"){
      setNeedSpanish(value);
    }
    if(fieldName === "Persian"){
      setNeedPersian(value);
    }
    if(fieldName === "German"){
      setNeedGerman(value);
    }
    if(fieldName === "Danish"){
      setNeedDanish(value);
    }
    if(fieldName === "Norwegian"){
      setNeedNorwegian(value);
    }
    if(fieldName === "English"){
      setNeedEnglish(value);
    }
    if(fieldName === "Somali"){
      setNeedSomali(value);
    }
    if(fieldName === "Aramaic"){
      setNeedAramaic(value);
    }
    if(fieldName === "Turkish"){
      setNeedTurkish(value);
    }
    if(fieldName === "Albanian"){
      setNeedAlbanian(value);
    }
    if(fieldName === "Thai"){
      setNeedThai(value);
    }
    if(fieldName === "Russian"){
      setNeedRussian(value);
    }
    if(fieldName === "Hungarian"){
      setNeedHungarian(value);
    }
    if(fieldName === "Cantonese"){
      setNeedCantonese(value);
    }


    
  }
  

  const onSubmitHandlerC = (e) => {
    e.preventDefault();
    console.log({canSwedish, canFinnish, canArabic, canSerboCroatian, canKurdish, canPolish, canSpanish, canPersian, canGerman, canDanish, canNorwegian, canEnglish, canSomali, canAramaic, canTurkish, canAlbanian, canThai, canRussian, canHungarian, canCantonese});
    setCanControll(true)
  }

  const onSubmitHandlerN = (e) => {
    e.preventDefault();
    console.log({needSwedish, needFinnish, needArabic, needSerboCroatian, needKurdish, needPolish, needSpanish, needPersian, needGerman, needDanish, needNorwegian, needEnglish, needSomali, needAramaic, needTurkish, needAlbanian, needThai, needRussian, needHungarian, needCantonese});
  }
    return (
      <>
      <div class="row d-flex justify-content-center mt-100">
      <div className={`${canControll ? 'd-none' : 'col-md-8'}`}>
          <div class="card">
              <div class="card-body text-center">
                  <h4 class="card-title">Please select the languages that you can teach</h4>
                  <p class="card-description"> This can be changed at a later point </p>
                  <hr class="mb-30" />

                  <form onSubmit={(e) => { onSubmitHandlerC(e); } } >
                    <label class="check">
                      <input 
                      type="checkbox"
                      onChange={(e) => { onChangeHandlerC("Swedish", !canSwedish); } }/>
                      <span>Swedish</span>
                    </label>
                    <label class="check">
                      <input 
                      type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Finnish", !canFinnish); } }/>
                      <span>Finnish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Arabic", !canArabic); } }/>
                      <span>Arabic</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("SerboCroatian", !canSerboCroatian); } }/>
                      <span>Serbo-Croatian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Kurdish", !canKurdish); } }/>
                      <span>Kurdish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Polish", !canPolish); } }/>
                      <span>Polish</span>
                    </label>

                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Spanish", !canSpanish); } }/>
                      <span>Spanish</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Persian", !canPersian); } }/>
                      <span>Persian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("German", !canGerman); } }/>
                      <span>German</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Danish", !canDanish); } }/>
                      <span>Danish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Norwegian", !canNorwegian); } }/>
                      <span>Norwegian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("English", !canEnglish); } }/>
                      <span>English</span>
                    </label>

                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Somali", !canSomali); } }/>
                      <span>Somali</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Aramaic", !canAramaic); } }/>
                      <span>Aramaic</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Turkish", !canTurkish); } }/>
                      <span>Turkish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Albanian", !canAlbanian); } }/>
                      <span>Albanian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Thai", !canThai); } }/>
                      <span>Thai</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Russian", !canRussian); } }/>
                      <span>Russian</span>
                    </label>

                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Hungarian", !canHungarian); } }/>
                      <span>Hungarian</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerC("Cantonese", !canCantonese); } }/>
                      <span>Cantonese</span>
                    </label>

                    <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      value="Submit"
                      
                      className="btn btn-primary">Register</button>
                    
                  </div>
                  </form>
                  
              </div>
          </div>
      </div>
  </div>
  
  <div class="row d-flex justify-content-center mt-100">
      <div className={`${!canControll ? 'd-none' : 'boxCan col-md-8'}`}>
          <div class="card">
              <div class="card-body text-center">
                  <h4 class="card-title">Please select the languages you want to learn</h4>
                  <p class="card-description">This can also be changed later</p>
                  <hr class="mb-30" />

                  <form onSubmit={(e) => { onSubmitHandlerN(e); } } >
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Swedish", !needSwedish); } }/>
                      <span>Swedish</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Finnish", !needFinnish); } }/>
                      <span>Finnish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Arabic", !needArabic); } }/>
                      <span>Arabic</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("SerboCroatian", !needSerboCroatian); } }/>
                      <span>Serbo-Croatian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Kurdish", !needKurdish); } }/>
                      <span>Kurdish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Polish", !needPolish); } }/>
                      <span>Polish</span>
                    </label>

                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Spanish", !needSpanish); } }/>
                      <span>Spanish</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Persian", !needPersian); } }/>
                      <span>Persian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("German", !needGerman); } }/>
                      <span>German</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Danish", !needDanish); } }/>
                      <span>Danish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Norwegian", !needNorwegian); } }/>
                      <span>Norwegian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("English", !needEnglish); } }/>
                      <span>English</span>
                    </label>

                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Somali", !needSomali); } }/>
                      <span>Somali</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Aramaic", !needAramaic); } }/>
                      <span>Aramaic</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Turkish", !needTurkish); } }/>
                      <span>Turkish</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Albanian", !needAlbanian); } }/>
                      <span>Albanian</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Thai", !needThai); } }/>
                      <span>Thai</span>
                    </label>
            
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Russian", !needRussian); } }/>
                      <span>Russian</span>
                    </label>

                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Hungarian", !needHungarian); } }/>
                      <span>Hungarian</span>
                    </label>
                    <label class="check">
                      <input type="checkbox" 
                      onChange={(e) => { onChangeHandlerN("Cantonese", !needCantonese); } }/>
                      <span>Cantonese</span>
                    </label>

                    <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      value="Submit"
                      
                      className="btn btn-primary">Register</button>
                    
                  </div>

                  </form>
                  
              </div>
          </div>
      </div>
  </div>
      
  </>
    );
  
    
  }
  
  
  createRoot( document.getElementById('root')).render(<Questions />);
  
  
  export default Questions;