import "./MainAbout.css";
export default function MainAbout() {
  return (
    <div className="mainAbout">
      <div className="pictureCard">
        <img
          src="profilepic.jpg"
          alt="Chirag Raisingh"
          className="profileImg"
        />
        <h1 className="profileName">Chirag Raisingh</h1>
        <div className="profileInfo">
          <p>
            University of British Columbia <br></br>Computer Engineer
          </p>
        </div>
      </div>
      <div className="AboutMeCard">
        <h1 className="AMCardTitle">About Me</h1>
        <p className="AMmainContent">
          Hey, I'm Chirag, a Computer Engineering student at the University of British Columbia.
          I'm passionate about technology and its applications in the real world. 
          I'm always looking for new opportunities to learn and grow as a developer. 
          I'm currently working on a few projects that I'm excited to share with you soon! 



        </p>
      </div>
    </div>
  );
}
