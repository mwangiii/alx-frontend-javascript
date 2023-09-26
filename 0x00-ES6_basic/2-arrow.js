export default getNeighborhoodsList => {
    const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    const self = this;
    const addNeighborhood = add newNeighborhood => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}