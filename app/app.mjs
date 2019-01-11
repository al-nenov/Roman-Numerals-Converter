import {
    convertToRoman
} from "../romannums.js";

//const number = document.getElementById("number");

const VALIDATION = {
    tooLong(el, maxLong) {
        if (el >= maxLong) {
            alert("Input too large!");
            return true;
        }
    },
    positive(el) {
        if (el > 0) {
            return true;
        } else {
            alert("Input must be a positive number!");
        }
    }
}
//TODO Validation
var app = new Vue({
    el: '#app',
    data: {
        message: "",
        decimalInput: ""
    },
    computed: {
        roman: function () {
            return convertToRoman(this.decimalInput)
        },

    }
})