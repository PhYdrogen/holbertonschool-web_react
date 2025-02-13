import $ from "jquery";
import debounce from "lodash/debounce";
import '../css/main.css';

let click = 0;
const updateCounter = () => {
    click = click + 1;
        $('#count').text(click + ' clicks on the button');
}

$(document).ready(() => {
    const b = $("body");
    b.append("<div id='logo'></div>");
    b.append("<p>Holberton Dashboard</p>");
    b.append("<p>Dashboard data for the students</p>");
    b.append("<button>Click here to get started</button>");
    b.append("<p id='count'></p>");
    b.append("<p>Copyright - Holberton School</p>");

    $("button").click(debounce(updateCounter, 500));
});
