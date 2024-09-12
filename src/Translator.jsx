import audioIcon from "/images/sound_max_fill.svg"
import copyIcon from "/images/Copy.svg"
import exchangeIcon from "/images/Horizontal_top_left_main.svg"
export default function Translator() {
  return (
    <>
      <section className="trasnlator">
        <div className="row-wrapper flex">
          {/*Input container */}
          <div className="translator-container input-lang">
            <div className="top-row">
            <select name="languages" id="languages">
                    <option value="ar">Arabic</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="Sp">Spanish</option>
                </select>
            </div>
            <form action="" className="input-form">
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
            </form>
            <div className="char-count text-white">character count</div>
            <div className="bottom-row">
              <ul className="icons text-white">
                <li className="audio-icon"><img src={audioIcon} alt="audio Icon" /></li>
                <li className="copy-icon"><img src={copyIcon} alt="Copy Icon" /></li>
              </ul>
            <button className="btn-translate text-white">Translate text</button>
            </div>
          </div>
           {/*Output container*/}
          <div className="translator-container output-lang">
            <div className="top-row">
                <select name="languages" id="languages">
                    <option value="ar">Arabic</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="Sp">Spanish</option>
                </select>
                <img src={exchangeIcon} alt="Exchange Icon" />
                <form action="" className="output-form">
                <textarea name="" id="" cols="30" rows="10" readOnly></textarea>
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
