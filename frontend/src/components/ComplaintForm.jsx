import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function ComplaintForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    state: "",
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    images.forEach((img) => data.append("images", img));

   try {
  const res = await axios.post("http://localhost:5000/api/complaints/submit", data, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
  toast.success("✅ Complaint submitted successfully!");
  setFormData({ title: "", description: "", category: "", subcategory: "", state: "" });
  setImages([]);
  } 
catch (err) {
  toast.error("❌ Failed to submit complaint.");
}

  };

  return (
    <form className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Submit a Complaint</h2>
      {["title", "description", "category", "subcategory", "state"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          value={formData[field]}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
      ))}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </form>
  );
}

export default ComplaintForm;
