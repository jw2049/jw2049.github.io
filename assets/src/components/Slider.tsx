import { Component } from "solid-js";
import { SvgCross } from "../assets/Icons/CanvasIcons"

export function openSlider() {
    document.getElementById('slider').style.display = 'grid';
}

function closeSlider() {
    document.getElementById('slider').style.display = 'none';
}

export const Slider: Component = () => {
    return (
        <div id='slider' class="m-2 bg-dark_pennygrey grid-flow-row hidden">
            <div class="flex mt-2 mb-2 mr-2" onClick={closeSlider}>
                <label for="slider-input" class="my-2 mr-auto ml-2 text-sm font-pennyfont text-pennywhite">Pen Width</label>
                <SvgCross colour="pennywhite" w="5" h="5"/>
            </div>
            <input id="slider-input" type="range" value="1" min="1" max="25" class="w-5/6 h-2 m-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
        </div>
    );
};