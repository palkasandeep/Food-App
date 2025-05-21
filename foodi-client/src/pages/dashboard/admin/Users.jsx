import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { UserCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import useAxiosSecure from "../../../hooks/useAxiossecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // ✅ Fetch users using AxiosSecure
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      if (res.status !== 200) {
        throw new Error("Failed to fetch users");
      }
      return res.data;
    },
  });

  // ✅ Delete user mutation using AxiosSecure
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/users/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to delete user");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  // ✅ Function to delete user with confirmation
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteMutation.mutate(id);
    }
  };

  // ✅ Mock admin check (replace this with actual authentication)
  const isAdmin = true;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Email</th>
              <th className="p-3 border border-gray-300">Role</th>
              {isAdmin && <th className="p-3 border border-gray-300">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className={`hover:bg-gray-100 ${user.role === "admin" ? "bg-blue-100 font-semibold" : ""}`}
              >
                <td className="p-3 border border-gray-300 flex items-center gap-2">
                  {user.role === "admin" ? (
                    <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
                  ) : (
                    <UserCircleIcon className="h-6 w-6 text-gray-500" />
                  )}
                  {user.name}
                </td>
                <td className="p-3 border border-gray-300">{user.email}</td>
                <td className={`p-3 border border-gray-300 ${user.role === "admin" ? "text-blue-500 font-bold" : ""}`}>
                  {user.role}
                </td>
                {isAdmin && user.role !== "admin" && (
                  <td className="p-3 border border-gray-300 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300 flex items-center justify-center"
                    >
                      <Trash className="w-5 h-5 mr-1" />
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;