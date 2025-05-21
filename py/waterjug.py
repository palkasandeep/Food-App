from collections import deque
import heapq

def minStepsBFS(m, n, d):
    if d > max(m, n):
        return -1, []
    q = deque([(0, 0, 0, [])])
    vis = set()
    vis.add((0, 0))
    while q:
        jug1, jug2, steps, path = q.popleft()
        if jug1 == d or jug2 == d:
            return steps, path + [(jug1, jug2)]
        next_states = [
            (m, jug2),  # Fill jug1
            (jug1, n),  # Fill jug2
            (0, jug2),  # Empty jug1
            (jug1, 0),  # Empty jug2
            (jug1 - min(jug1, n - jug2), jug2 + min(jug1, n - jug2)),  # Pour jug1 -> jug2
            (jug1 + min(jug2, m - jug1), jug2 - min(jug2, m - jug1))   # Pour jug2 -> jug1
        ]
        for new_jug1, new_jug2 in next_states:
            if (new_jug1, new_jug2) not in vis:
                q.append((new_jug1, new_jug2, steps + 1, path + [(jug1, jug2)]))
                vis.add((new_jug1, new_jug2))
    return -1, []

def minStepsDFS(m, n, d):
    def dfs(jug1, jug2, steps, path):
        if (jug1, jug2) in vis:
            return float('inf'), []
        if jug1 == d or jug2 == d:
            return steps, path + [(jug1, jug2)]
        vis.add((jug1, jug2))
        next_states = [
            (m, jug2),  # Fill jug1
            (jug1, n),  # Fill jug2
            (0, jug2),  # Empty jug1
            (jug1, 0),  # Empty jug2
            (jug1 - min(jug1, n - jug2), jug2 + min(jug1, n - jug2)),  # Pour jug1 -> jug2
            (jug1 + min(jug2, m - jug1), jug2 - min(jug2, m - jug1))   # Pour jug2 -> jug1
        ]
        min_steps, best_path = float('inf'), []
        for new_jug1, new_jug2 in next_states:
            res_steps, res_path = dfs(new_jug1, new_jug2, steps + 1, path + [(jug1, jug2)])
            if res_steps < min_steps:
                min_steps, best_path = res_steps, res_path
        return min_steps, best_path
    
    vis = set()
    result, path = dfs(0, 0, 0, [])
    return (result, path) if result != float('inf') else (-1, [])

def minStepsUCS(m, n, d):
    pq = []
    heapq.heappush(pq, (0, 0, 0, [])) #(cost, jug1, jug2, path)
    vis = set()
    while pq:
        cost, jug1, jug2, path = heapq.heappop(pq)
        if jug1 == d or jug2 == d: 
            return cost, path + [(jug1, jug2)]
        if (jug1, jug2) not in vis:
            vis.add((jug1, jug2))
            next_states = [
                (m, jug2),  # Fill jug1
                (jug1, n),  # Fill jug2
                (0, jug2),  # Empty jug1
                (jug1, 0),  # Empty jug2
                (jug1 - min(jug1, n - jug2), jug2 + min(jug1, n - jug2)),  # Pour jug1 -> jug2
                (jug1 + min(jug2, m - jug1), jug2 - min(jug2, m - jug1))   # Pour jug2 -> jug1
            ]
            for new_jug1, new_jug2 in next_states:
                if (new_jug1, new_jug2) not in vis:
                    heapq.heappush(pq, (cost + 1, new_jug1, new_jug2, path + [(jug1, jug2)]))
    return -1, []

m, n, d = map(int, input().split())
bfs_steps, bfs_path = minStepsBFS(m, n, d)
dfs_steps, dfs_path = minStepsDFS(m, n, d)
ucs_steps, ucs_path = minStepsUCS(m, n, d)
print("BFS Solution:", bfs_steps)
print("BFS Path:", bfs_path)
print("DFS Solution:", dfs_steps)
print("DFS Path:", dfs_path)
print("UCS Solution:", ucs_steps)
print("UCS Path:", ucs_path)