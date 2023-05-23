import "./GenerateColor.scss";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}
const GenerateColor = () => {
  const [red, setRed] = useState([0]);
  const [blue, setBlue] = useState([0]);
  const [green, setGreen] = useState([0]);
  const [isCopiedHex, setIsCopiedHEX] = useState(false);
  const [isCopiedRGB, setIsCopiedRGB] = useState(false);
  const MIN = 0;
  const MAX = 255;
  const STEP = 1;
  const onChangeColor = () => {
    let color = "#000";
    if (red?.length > 0 && green?.length > 0 && blue?.length > 0) {
      color = `rgb(${red[0]}, ${green[0]}, ${blue[0]})`;
    }
    return color;
  };
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const handleCopyHex = async (id) => {
    try {
      let text = rgbToHex(red[0], green[0], blue[0]);
      await copyTextToClipboard(text);
      setIsCopiedHEX(true);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsCopiedHEX(false);
    }, 5000);
  };
  const handleCopyRGB = async () => {
    try {
      let text = `rgb(${red[0]}, ${green[0]}, ${blue[0]})`;
      await copyTextToClipboard(text);
      setIsCopiedRGB(true);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsCopiedRGB(false);
    }, 5000);
  };
  return (
    <div className="container">
      <div
        className="color"
        style={{
          backgroundColor: onChangeColor(),
        }}
      ></div>
      <div className="hex-color">{rgbToHex(red[0], green[0], blue[0])}</div>
      <div className="copy-color">
        <button className="button-63" onClick={() => handleCopyHex()}>
          <span>{isCopiedHex ? "Copied!" : "Copy HEX"}</span>
        </button>
        <button className="button-63" onClick={() => handleCopyRGB()}>
          <span>{isCopiedRGB ? "Copied!" : "Copy RGB"}</span>
        </button>
      </div>
      <div className="range-color">
        <div className="red">
          <Range
            values={red}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(red) => setRed(red)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: red,
                      colors: ["red", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: "red",
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginTop: "30px" }} id="output">
            {red?.length > 0 && red[0]}
          </output>
        </div>
        <div className="blue">
          <Range
            values={blue}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(blue) => setBlue(blue)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: blue,
                      colors: ["blue", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: "blue",
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginTop: "30px" }} id="output">
            {blue?.length > 0 && blue[0]}
          </output>
        </div>
        <div className="green">
          <Range
            values={green}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(green) => setGreen(green)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: green,
                      colors: ["green", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: "green",
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginTop: "30px" }} id="output">
            {green?.length > 0 && green[0]}
          </output>
        </div>
      </div>
    </div>
  );
};
export default GenerateColor;
