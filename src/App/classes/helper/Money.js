class Money {
    constructor(type, value) {
        this.type = type;
        this.amount = value || 0;
    };

    get total() {
        return this.type * this.amount;
    };

    add(amount) {
        this.amount += amount;
        return this;
    };

    sub(amount) {
        this.amount -= amount;
        return this;
    }
};

export { Money }