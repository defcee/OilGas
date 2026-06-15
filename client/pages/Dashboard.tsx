import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    const userData = JSON.parse(user);
    if (userData.role === "admin") {
      navigate("/admin");
    } else if (userData.role === "hse_officer") {
      navigate("/hse-dashboard");
    } else {
      navigate("/worker-dashboard");
    }
  }, [navigate]);

  return null;
}
