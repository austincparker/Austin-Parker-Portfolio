import React from 'react';
import { Button } from 'reactstrap';

export default function Contact() {
  return (
    <div className="text-center">
      <h1 className="display-4">Contact</h1>
      <h5>Austin Parker</h5>
      <h5>austincparker@gmail.com</h5>
      <h5>615-601-9181</h5>
      <Button color="primary" onClick={() => console.warn('you clicked me')}>
        View My Resume
      </Button>
    </div>
  );
}
