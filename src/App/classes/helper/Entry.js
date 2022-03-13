import { nanoid } from 'nanoid';

class Entry {
    constructor({ subject, operation, target, amount, note }) {
        this.id = nanoid();
        this.subject = subject;
        this.operation = operation;
        this.target = target;
        this.amount = amount;
        this.note = note;
    };
};

export { Entry }