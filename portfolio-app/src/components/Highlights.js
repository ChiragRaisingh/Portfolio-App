import "./Highlights.css";
import HighlightCard from "./HighlightCard.js";
import Marquee from "react-fast-marquee";
export default function Highlights() {
  return (
    <>
      <div className="Highlights">
        <Marquee speed={20}  >

        <HighlightCard
          imgSrc="/OmanPharmaHighlight.avif"
          title="Intern at Oman Pharmaceuticals Products"
          description="Designed and created a new website for OPP"
          popupContent={
            <>
              <h1>Summer Internship at Oman Pharmaceutical Products</h1>
              <img src="/OmanPharmaHighlight.avif" alt="Web Developer" />
              <p>
                Over the summer, I had the opportunity to design and create a website for Oman Pharmaceutical Products (OPP) as an intern. While I already had experience building websites using basic HTML, CSS, and JavaScript, I decided to take a more user-friendly approach by using Wix Studio. This decision came after a discussion with the project lead, a senior employee at the company. He emphasized the need for a platform that could be easily maintained after my internship ended—something intuitive enough for someone without coding experience but robust enough to accommodate future updates.
                <br /><br />Over several weeks, I collaborated closely with the project lead and the graphic designer, refining ideas and iterating on the design to ensure we delivered an optimal product. Together, we developed a website that was modern, visually appealing, and functional, aligning with the company’s vision.
                <br /><br />The final step was presenting the website to the Owner of the Company, Mr. Sujay Hamlai. After the presentation, there were only a few minor adjustments needed, and overall, he loved the outcome!
                <br /><br />From this experience, I gained valuable insights into collaboration, the workflow of a real business, effective communication, and presentation skills. I also deepened my expertise in Wix Studio, website development, and UX/UI design.
              </p>
            </>
          }
        />

          <HighlightCard 
          imgSrc="/BSM Student Tracker.png"
          title="Student Tracker - British School Muscat"
          description="Created a website and databse to track student progress"
          popupContent={
            <>
              <h1></h1>
              <img src="" alt="" />
              <p>

              </p>
            </>
            }
          />

          <HighlightCard 
          imgSrc="/InnovateOman.jpg"
          title="Innovate Oman 2021 Competition Champion "
          description="Won the Innovate Oman competition with a team of 4"
          popupContent={
            <>
              <h1></h1>
              <img src="" alt="" />
              <p>
                
              </p>
            </>
            }
            />

          <HighlightCard 
          imgSrc="/Flappy Bird Unity.jpeg"
          title="Recreated Flappy Bird Utilizing Unity" 
          description="Created a replica of the popular game Flappy Bird using Unity"
          popupContent={
            <>
              <h1></h1>
              <img src="" alt="" />
              <p>
                
              </p>
            </>
            }
            />

          <HighlightCard 
          imgSrc=""
          title=""
          description=""
          popupContent={
            <>
              <h1></h1>
              <img src="" alt="" />
              <p>
                
              </p>
            </>
            }
            />

          <HighlightCard 
          imgSrc=""
          title=""
          description=""
          popupContent={
            <>
              <h1></h1>
              <img src="" alt="" />
              <p>
                
              </p>
            </>
            }
            />

          <HighlightCard 
          imgSrc=""
          title=""
          description=""
          popupContent={
            <>
              <h1></h1>
              <img src="" alt="" />
              <p>
                
              </p>
            </>
            }
            />

        </Marquee>
      </div>
    </>
  );
}
