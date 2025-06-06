import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetchDocument = (collectionName, documentId) => {
  const [document, setDocument] = useState(null);

  // Getting a document from Firestore
  const getDocument = useCallback(async () => {
    const docRef = doc(db, collectionName, documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const obj = {
        id: documentId,
        ...docSnapshot.data(),
      };

      setDocument(obj);
    } else {
      toast.error("Document Not Found");
    }
  }, [collectionName, documentId]);

  useEffect(() => {
    getDocument();
  }, [getDocument]);

  return { document };
};

export default useFetchDocument;
