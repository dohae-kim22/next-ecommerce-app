"use client";
import { db } from "@/firebase/firebase";
import { collection, query } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";

const useFetchDocuments = (collectionName, arg) => {
  const [documents, setDocuments] = useState([]);

  const getDocuments = useCallback(async () => {
    const q = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDocs(q);
    let documentsArr = [];

    querySnapshot.forEach((document) => {
      documentsArr.push(document.data());
    });

    setDocuments(documentsArr);
  }, [collectionName, arg[0], arg[1], arg[2]]);

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  return { documents };
};

export default useFetchDocuments;
