import './style.css';
import meteor from './meteor.svg';
import magnifier from './magnify.svg'

document.querySelector('.logo').src = meteor;
document.querySelector('.magnify').src = magnifier;

const logic = require('./logic');