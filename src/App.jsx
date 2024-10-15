import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Auth from "./Auth";
import PhotoScanner from "./PhotoScanner";
import LandingPage from "./LandingPage";

const loadingMessages = [
  "Preparing wonders for you...",
  "Loading our wonderful app for a wonderful client...",
  "Getting ready to extract text...",
  "Just a moment, we're working on it...",
];

const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [ellipsis, setEllipsis] = useState("...");

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % loadingMessages.length
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
        <h1 className="text-3xl animate-pulse">Loading{ellipsis}</h1>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Router>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
          <h1 className="text-3xl font-bold mb-4 animate-pulse">
            Loading{ellipsis}
          </h1>
          <p className="text-xl">{loadingMessages[currentMessageIndex]}</p>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/scanner"
            element={user ? <PhotoScanner /> : <Navigate to="/auth" />}
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
