import { useEffect, useState } from "react";
import axios from "axios";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/complaints/my", {
        withCredentials: true,
      })
      .then((res) => setComplaints(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load complaints");
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-bold mb-4">📄 Your Complaints</h2>
      {error && <p className="text-red-600">{error}</p>}

      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {complaints.map((c) => (
            <div
              key={c._id}
              className="p-4 bg-white shadow rounded border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.description}</p>
              <p className="text-sm mt-1">
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
              <p className="text-sm">
                <b>Category:</b> {c.category} / {c.subcategory}
              </p>
              <p className="text-sm text-gray-500">
                Submitted on: {new Date(c.createdAt).toLocaleString()}
              </p>

              {c.images && c.images.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {c.images.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt="Complaint image"
                      className="h-20 w-20 object-cover border rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyComplaints;
