import { NumbersCollections } from "./NumbersCollection";
import {Sorter} from "./sorter"

const numbersCollection = new NumbersCollections([10, 3, -5, 0])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
