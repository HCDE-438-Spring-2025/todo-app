// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace this with your own config from the Firebase console

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection reference
const todosCollection = collection(db, "todos");

// Add a new todo to Firestore
export const addTodoToFirebase = async (todo) => {
  try {
    const docRef = await addDoc(todosCollection, {
      text: todo.text,
      completed: todo.completed,
      category: todo.category || "personal",
      createdAt: new Date().getTime()
    });
    
    return { ...todo, id: docRef.id };
  } catch (error) {
    console.error("Error adding todo: ", error);
    return todo;
  }
};

// Load todos from Firestore
export const loadTodosFromFirebase = async () => {
  try {
    const q = query(todosCollection, orderBy("createdAt"));
    const querySnapshot = await getDocs(q);
    
    const todos = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      todos.push({
        id: doc.id,
        text: data.text,
        completed: data.completed,
        category: data.category,
        createdAt: data.createdAt
      });
    });
    
    return todos;
  } catch (error) {
    console.error("Error loading todos: ", error);
    return [];
  }
};

// Update todo in Firestore
export const updateTodoInFirebase = async (id, updatedFields) => {
  try {
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, updatedFields);
    return true;
  } catch (error) {
    console.error("Error updating todo: ", error);
    return false;
  }
};

// Delete todo from Firestore
export const deleteTodoFromFirebase = async (id) => {
  try {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    return true;
  } catch (error) {
    console.error("Error deleting todo: ", error);
    return false;
  }
};

// Delete all todos from Firestore
export const deleteAllTodosFromFirebase = async (todos) => {
  try {
    const deletePromises = todos.map(todo => 
      deleteDoc(doc(db, "todos", todo.id))
    );
    
    await Promise.all(deletePromises);
    return true;
  } catch (error) {
    console.error("Error deleting all todos: ", error);
    return false;
  }
};