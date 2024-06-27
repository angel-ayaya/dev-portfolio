import React, { useEffect } from "react";
import './styles.css'

const Calculator = () => {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            // Obtener todos los elementos de tipo botón
            const display = document.getElementById("display");
            const equal = document.getElementById("equal");
            const clear = document.getElementById("clear");
            const del = document.getElementById("del");

            document.querySelectorAll("button").forEach((button) => {
                button.addEventListener("click", function () {
                    if (button.classList.contains("num")) {
                        if (
                            display.value === "0" ||
                            display.value === "Error" ||
                            display.value === "Infinity" ||
                            display.value === "-Infinity" ||
                            display.value === "NaN"
                        ) {
                            display.value = button.textContent;
                        } else {
                            display.value += button.textContent;
                        }
                    } else if (button.classList.contains("op")) {
                        display.value += button.textContent;
                    }
                });
            });

            // Limpiar el input
            clear.addEventListener("click", function () {
                display.value = "0";
            });
            // Borrar el último carácter del display
            del.addEventListener("click", function () {
                display.value = display.value.slice(0, -1);
                if (display.value === "") {
                    display.value = "0";
                }
            });

            // Calcular el resultado
            equal.addEventListener("click", function () {
                try {
                    display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/"));
                } catch (error) {
                    display.value = "Error";
                }
            });
        });
    }, []);

    return (
        <div className="calculator-container">
            <div className="calculator-display-container">
                <input type="text" id="display" value="0" disabled />
            </div>
            <div className="calculator-buttons-container">
                <button id="clear">C</button>
                <button id="del">DEL</button>
                <button id="one" className="num">
                    1
                </button>
                <button id="two" className="num">
                    2
                </button>
                <button id="three" className="num">
                    3
                </button>
                <button id="minus" className="op">
                    -
                </button>
                <button id="four" className="num">
                    4
                </button>
                <button id="five" className="num">
                    5
                </button>
                <button id="six" className="num">
                    6
                </button>
                <button id="plus" className="op">
                    +
                </button>
                <button id="seven" className="num">
                    7
                </button>
                <button id="eight" className="num">
                    8
                </button>
                <button id="nine" className="num">
                    9
                </button>
                <button id="zero" className="num">
                    0
                </button>
                <button id="multiply" className="op">
                    *
                </button>
                <button id="equal">=</button>
                <button id="dot" className="num">
                    .
                </button>
                <button id="divide" className="op">
                    /
                </button>
            </div>
        </div>
    );
};

export default Calculator;

