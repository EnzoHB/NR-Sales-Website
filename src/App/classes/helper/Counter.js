class Counter {
    constructor(value, initial = 0) {
        this.value = value;
        this.count = initial;
    };

    add(amount) {
        this.count += amount;
    };

    sub(amount) {
        this.count -= amount;
    }
};

export { Counter }