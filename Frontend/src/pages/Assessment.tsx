// src/components/AdminPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Installation {
  id: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

const AdminPage: React.FC = () => {
  const [installations, setInstallations] = useState<Installation[]>([]);
  const [error, setError] = useState<string>("");

  // Fetch all installation requests
  useEffect(() => {
    const fetchInstallations = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/installation");
      // @ts-expect-error jo hoga dekha jaega
        setInstallations(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch installation requests.");
      }
    };

    fetchInstallations();
  }, []);

  console.log(installations)
  // Handle installation status update
  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/admin/installation/${id}`, { status });
      const updatedInstallation = response.data;

      // Update the installations list
      // @ts-expect-error jo hoga dekha jaega
      setInstallations((prev) =>
        prev.map((installation) =>

      // @ts-expect-error jo hoga dekha jaega
          installation.id === updatedInstallation.id ? updatedInstallation : installation
        )
      );
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update status.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Installation Requests</h1>

      {error && (
        <p className="p-2 text-center text-red-600 bg-red-100 rounded-md mb-4">
          {error}
        </p>
      )}

<div className="bg-white rounded-lg shadow-md p-4">
  {installations.map((installation) => (
    <div key={installation.id} className="border-b py-4 flex justify-between">
      <div>
      <p className="font-medium">
        {installation.fullName || "Unknown User"} {/* Use fullName directly */}
      </p>
      <p className="text-sm text-gray-600">
        Phone: {installation.phone} {/* Display phone number */}
      </p>
      <p className="text-sm text-gray-600">
        Address: {installation.address} {/* Display address */}
      </p>
      <p className="text-sm text-gray-600">
        Location: {installation.location} {/* Display location */}
      </p>
      <p className="text-sm text-gray-600">
        System Type: {installation.systemType} {/* Display system type */}
      </p>
      <p className="text-sm text-gray-600">
        System Size: {installation.systemSize} {/* Display system size */}
      </p>
      <p className="text-sm text-gray-600">
        Roof Size: {installation.roofSize} {/* Display roof size */}
      </p>
      <p className="text-sm text-gray-600">
        Energy Consumption: {installation.energyConsumption} {/* Display energy consumption */}
      </p>
      <p className="text-sm text-gray-600">
        Status:{" "}
        <span
          className={`font-semibold ${
            installation.status === "ACCEPTED"
              ? "text-green-600"
              : installation.status === "REJECTED"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {installation.status || "PENDING"} {/* Display status */}
        </span>
        
      </p>
      </div>

      <div className="flex gap-2 mt-2 h-12">
        <button
          onClick={() => handleUpdateStatus(installation.id, "ACCEPTED")}
          className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Accept
        </button>
        <button
          onClick={() => handleUpdateStatus(installation.id, "REJECTED")}
          className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Reject
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default AdminPage;