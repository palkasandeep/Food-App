import heapq
graph = {
    0: [(1,2), (2,1)],
    1: [(0, 2),(2, 5),(4,3),(3,11)],
    2: [(0,1),(1, 5),(4,1),(5,15)],
    3: [(1,11), (4,2),(6,1)],
    4: [(1,3), (2, 1),(3,2),(6,5),(5,4)],
    5: [(4, 4), (2, 15)],
    6: [(3,1),(4,5),(5,1)]
}
heuristic = {
    0: 1,
    1: 3,
    2: 15,
    3: 2,
    4: 1,
    5: -1,
    6: 0
}

def a_star(graph,start,goal,heuristic):

    pq=[]
    vis=set()
    heapq.heappush(pq,(heuristic[start],0,[start],start))
    while pq:
        curr_heru,curr_cost,path,node=heapq.heappop(pq)
        if node==goal:
            return (path,curr_cost)
        if node in vis:
            continue
        vis.add(node)
        for ngbr,wg in graph.get(node,[]):
            if ngbr not in vis:
              newcost=curr_cost+wg
              newher=newcost+heuristic[ngbr]
              heapq.heappush(pq,(newher,newcost,[ngbr]+path,ngbr))
    return (0,0)






start=0
goal=6
path,cost,=a_star(graph,start,goal,heuristic)
print(path)
print(cost)









