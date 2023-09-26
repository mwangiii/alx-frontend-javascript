export default getNeighborhoodsList => {
    sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    const addNeighborhood = newNeighborhood => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}