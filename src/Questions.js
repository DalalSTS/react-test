import { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import './questions.css';
import axios from "axios"; 

function Questions() {

  // Func
  const [controll, setControll] = useState(false);

  const [SWE, setSWE] = useState(false);
  const [FIN, setFIN] = useState(false);
  const [ARA, setARA] = useState(false);
  const [BKS, setBKS] = useState(false); 
  const [KUR, setKUR] = useState(false);
  const [POL, setPOL] = useState(false);
  const [SPA, setSPA] = useState(false);
  const [PER, setPER] = useState(false);
  const [GAR, setGAR] = useState(false);
  const [DAN, setDAN] = useState(false);
  const [NOR, setNOR] = useState(false);
  const [ENG, setENG] = useState(false);
  const [SOM, setSOM] = useState(false);
  const [ARM, setARM] = useState(false); 
  const [TUR, setTUR] = useState(false);
  const [ALB, setALB] = useState(false);
  const [THA, setTHA] = useState(false);
  const [RUS, setRUS] = useState(false);
  const [HUN, setHUN] = useState(false);
  const [CAN, setCAN] = useState(false);
  const [langs,setLangs]=useState({})


  const onSubmitHandlerC = (e) => {
    e.preventDefault();
    sendLangs(e);
    setControll(true)
  }

  function refreshLangs(){
    if(!controll){
      axios
      .get("/api/users/knowslang/")
      .then((res) => {
        setLangs(res.data)
        })
      .catch((err)=>{

      })
      }
      if(controll){
        axios
        .get("/api/users/knowslang/")
        .then((res) => {
          setLangs(res.data)
          })
        .catch((err) => {

        })
        } 
     }
  
  function sendLangs(Lang){
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("Token")}`
    if (!controll){
      console.log(" i !control")
      if (eval("!"+Lang)){
        axios
        .post("/api/users/knowslang/", {"language_id":Lang, "knows_language":true})
        .then(()=>{refreshLangs()})
      }
      else{ 
        axios
        .delete(`api/users/knowslang/${Lang}`)
        .then(()=>{refreshLangs()})
      }
      
    }
    if (controll){
      if (eval("!"+Lang)){
        axios
        .post("/api/users/knowslang/", {"language_id":Lang, "knows_language":false})
        .then(()=>{refreshLangs()})
      }
      else{ 
        axios
        .delete(`api/users/knowslang/${Lang}`)
        .then(()=>{refreshLangs()})
      }
      
    }
    
    }
  
  const onSubmitHandlerN = (e) => {
    e.preventDefault();
  
  }
  function langsUI(langs){
    try{
  for (const element of langs){
    if(!controll && element.knows_language==true){
      console.log("här säger vi hej")
      eval("set"+element.language_id+"("+true+")")
      }
    if(controll && element.knows_language==false){
      eval("set"+element.language_id+"("+true+")")
      }
    }}
    catch{
      console.log("nu blev det fel")
    }}
    
  
  useEffect(() => { 
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("Token")}`
    langsUI(langs)
  },[langs,setLangs])
    //},[SWE,setSWE,FIN,setFIN,ARA,setARA,BKS,setBKS,KUR,setKUR,POL,setPOL,SPA,setSPA,PER,setPER,GAR,setGAR,DAN,setDAN,NOR,setNOR,ENG,setENG,SOM,setSOM,ARM,setARM,TUR,setTUR,ALB,setALB,THA,setTHA,RUS,setRUS,HUN,setHUN,CAN,setCAN])

  useEffect(() => {
    refreshLangs();
  },[])


    return (
      
      <>
      <div class="row d-flex justify-content-center mt-100">
      <div className={`${controll ? 'd-none' : 'col-md-8'}`}>
          <div class="card">
              <div class="card-body text-center">
                  <h4 class="card-title">Please select the languages that you  teach</h4>
                  <p class="card-description"> This can be changed at a later point </p>
                  <hr class="mb-30" />

                  <form onSubmit={(e) => { onSubmitHandlerC(e); } } >

                    <label class="check">
                    <span onClick={() => { sendLangs("SWE") }} className={`${SWE ? 'checked':''}`}>Swedish</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("FIN"); }} className={`${FIN ? 'checked':''}`}>Finnish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("ARA"); }} className={`${ARA ? 'checked':''}`}>Arabic</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("BKS"); }} className={`${BKS ? 'checked':''}`}>Serbo-Croatian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("KUR"); }} className={`${KUR ? 'checked':''}`}>Kurdish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("POL"); }} className={`${POL ? 'checked':''}`}>Polish</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("SPA"); }} className={`${SPA ? 'checked':''}`}>Spanish</span>
                    </label>
                    <label class="check">
                    <span onClick={() => { sendLangs("PER"); }} className={`${PER ? 'checked':''}`}>Persian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("GAR"); }} className={`${GAR ? 'checked':''}`}>German</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("DAN"); }} className={`${DAN ? 'checked':''}`}>Danish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("NOR"); }} className={`${NOR ? 'checked':''}`}>Norwegian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("ENG"); }} className={`${ENG ? 'checked':''}`}>English</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("SOM"); }} className={`${SOM ? 'checked':''}`}>Somali</span>
                    </label>
                    <label class="check">
                    <span onClick={() => { sendLangs("ARM"); }} className={`${ARM ? 'checked':''}`}>Aramaic</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("TUR"); }} className={`${TUR ? 'checked':''}`}>Turkish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("ALB"); }} className={`${ALB ? 'checked':''}`}>Albanian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("THA"); }} className={`${THA ? 'checked':''}`}>Thai</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("RUS"); }} className={`${RUS ? 'checked':''}`}>Russian</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("HUN"); }} className={`${HUN ? 'checked':''}`}>Hungarian</span>
                    </label>
                    <label class="check">
                    <span onClick={() => { sendLangs("CAN"); }} className={`${CAN ? 'checked':''}`}>Cantonese</span>
                    </label>

                    <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      value="Submit"
                      onClick={()=>setControll(!controll)}
                      className="btn btn-primary">Register</button>
                    
                  </div>
                  </form>
                  
              </div>
          </div>
      </div>
  </div>
  
  <div class="row d-flex justify-content-center mt-100">
      <div className={`${!controll ? 'd-none' : 'box col-md-8'}`}>
          <div class="card">
              <div class="card-body text-center">
                  <h4 class="card-title">Please select the languages you want to learn</h4>
                  <p class="card-description">This  also be changed later</p>
                  <hr class="mb-30" />

                  <form onSubmit={(e) => { onSubmitHandlerN(e); } } >
                  <label class="check">
                    <span onClick={() => { sendLangs("SWE") }} className={`${SWE ? 'checked':''}`}>Swedish</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("FIN"); }} className={`${FIN ? 'checked':''}`}>Finnish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("ARA"); }} className={`${ARA ? 'checked':''}`}>Arabic</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("BKS"); }} className={`${BKS ? 'checked':''}`}>Serbo-Croatian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("POL"); }} className={`${KUR ? 'checked':''}`}>Kurdish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("POL"); }} className={`${POL ? 'checked':''}`}>Polish</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("SPA"); }} className={`${SPA ? 'checked':''}`}>Spanish</span>
                    </label>
                    <label class="check">
                    <span onClick={() => { sendLangs("PER"); }} className={`${PER ? 'checked':''}`}>Persian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("GAR"); }} className={`${GAR ? 'checked':''}`}>German</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("DAN"); }} className={`${DAN ? 'checked':''}`}>Danish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("NOR"); }} className={`${NOR ? 'checked':''}`}>Norwegian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("ENG"); }} className={`${ENG ? 'checked':''}`}>English</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("SOM"); }} className={`${SOM ? 'checked':''}`}>Somali</span>
                    </label>
                    <label class="check">
                    <span onClick={() => { sendLangs("ARM"); }} className={`${ARM ? 'checked':''}`}>Aramaic</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("TUR"); }} className={`${TUR ? 'checked':''}`}>Turkish</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("ALB"); }} className={`${ALB ? 'checked':''}`}>Albanian</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("THA"); }} className={`${THA ? 'checked':''}`}>Thai</span>
                    </label>
            
                    <label class="check">
                    <span onClick={() => { sendLangs("RUS"); }} className={`${RUS ? 'checked':''}`}>Russian</span>
                    </label>

                    <label class="check">
                    <span onClick={() => { sendLangs("HUN"); }} className={`${HUN ? 'checked':''}`}>Hungarian</span>
                    </label>
                    <label class="check">
                    <span onClick={() => { sendLangs("CAN"); }} className={`${CAN ? 'checked':''}`}>Cantonese</span>
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