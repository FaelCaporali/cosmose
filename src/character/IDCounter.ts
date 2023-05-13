function* IDCounter (lastId: number): Generator<number> {
    let id = lastId;
    while (true) {
        id++;
        yield id;
    }
}
const generator = IDCounter(0);

export default generator;
