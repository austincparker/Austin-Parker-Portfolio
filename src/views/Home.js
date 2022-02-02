import React from 'react';

export default function Home() {
  return (
    <div className="text-center container">
      <div
        className="prof-pic-bkg row align-items-center"
        style={{ background: 'url(../../../imgs/acp-background.png)' }}
      >
        <div className="col-md-6 prof-pic-circ">
          <img
            src="../../../imgs/acp-1-white.png"
            alt="austin-parker"
            className="prof-pic"
          />
        </div>
        <div className="col-md-6 text-end">
          <div className="hobbies">
            <h2>Musician</h2>
            <h2>Mountain Biker</h2>
            <h2>Kombucha Brewer</h2>
            <h2>Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
