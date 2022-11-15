import React, { useEffect,useState } from 'react';
import firebaseApp from '../config';
import {collection, getDocs, getFirestore,addDoc } from 'firebase/firestore';
//import db from '../config';
//import {collection, getDocs } from 'firebase/firestore'
//import { async } from '@firebase/util';
function About (){
	const [users , setUsers] = useState([]);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const userCollectionRef = collection(getFirestore(firebaseApp), 'data');
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id })
            ))
        }
        getUsers();
    }, [] )
    const createUser = async () => {
        await addDoc(userCollectionRef, { name: newName, RollNumber: Number(newAge) });
      };

    return (
        <div>
            <div>
                <input
                   placeholder="Name..."
                   onChange={(event) => {
                     setNewName(event.target.value);
                   }}
                />
                <input
                   placeholder="RollNumber..."
                   onChange={(event) => {
                     setNewAge(event.target.value);
                   }}
                />
                <button onClick={createUser}> Create User</button>
            </div>
        {
           users.map((user) => {
                return (
                    <>
                        <div>
                            <h6>Name : {user.name}</h6>
                            <h6>RollNumber : {user.RollNumber}</h6>
                        </div>
                    </>
                    
                );
            })
        }
        </div>
    )};

export default About;