const min = document.getElementById("min");
const max = document.getElementById("max");
const val = document.getElementById("txtNumber");
const btn = document.getElementById("button");
const msg = document.getElementById("message");

const number = (minValue, maxValue) => {
    return Math.ceil(minValue + Math.random() * (maxValue - minValue))
}

