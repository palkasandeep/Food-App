import heapq

# Manhattan heuristic function
def her(start, goal):
    x1, y1 = start
    x2, y2 = goal
    return abs(x1 - x2) + abs(y1 - y2)

# Function to get valid neighboring cells
def getngbr(node, row, col, blocked):
    x, y = node
    neighbors = []
    
    # Possible moves (right, down, left, up, and diagonal)
    moves = [
        (0, 1), (1, 0), (0, -1), (-1, 0),   # Horizontal & Vertical moves
        (1, 1), (1, -1), (-1, 1), (-1, -1)  # Diagonal moves
    ]
    
    for dx, dy in moves:
        nx, ny = x + dx, y + dy
        
        # Check if the new position is within bounds
        if 1 <= nx <= row and 1 <= ny <= col:
            # Ensure the path is not blocked
            if ((node, (nx, ny)) not in blocked) and ((nx, ny), node) not in blocked:
                neighbors.append((nx, ny))
    
    return neighbors

# A* Search algorithm
def a_star(row,col,blocked, start, goal):
    heap = []  # Priority queue (min-heap)
    start_h = her(start, goal)
    
    # (f(n), g(n), path, current node)
    heapq.heappush(heap, (start_h, 0, [start], start))
    visited = set()

    while heap:
        # Get the node with the lowest f(n)
        _, cost, path, node = heapq.heappop(heap)
        
        # If node already visited → skip
        if node in visited:
            continue
        
        # If goal is reached → return cost and path
        if node == goal:
            return cost, path
        
        # Mark node as visited
        visited.add(node)
        
        # Explore neighbors
        for ngbr in getngbr(node, row, col, blocked):
            if ngbr not in visited:
                new_cost = cost + 1
                new_her = her(ngbr, goal)
                
                # Add to heap based on priority (f(n) = g(n) + h(n))
                heapq.heappush(heap, (new_cost + new_her, new_cost, path + [ngbr], ngbr))
    
    # If no path is found
    return float('inf'), "No path found"

# Grid size
row, col = 4, 5

# Define blocked cells (bidirectional)
blocked = {
    ((2,2),(2,3)), ((3,2),(3,3)), ((4,2),(4,3)),
    ((1,5),(2,5)), ((1,6),(2,6)), ((2,2),(3,3)),
    ((3,2),(4,3)), ((2,3),(3,2)), ((3,3),(4,2))
}

# Define start and goal points
start = (1,1)
goal = (4,5)

# Solve using A* algorithm
final_cost, final_path = a_star(row, col, blocked, start, goal)

# Output the result
print(f"Final cost: {final_cost}")
print(f"Final path: {final_path}")
