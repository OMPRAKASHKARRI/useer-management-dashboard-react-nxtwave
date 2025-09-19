import { useState, useEffect } from 'react';
import { User } from '../types/User';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      
      // Add like functionality to each user
      const usersWithLikes = data.map((user: User) => ({
        ...user,
        liked: false,
        likeCount: Math.floor(Math.random() * 100) // Random initial likes
      }));
      
      setUsers(usersWithLikes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (updatedUser: User) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  const deleteUser = (userId: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const toggleLike = (userId: number) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? {
              ...user,
              liked: !user.liked,
              likeCount: user.liked ? (user.likeCount || 0) - 1 : (user.likeCount || 0) + 1
            }
          : user
      )
    );
  };

  return {
    users,
    loading,
    error,
    updateUser,
    deleteUser,
    toggleLike,
    refetch: fetchUsers
  };
};