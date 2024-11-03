"use client";

import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  Sun,
  Moon,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sampleJson = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      address: { street: "123 Main St", city: "Boston", country: "USA" },
      active: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      address: { street: "456 Park Ave", city: "New York", country: "USA" },
      active: false,
    },
  ],
  metadata: { lastUpdated: "2024-01-01", version: "1.0.0" },
};

const JsonFormatter = () => {
  const [input, setInput] = useState(JSON.stringify(sampleJson, null, 2));
  const [jsonObject, setJsonObject] = useState(() => JSON.parse(input));
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setJsonObject(parsed);
      setError("");
    } catch (e) {
      setError("Invalid JSON input");
      setJsonObject(null);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
  };

  const JsonView = ({ data, level = 0 }: { data: any; level?: number }) => {
    const [isExpanded, setIsExpanded] = useState(level < 2);

    if (typeof data === "object" && data !== null) {
      const isArray = Array.isArray(data);
      const isEmpty = Object.keys(data).length === 0;

      if (isEmpty) {
        return <span className="text-gray-500">{isArray ? "[]" : "{}"}</span>;
      }

      return (
        <div className="ml-4">
          <span
            className="inline-flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-1"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 mr-1" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1" />
            )}
            <span className="text-gray-500">
              {isArray ? `Array(${Object.keys(data).length})` : `Object`}
            </span>
          </span>

          {isExpanded && (
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-2 mt-1">
              {Object.entries(data).map(([key, value], index) => (
                <div key={key} className="my-1">
                  <span className="text-blue-600 dark:text-blue-400">
                    {isArray ? "" : `${key}: `}
                  </span>
                  <JsonView data={value} level={level + 1} />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <span
        className={
          typeof data === "string"
            ? "text-green-600 dark:text-green-400"
            : typeof data === "number"
            ? "text-orange-600 dark:text-orange-400"
            : "text-purple-600 dark:text-purple-400"
        }
      >
        {typeof data === "string" ? `"${data}"` : String(data)}
      </span>
    );
  };

  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full h-full flex flex-col shadow-lg m-4 bg-white dark:bg-gray-800">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">
              JSON Formatter
            </CardTitle>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun className="text-yellow-500" />
              ) : (
                <Moon className="text-blue-500" />
              )}
            </button>
          </div>
        </CardHeader>

        {error && (
          <Alert variant="destructive" className="mx-6 mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <CardContent className="flex-1 flex gap-4 p-4 min-h-0">
          <div className="flex-1 flex flex-col h-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Raw JSON</span>
            </div>
            <textarea
              value={input}
              onChange={handleInputChange}
              className="w-full h-full font-mono text-sm p-4 rounded border bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder='{"example": "Paste your JSON here"}'
            />
          </div>

          <div className="flex-1 flex flex-col h-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Formatted JSON</span>
              <Button onClick={handleCopy} variant="outline" size="sm">
                Copy
              </Button>
            </div>
            <div className="h-full overflow-auto rounded bg-gray-50 dark:bg-gray-900 p-4 font-mono text-sm">
              {jsonObject ? (
                <JsonView data={jsonObject} />
              ) : (
                <div className="text-gray-500">Invalid JSON</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JsonFormatter;
