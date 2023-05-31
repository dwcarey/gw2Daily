import './style.css';
import { getFirstData, processedData } from './processData';
import { DOMcontroller } from './DOMcontroller';

// add key back
getFirstData('');

console.log(processedData);
DOMcontroller(processedData);