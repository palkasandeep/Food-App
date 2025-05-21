distances = [
    [0, 20, 10, 15],
    [20, 0, 15, 11],
    [10, 15, 0, 17],
    [15, 11, 17, 0]
]

def cost(route, distance):
    total_cost = sum(distance[route[i]][route[i + 1]] for i in range(len(route) - 1))
    total_cost += distance[route[-1]][route[0]]  # Return to the starting point
    return total_cost

def getngbr(route):
    ngbr = []
    for i in range(len(route) - 1):
        for j in range(i + 1, len(route)):
            # Corrected slicing logic
            new_route = route[:i]+route[i:j+1][::-1]+route[j+1:]
            ngbr.append(new_route)
    return ngbr

def hillclimb(distance, maxit=1000):
    curr_route = list(range(len(distance))) + [0]
    current_cost = cost(curr_route, distance)

    for _ in range(maxit):
        ngbrs = getngbr(curr_route)
        best_route, best_cost = curr_route, current_cost

        for ngbr in ngbrs:
            new_cost = cost(ngbr, distance)
            if new_cost < best_cost:
                best_route, best_cost = ngbr, new_cost

        if best_cost >= current_cost:  # Corrected loop break logic
            break

        curr_route, current_cost = best_route, best_cost

    return curr_route, current_cost

# Run the algorithm
final_route, final_cost = hillclimb(distances)
print(f"Final Route: {final_route}")
print(f"Final Cost: {final_cost}")
