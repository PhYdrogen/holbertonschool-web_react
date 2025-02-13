import $ from "jquery";
import debounce from "lodash/debounce";

let click = 0;
const updateCounter = () => {
    click = click + 1;
    $('#count').text(click + ' clicks on the button');
}

const b = $("body");
b.append("<p>Holberton Dashboard</p>");
b.append("<p>Dashboard data for the students</p>");
b.append("<button>").text('Click here to get started');
b.append("<p id='count'></p>");
b.append("<p>Copyright - Holberton School</p>");

$("button").click(debounce(updateCounter, 500));
