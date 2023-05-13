import React from "react";

const Programs = () => {
    const article = {
        width:"100%",
        height: "100%",
    position: "relative",
    overflow: "hidden"
      };
      const image = {
        "object-fit": "cover",
    width: "100%",
    height: "800px",
      };
      const header = {
        "font-size": "80px",
    "color": 'white',
    "text-align": '-webkit-left',
    "position": "absolute",
    "top": "500px",
    'bottom': "0",
    "left": "0",
    "right": "0",
    "height": "fit-content",
    "margin": "auto"
      };

  return (
    <div id="Program">
        <article style={article}>
      <img style={image} src="https://www.usnews.com/object/image/0000015b-b66f-d19d-a7db-bfff8c710000/170428-collegetour-stock.jpg?update-time=1536955480383&size=responsive640" alt="background" />
      <h1 style={header}>Programs</h1>
    </article>
    <p style={{height: "30%",textAlign:"center", color: "black","margin-right": "20%","margin-left": "20%"}}>
    <h1>Its a Place you can Learn and Grow</h1>
    <h5>The University program has been built with a goal of educating students individuals, while also improving the live of their communites. It is designed with a holistic education in mind. The program is designed to be flexible, empowering you to choose your own pathway to success</h5>
    </p>
    </div>
  );
}

export default Programs;
