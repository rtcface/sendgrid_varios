import { jsPDF } from "jspdf";
import "svg2pdf.js";

const doc = new jsPDF();

const element = document.getElementById("svg");
doc
  .svg(element, {
    x,
    y,
    width,
    height,
  })
  .then(() => {
    // save the created pdf
    doc.save("myPDF.pdf");
  });
/* 
  require.config({
    baseUrl: './node_modules'
  });
  require([
    'svg2pdf.js/dist/svg2pdf.umd.min',
    'jspdf/dist/jspdf.umd.min'
  ], (svg2pdf, jsPDF) => {



    const doc = new jsPDF()

    const element = document.getElementById('svg')
    doc
      .svg(element, {
        x,
        y,
        width,
        height
      })
      .then(() => {
        // save the created pdf
        doc.save('myPDF.pdf')
      }) 



  }); */
