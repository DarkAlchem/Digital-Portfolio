import { addGlobalEventListener, qsa, qs, createElement } from "./domUtils.js";

console.log('Sections:\n',qsa('section'));
console.log('Wrapper:\n',qs('section.landing'));
console.log('Paragraphs:\n',qsa('p',qs('sections.landing')));
console.log('Hello')