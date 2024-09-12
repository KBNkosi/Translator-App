import audioIcon from "/images/sound_max_fill.svg";
import copyIcon from "/images/Copy.svg";
import exchangeIcon from "/images/Horizontal_top_left_main.svg";
export default function Translator() {
  return (
    <>
      <section className="trasnlator">
        <div className="row-wrapper flex justify-center items-center h-screen gap-4 mx-9">
          {/*Input container */}
          <div className="translator-container relative  input-lang w-1/2 border-4 bg-primary">
            <div className="top-row z-10">
              <select name="input-languages" id="input-languages">
                <option value="ar">Arabic</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="Sp">Spanish</option>
              </select>
            </div>

            <textarea
              className=" w-full h-full resize-none p-0 m-0 border-0 z-0 bg-transparent"
              name="input-text"
              id="input-text"
              cols="30"
              rows="10"
              placeholder="Enter text"
            ></textarea>

            <div className="char-count text-white flex justify-end z-10">
              1/500
            </div>
            <div className="input-bottom-row flex justify-between z-10">
              <div className="input-icons flex">
                <img src={audioIcon} alt="audio Icon" />
                <img src={copyIcon} alt="Copy Icon" />
              </div>
              <div className="translate-btn">
                <button className="text-black">Translate</button>
              </div>
            </div>
          </div>

          {/*Output container*/}
          <div className="translator-container output-lang border-4 w-1/2">
            <div className="top-row flex justify-between">
              <div>
                <select name="output-languages" id="output-languages">
                  <option value="ar">Arabic</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="Sp">Spanish</option>
                </select>
              </div>
              <div>
                <img src={exchangeIcon} alt="Exchange Icon" />
              </div>
            </div>
            <form action="" className="output-form">
              <textarea name="" id="" cols="30" rows="10" readOnly></textarea>
            </form>
            <div className="bottom-row">
              <div className="output-icons flex">
                <img src={audioIcon} alt="audio Icon" />
                <img src={copyIcon} alt="Copy Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
