import { ledger } from "../../init.js";
import { Staged } from "../Staged.js";

class Funding extends Staged {
    constructor() {
        super(Funding);

        this.setter('subjects', []);
        this.setter('target', 'Somebody');
        this.setter('amount', 0);
        this.setter('note', '');
    };
}

export { Funding };