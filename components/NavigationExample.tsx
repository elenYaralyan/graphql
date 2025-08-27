"use client";

import { useUnit } from "effector-react";
import { navigationTriggered } from "@/stores/router";

export function NavigationExample() {
  const navigate = useUnit(navigationTriggered);
  console.log("navigate", navigate);

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">Router Integration Example</h3>
      <div className="space-x-2">
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate("/countries")}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Countries
        </button>
      </div>
    </div>
  );
}
