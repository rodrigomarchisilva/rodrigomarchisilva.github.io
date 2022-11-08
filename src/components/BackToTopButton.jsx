import React from "react";
import { Button } from 'react-bootstrap';
import { IoMdArrowDropup } from 'react-icons/io';

export default function BackToTopButton() {
  return (
    <Button
      className="bg-blue border back-to-top"
      onClick={() => { window.scrollTo(0, 0); }}
    >
      <IoMdArrowDropup />
    </Button>
  );
};