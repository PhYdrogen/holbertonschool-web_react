import $ from "jquery";
import lodash from "lodash";

$(document).ready(() => {
    const b = $("body");
    b.append("<p>Holberton Dashboard</p>");
    b.append("<p>Dashboard data for the students</p>");
    b.append('<button onclick="updateCounter()">Click here to get started</button>');
    b.append("<p id='count'></p>");
    b.append("<p>Copyright - Holberton School</p>");
});

let click = 1;
function updateCounter() {
    lodash.debounce(() => {
        const c = $('#count');
        c.innerText = `${click} clicks on the button`;
        click = click + 1;
    }, 500)
}