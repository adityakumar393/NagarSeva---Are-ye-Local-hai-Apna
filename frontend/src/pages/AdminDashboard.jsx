import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/complaints/all", {
        withCredentials: true,
      })
      .then((res) => setComplaints(res.data))
      .catch((err) => {
        console.error(err);
        setError("Unauthorized or server error.");
      });
  }, []);
const updateStatus = async (id, newStatus) => {
  try {
    await axios.patch(
      `http://localhost:5000/api/complaints/${id}/status`,
      { status: newStatus },
      { withCredentials: true }
    );
    setComplaints((prev) =>
      prev.map((c) =>
        c._id === id ? { ...c, status: newStatus } : c
      )
    );
    toast.success("✅ Status updated");
  } catch (err) {
    toast.error("❌ Failed to update status");
  }
};


  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">🛠 Admin Dashboard</h2>
      {error && <p className="text-red-600">{error}</p>}
      {complaints.length === 0 ? (
        <p>No complaints to show.</p>
      ) : (
        complaints.map((c) => (
          <div key={c._id} className="bg-white shadow rounded p-4 mb-4 border-l-4 border-gray-300">
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.description}</p>
            <p className="text-sm mt-1">Submitted by: <b>{c.complainant?.email}</b></p>
            <p className="text-sm">
              <b>Status:</b>{" "}
              <span
                className={`${
                  c.status === "resolved"
                    ? "text-green-600"
                    : c.status === "in_progress"
                    ? "text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                {c.status}
              </span>
            </p>

            <div className="flex gap-2 mt-2">
              <select
                value={c.status}
                onChange={(e) => updateStatus(c._id, e.target.value)}
                className="border p-1 rounded"
              >
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            {c.images?.length > 0 && (
              <div className="flex gap-2 mt-2">
                {c.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Uploaded"
                    className="h-20 w-20 object-cover rounded border"
                  />
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
