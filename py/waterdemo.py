# from collections import deque

# def water_jug_bfs(x, y, z):
#     if z > max(x, y):
#         return "No solution"
    
#     visited = set()
#     queue = deque([(0, 0)])

#     while queue:
#         a, b = queue.popleft()

#         if a == z or b == z:
#             return (a,b)

#         if (a, b) in visited:
#             continue
#         visited.add((a, b))

#         queue.extend([
#             (x, b),  # Fill jug X
#             (a, y),  # Fill jug Y
#             (0, b),  # Empty jug X
#             (a, 0),  # Empty jug Y
#             (a - min(a, y - b), b + min(a, y - b)),  # Pour X -> Y
#             (a + min(b, x - a), b - min(b, x - a)),  # Pour Y -> X
#         ])

#     return "No solution"


# print(water_jug_bfs(4, 3, 2))  # Output: Solution Found


# def water_jug_dfs(x, y, z):
#     stack = [(0, 0)]
#     visited = set()

#     while stack:
#         a, b = stack.pop()

#         if a == z or b == z:
#             return "Solution Found"

#         if (a, b) in visited:
#             continue
#         visited.add((a, b))

#         stack.extend([
#             (x, b),  # Fill jug X
#             (a, y),  # Fill jug Y
#             (0, b),  # Empty jug X
#             (a, 0),  # Empty jug Y
#             (a - min(a, y - b), b + min(a, y - b)),  # Pour X -> Y
#             (a + min(b, x - a), b - min(b, x - a)),  # Pour Y -> X
#         ])

#     return "No solution"


# print(water_jug_dfs(4, 3, 2))  # Output: Solution Found


import heapq 

def water_jug_ucs(x, y, z):
    pq = [(0, 0, 0)]  # (cost, jug X, jug Y)
    visited = set()

    while pq:
        cost, a, b = heapq.heappop(pq)

        if a == z or b == z:
            return "Solution Found"

        if (a, b) in visited:
            continue
        visited.add((a, b))

        # Generate all possible next states with incremental cost
        for next_state in [
            (cost + 1, x, b),  # Fill jug X
            (cost + 1, a, y),  # Fill jug Y
            (cost + 1, 0, b),  # Empty jug X
            (cost + 1, a, 0),  # Empty jug Y
            (cost + 1, a - min(a, y - b), b + min(a, y - b)),  # Pour X -> Y
            (cost + 1, a + min(b, x - a), b - min(b, x - a)),  # Pour Y -> X
        ]:
            heapq.heappush(pq, next_state)

    return "No solution"

# Example Usage
print(water_jug_ucs(4, 3, 2))  # Output: Solution Found