"use client";

import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { toast } from "react-toastify";

const useFetchCollection = (collectionName) => {
  // This is a custom hook to fetch a collection from Firestore
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = () => {
    setIsLoading(true);
    try {
      // Fetch collection from Firestore
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // console.log(allData);
        setData(allData);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  return { data, isLoading };
};

export default useFetchCollection;
