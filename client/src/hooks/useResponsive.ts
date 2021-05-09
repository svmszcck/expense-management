import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const MobileTablet = () => useMediaQuery({ query: '(max-width: 1224px)' })
export const BigScreen = () => useMediaQuery({ query: '(min-width: 1824px)' })
export const Retina = () => useMediaQuery({ query: '(min-resolution: 2dppx)' })
export const Portrait = () => useMediaQuery({ query: '(orientation: portrait)' })