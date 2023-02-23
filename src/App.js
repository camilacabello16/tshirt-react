import './App.css';
import { fabric } from "fabric";
import tingle from "./tingle.min.js";
import productConfig from "./product.config";

const App = () => {
    return (
        <div id="app">
            <div id="designer-area">
                <div id="side-switcher">
                    <div className="button-group"></div>
                </div>

                <div className="designer">
                    <div id="bg-color"></div>
                    <div id="canvases"></div>
                </div>
            </div>

            <aside>
                <section>
                    <h3>Colors:</h3>
                    <div id="colors"></div>
                </section>
                <section>
                    <h3>Upload</h3>
                    <input type="file" name="uploadart" style={{ display: "none" }} id="uploadart" />
                    <label htmlFor="uploadart">&nbsp;
                        <a className="button">Upload Artwork</a>
                    </label>
                </section>

                <section>
                    <h3>Export</h3>
                    <a id="exportart" className="button outline small">Export Art</a>
                    <a id="exportmockup" className="button outline small">Export Flat Mockup</a>
                    <a id="generatemockups" className="button outline small">Generate Mockups</a>
                </section>
            </aside>
        </div>
    );
}

export default App;
