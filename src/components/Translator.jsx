import { useState } from "react";
import {detect} from 'lang-detector'
import languages from "./Languages";
import audioIcon from "/images/sound_max_fill.svg";
import copyIcon from "/images/Copy.svg";
import exchangeIcon from "/images/Horizontal_top_left_main.svg";
export default function Translator() {
  
  const [inputText, setInputText] = useState("");
  const [placeholderText, setPlaceholderText]=useState("");
  const [outputText, setOutputText] = useState("");
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("es");
  
 

  //function to handle text and language exchange/swap
  function handleExchange() {
    let tempText = outputText;
    setOutputText(inputText);
    setInputText(tempText);

    let tempLang = outputLang;
    setOutputLang(inputLang);
    setInputLang(tempLang);
  }

  //Function to copy text to clipBoard
  function handleCopyText(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed t copy text:", error);
      });
  }

  //Function to handle text to speech(audio)
  function handleAudioClick(text) {
    const textToSpeak = text;
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
  }

  /**
   * Handles input text changes. Only updates state if text length is 500 or less.
   */
  function handleInputChange(event){
    const text=event.target.value;
    if(text.length<=500){
      setInputText(text);
    }
  }

  //function to handle text translation
  function handleTranslate(){
    const url=`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${inputLang}|${outputLang}`;
    fetch(url)
    .then((res=>res.json()))
    .then((data)=>(
      setOutputText(data.responseData.translatedText)
    ))
  }
  return (
    <>
      <section className="trasnlator">
        <div className="row-wrapper flex justify-center items-center h-screen gap-4 mx-9">
          {/*Input container */}
          <div className="translator-container relative border-2 border-txtColor rounded-custom-lg p-3  w-1/2  bg-primary">
            <div className="top-row z-10 m-3">
              <ul className="lang-list  flex space-x-6 justify-start text-txtColor font-bold  text-base">
                <li><button onClick={()=>setPlaceholderText("Enter text in any language")}>Detect Language</button></li>
                <li><button onClick={()=>setPlaceholderText("Enter text in English")}>English</button></li>
                <li><button onClick={()=>setPlaceholderText("Enter text in French")}>French</button></li>
                <li>
                  <select
                    name="input-lang"
                    id="input-lang"
                    value={inputLang}
                    onChange={(event) => setInputLang(event.target.value)}
                    className="bg-transparent"
                  >
                    {Object.entries(languages).map(([code, val]) => (
                      <option key={code} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>
            </div>
            <hr />

            <textarea
              className=" w-full h-full resize-none p-0 m-0 border-0 z-0 bg-transparent text-white"
              name="input-text"
              id="input-text"
              cols="30"
              rows="10"
              placeholder={placeholderText}
              onChange={handleInputChange}
              value={inputText}
            ></textarea>

            <div className="char-count text-white text-xs m-3 text-txtColor flex justify-end z-10">
              {inputText.length}/500
            </div>
            <div className="input-bottom-row flex justify-between z-10">
              <div className="input-icons flex ">
                <button>
                  <img
                    src={audioIcon}
                    alt="audio Icon"
                    className="w-8 icon-style"
                    onClick={() => handleAudioClick(inputText)}
                  />
                </button>
                <button>
                  <img
                    src={copyIcon}
                    alt="Copy Icon"
                    className="w-8 icon-style ml-2"
                    onClick={() => handleCopyText(inputText)}
                  />
                </button>
              </div>
              <div className="translate-btn">
                <button className="text-lighter bg-btnBlue px-4 py-2 font-medium text-lg border-2 border-ligther rounded-custom-sz" onClick={handleTranslate}>
                  <span className="underline" >A</span> Translate
                </button>
              </div>
            </div>
          </div>

          {/*Output container*/}
          <div className="translator-container  p-4  w-1/2 bg-primary border-2 border-txtColor rounded-custom-lg">
            <div className="top-row m-3 flex justify-between">
              <div>
                <ul className="lang-list flex space-x-6 justify-start text-txtColor font-bold text-base ">
                  <li><button>English</button></li>
                  <li><button>French</button></li>
                  <li>
                    <select
                      name="output-lang"
                      id="output-lang"
                      value={outputLang}
                      onChange={(event) => setOutputLang(event.target.value)}
                      className="bg-transparent"
                    >
                      {Object.entries(languages).map(([code, val]) => (
                        <option key={code}>{val}</option>
                      ))}
                    </select>
                  </li>
                </ul>
              </div>
              <div>
                <button>
                  <img
                    src={exchangeIcon}
                    alt="Exchange Icon"
                    className="w-8 icon-style"
                    onClick={handleExchange}
                  />
                </button>
              </div>
            </div>
            <hr />
            <textarea
              className=" w-full h-full resize-none p-0 m-0 border-0 z-0 bg-transparent text-white"
              name="output-text"
              id="output-text"
              cols="30"
              rows="10"
              value={outputText}
              readOnly
            ></textarea>
            <div className="bottom-row">
              <div className="output-icons flex">
                <button>
                  <img
                    src={audioIcon}
                    alt="audio Icon"
                    className="w-8 icon-style"
                    onClick={() => handleAudioClick(outputText)}
                  />
                </button>
                <button>
                  <img
                    src={copyIcon}
                    alt="Copy Icon"
                    className="w-8 icon-style ml-2"
                    onClick={() => handleCopyText(outputText)}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
