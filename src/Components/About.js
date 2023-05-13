import React from "react";
import { Carousel } from 'antd';

const About = () => {
    const contentStyle = {
        width: '100%',
        height: '450px',
        color: '#fff',
        "margin-bottom": "0px",
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

  return (
    <div id="about">
    <Carousel autoplay>
    <div>
    <img src="https://media.gettyimages.com/id/1359662582/photo/group-of-happy-college-student-stock-photo.jpg?s=612x612&w=gi&k=20&c=J-xMDmX3zw3n5kQzAl9DbYKwTi0zAJAbF6-Mm_KAiig=" style={contentStyle} alt="..." />
    </div>
    <div>
    <img src="https://media.istockphoto.com/id/914314318/photo/young-man-using-laptop-with-female-student-watching-and-smiling.jpg?s=612x612&w=0&k=20&c=ky2a8mV2Fw8v4QYXFUtxAOOMs14lbOM5BPVyK1xw7-k=" style={contentStyle} alt="..." />
    </div>
    <div>
    <img src="https://thumbs.dreamstime.com/b/smart-college-students-networking-laptop-library-doing-homework-together-smart-college-students-networking-laptop-169781950.jpg" style={contentStyle} alt="..." />
    </div>
  </Carousel>
  <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial;\n  color: white;\n}\n\n.split {\n  height: 250px;\n  width: 50%;\n  position: relative; \n display: inline-block;\n  z-index: 1;\n  top: 0;\n  overflow-x: hidden;\n  padding-top: 0px;\n}\n\n.left {\n  left: 0;\n  background-color: #df4759;\n}\n\n.right {\n  right: 0;\n  background-color: #707572 ;\n}\n\n.centered {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.centered img {\n  width: 150px;\n  border-radius: 50%;\n}\n" }} />
        <div className="split left">
          <div className="centered">
            <h3>Ranked</h3>
            <div style={{display:"inline-flex"}}>
            <h1>#11</h1>
            <p>&nbsp; ___ &nbsp;</p>
            <p style={{"margin-top":"10px"}} > RS Ranking 2022 </p>
            </div>
            <p>In the United Arab Emirates</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
          <h3>Ranked</h3>
          <div style={{display:"inline-flex"}}>
            <h1>#49</h1>
            <p>&nbsp; ___ &nbsp;</p>
            <p style={{"margin-top":"10px"}} > RS Ranking 2022 </p>
            </div>
            <p>In the Arab Region</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
