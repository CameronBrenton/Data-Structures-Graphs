// edges list + vertices list

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const edges = [
	['A', 'B'],
	['A', 'D'],
	['B', 'C'],
	['C', 'D'],
	['C', 'E'],
	['D', 'E']
];

// findAdjacentNodes
const findAdjacentNodes = (node) => {

	// Loop through edges array
	// Is my node in the connection?
	// If yes, push the other node in pair, into adjacentNodes array
	// If no, keep looping
	const adjacentNodes = [];

	for (let edge of edges) {
		// edge = ['A', 'B']
		const nodeIndex = edge.indexOf(node);
		if (nodeIndex > -1) {
			adjacentNode = nodeIndex === 0 ? edge[1] : edge[0];
			adjacentNodes.push(adjacentNode);
		}
	}

	return adjacentNodes;;

};

// isConnected

console.log(findAdjacentNodes('C'));