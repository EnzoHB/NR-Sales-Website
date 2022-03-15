import { nanoid } from 'nanoid';

class LedgerEntry {
    constructor({ subject, operation, target, amount, note }) {
        this.id = nanoid();
        this.subject = subject;
        this.operation = operation;
        this.target = target;
        this.amount = amount;
        this.note = note;
    };
};

class TreasureEntry {
    constructor(reason) {
        this.reason = reason;
        this.total = 0;
        this.items = [];
    };

    type(type) {
        return {
            amount: amount => this.items.push({ type, amount })
        }
    };

    build() {
        return (
            this.total = 
            this.items.reduce((acc, { type, amount }) => acc += type * amount, 0),
            this
        );
    };
}



export { LedgerEntry, TreasureEntry }