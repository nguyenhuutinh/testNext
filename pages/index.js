import styles from "../styles/Home.module.css";
import "normalize.css";

import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';



const PageOne = lazy(() => import('../containers/PageOne'));
const PageTwo = lazy(() => import('../containers/PageTwo'));
const PageThree = lazy(() => import('../containers/PageThree'));
const PageFour = lazy(() => import('../containers/PageFour'));
const PageFive = lazy(() => import('../containers/PageFive'));

export default function Home() {
  return (
    <>
      {/* <PageOne /> */}
      <Suspense fallback={null}> <PageTwo /></Suspense>
      <Suspense fallback={null}> <PageThree /></Suspense>
      <Suspense fallback={null}> <PageFour /></Suspense>
      <Suspense fallback={null}> <PageFive /></Suspense>
      
      {/*  <Footer /> */}
    </>
  );
}
