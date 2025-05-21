

import heapq
def ucs(graph,start,goal):
    pq=[]
    heapq.heappush(pq,(0,start,[])) #(cost till node,curnode, path);
    vis = set()
    while pq:
        curcost , curnode , path = heapq.heappop(pq)
        if curnode==goal:
            path= path + [curnode]
            print(f'Min cost from {start} to {goal} = {curcost}')
            print(f'Path = {'->'.join(path)}')
            return
        if curnode not in vis:
            vis.add(curnode)
            new_path = path + [curnode]
            for adjnode,adjcost in graph[curnode].items():
                if adjnode not in vis:
                    heapq.heappush(pq,(curcost+adjcost,adjnode,new_path))

graph = {
    'a': {},
    'b': {'a': 2},
    'c': {'a': 9999},
    'd': {'b': 1, 'c': 8, 'e': 2},
    'e': {'h': 8, 'r': 2},
    'f': {'c': 9999, 'g': 2},
    'g': {},
    'h': {'q': 9999, 'p': 9999},
    'p': {'q': 15},
    'r': {'f': 1},
    's': {'d': 3, 'e': 9, 'p': 1},
    'q': {}
}
start_node = 's'
goal_node = 'g'
ucs(graph,start_node,goal_node)