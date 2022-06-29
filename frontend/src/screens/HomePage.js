import React from 'react';
import { MainBody } from '../componants/MainBody/MainBody';
import MainCheck from '../componants/MainBody/MainCheck';
import NavBar from '../componants/NavBar/NavBar';

export const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <br></br>
      <MainCheck></MainCheck>
    </div>
  );
};
