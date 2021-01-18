import React, { useEffect, useState } from 'react';
import { getProjectsFromFirestore } from '../firestore/firestoreService';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../store/reducers/modalReducer';
import { CirclePicker } from 'react-color';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';

function Sandbox() {
  const { title } = useParams();
  console.log(title);
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [projects, setProjects] = useState();
  const { currentUser = {} } = state;
  const { uid = '' } = currentUser || {};

  const getProjects = async () => {
    const response = await getProjectsFromFirestore(uid);
    setProjects(response);
  };
  useEffect(() => {
    getProjects();
  }, []);
  const [pickedColor, setPickedColor] = useState({ color: '#795548' });
  console.log(pickedColor);
  const handleChange = (color) => {
    setPickedColor({ color: color.hex });
    console.log('color', color);
  };
  return (
    <div>
      <div>test</div>
      {projects &&
        projects.map((project) => {
          return <div key={project.text}>{project.text}</div>;
        })}
      <button onClick={() => dispatch(openModal({ modalType: 'TestModal' }))}>
        open Modal
      </button>
      <CirclePicker
        circleSize={24}
        onChangeComplete={handleChange}
        color={pickedColor.color}
      />
      <LoadingComponent />
    </div>
  );
}

export default Sandbox;
