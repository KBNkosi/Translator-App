import { useState } from "react";
import languages from "./Languages";
import audioIcon from "/images/sound_max_fill.svg";
import copyIcon from "/images/Copy.svg";
import exchangeIcon from "/images/Horizontal_top_left_main.svg";
export default function Translator() {
  const [inputText, setInputText] = useState("");
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
          <div className="translator-container relative p-3  w-1/2  bg-primary">
            <div className="top-row z-10 m-3">
              <ul className="lang-list flex space-x-6 justify-start ">
                <li><button>Detect Language</button></li>
                <li><button>English</button></li>
                <li><button>French</button></li>
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
              className=" w-full h-full resize-none p-0 m-0 border-0 z-0 bg-transparent"
              name="input-text"
              id="input-text"
              cols="30"
              rows="10"
              placeholder="Enter text"
              onChange={handleInputChange}
              value={inputText}
            ></textarea>

            <div className="char-count text-white flex justify-end z-10">
              {inputText.length}/500
            </div>
            <div className="input-bottom-row flex justify-between z-10">
              <div className="input-icons flex ">
                <button>
                  <img
                    src={audioIcon}
                    alt="audio Icon"
                    className="w-8"
                    onClick={() => handleAudioClick(inputText)}
                  />
                </button>
                <button>
                  <img
                    src={copyIcon}
                    alt="Copy Icon"
                    className="w-8"
                    onClick={() => handleCopyText(inputText)}
                  />
                </button>
              </div>
              <div className="translate-btn">
                <button className="text-lighter bg-btnBlue px-4 py-2 " onClick={handleTranslate}>
                  Translate
                </button>
              </div>
            </div>
          </div>

          {/*Output container*/}
          <div className="translator-container  p-4  w-1/2 bg-primary">
            <div className="top-row m-3 flex justify-between">
              <div>
                <ul className="lang-list flex space-x-6 justify-start ">
                  <li><button>Detect Language</button></li>
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
                    className="w-6"
                    onClick={handleExchange}
                  />
                </button>
              </div>
            </div>
            <hr />
            <textarea
              className=" w-full h-full resize-none p-0 m-0 border-0 z-0 bg-transparent"
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
                    className="w-8"
                    onClick={() => handleAudioClick(outputText)}
                  />
                </button>
                <button>
                  <img
                    src={copyIcon}
                    alt="Copy Icon"
                    className="w-8"
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
