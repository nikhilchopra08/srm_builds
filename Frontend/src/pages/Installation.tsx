import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  location: string;
}

const InstallationRequestPage = () => {
  // State for user information
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '', // Maps to `fullName` in the backend
    email: '',
    phone: '',
    address: '',
    location: '', // Add this field
    systemType: 'Solar Panel System',
    systemSize: '5', // Ensure it's a string
    roofSize: 500,
    energyConsumption: 1000, // Add this field
    additionalNotes: '', // Maps to `notes` in the backend
  });

  // Fetch user information
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<{ user: User }>('http://localhost:3000/api/v1/user');
        console.log('User data:', response.data); // Log the response data
        const userData = response.data.user; // Access the nested `user` object
        setUser(userData);
        setFormData((prevData) => ({
          ...prevData,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          location: userData.location, // Auto-fill location if available
        }));
      } catch (error) {
        setError('Failed to fetch user information');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Combine user information and form data
    const installationRequest = {
      userId: user?.id, // Include the user ID
      fullName: formData.name, // Map `name` to `fullName`
      phone: formData.phone,
      address: formData.address,
      location: formData.location, // Add this field
      systemType: formData.systemType,
      systemSize: formData.systemSize, // Ensure it's a string
      roofSize: formData.roofSize,
      energyConsumption: formData.energyConsumption, // Add this field
      notes: formData.additionalNotes, // Map `additionalNotes` to `notes`
    };

    console.log('Installation Request:', installationRequest); // Log the request body

    try {
      // Send the installation request to the backend
      await axios.post('http://localhost:3000/api/v1/installation', installationRequest);
      alert('Thank you for your request! We will contact you shortly.');
      setFormData({
        name: '', // Maps to `fullName` in the backend
        email: '',
        phone: '',
        address: '',
        location: '', // Add this field
        systemType: 'Solar Panel System',
        systemSize: '5', // Ensure it's a string
        roofSize: 500,
        energyConsumption: 1000, // Add this field
        additionalNotes: '', // Maps to `notes` in the backend
      })
    } catch (error) {
      console.error('Error submitting installation request:', error);
      alert('Failed to submit the request. Please try again.');
    }
  };

  // Display loading state
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">Loading user information...</p>
        </div>
      </section>
    );
  }

  // Display error state
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Installation Request</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Fill out this form to request installation of green energy solutions for your home.
        </p>

        {/* Installation Request Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* System Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">System Type</label>
              <select
                name="systemType"
                value={formData.systemType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option>Solar Panel System</option>
                <option>Solar + Battery Storage</option>
                <option>Heat Pump System</option>
                <option>Complete Home Energy System</option>
              </select>
            </div>

            {/* System Size */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">System Size (kW)</label>
              <input
                type="text" // Use text input for `systemSize` (string)
                name="systemSize"
                value={formData.systemSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Roof Size */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Roof Size (sq ft)</label>
              <input
                type="number"
                name="roofSize"
                value={formData.roofSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="100"
                max="5000"
                required
              />
            </div>

            {/* Energy Consumption */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Monthly Energy Consumption (kWh)</label>
              <input
                type="number"
                name="energyConsumption"
                value={formData.energyConsumption}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min="100"
                max="10000"
                required
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InstallationRequestPage;