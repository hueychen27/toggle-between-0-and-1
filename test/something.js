import Toggle from "../src/toggle.js";
const thing = new Toggle(0);
thing.toggle().toggle().toggle().toggleTimes;
console.log(thing.value);
thing.resetToggleTimes();
console.log(thing.toggleTimes);