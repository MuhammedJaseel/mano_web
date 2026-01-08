"use client";
import { useEffect } from "react";

export default function AccessLogger() {
  useEffect(() => {
    const logAccess = async () => {
      try {
        let logId = localStorage.getItem("logId");
        if (logId) logId = "new";

        const url = `https://api.anolabs.site/acces-status/${logId}/web.m`;
        // const url = `http://localhost:4518/acces-status/${logId}/m_web`;

        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        localStorage.setItem("logId", data.id);
      } catch (err) {
        console.error("Error logging access:", err);
      }
    };

    logAccess();
  }, []);

  return null;
}
