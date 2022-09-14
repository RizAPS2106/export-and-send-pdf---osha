module.exports = ({name, email, position, birthPlace, birthDate, gender, status, education, edufrom, eduto, workingexp, workfrom, workto, workingpos, workingdesc, capabilities}) => { 
    const today = new Date();
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>CV</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
          <style>
            body {
               font-family: 'Helvetica Neue', 'Helvetica';
            }

            p {
               margin: 0;
            }

            .container {
               padding: 30px
            }

            .text-center {
               text-align: center;
            }  
            
            table, th, td {
               border: 1px solid #000;
               padding: 5px;
            }

            table {
               width:100%;
               border-collapse: collapse;
            }

            table th {
               background-color: #000;
               color: #fff;
            }

            table tr>td:first-of-type {
               color: #ff4500;
            }

            .w-100 {
               width: 100vw;
            }  

            .d-flex-between {
               display: flex;
               justify-content: center;
            }

            .thefooter {
               height: 100px !important;
               transform: translateY(-500px) !important;
               padding-bottom: 500px !important;
               position: relative;
            }

            .footerimg {
               position: relative;
            }

            .footertext {
               position: absolute;
               top: 0
               right: 30px;
               z-index: 3;
            }

            .text-50 { 
               font-size: 50px;
            }

            .pt-c {
               padding-top: 30px;
            }

            .bold {
               font-weight: 700;
            }
          </style>
       </head>
       <body>
            <div class='header' style='margin-bottom:450px;'>
               <img src='https://oshatechnology.com/CV Header.png' alt='gambar header' class='w-100' style='margin-bottom:30px;'/>
               <h1 class='text-center' style='font-size:50px;margin-bottom:30px;'>${name}</h1>
               <h3 class='text-center' style='font-size:30px;margin-bottom:30px;'>${position}</h3>
            </div>
            <div class='container'>
               <table class='table'>
                  <tr>
                     <th colspan='2' class='text-warning'>
                        <div class='d-flex-between w-100'>
                           <span class='pt-c'>Personal Details<span>
                        </div>
                     </th>
                  </tr>
                  <tr>
                     <td>Candidate Name</td>
                     <td>${name}</td>
                  </tr>
                  <tr>
                     <td>Candidate Email</td>
                     <td>${email}</td>
                  </tr>
                  <tr>
                     <td>Candidate Position</td>
                     <td>${position}</td>
                  </tr>
                  <tr>
                     <td>Place & Date of Birth</td>
                     <td>${birthPlace}, ${birthDate}</td>
                  </tr>
                  <tr>
                     <td>Male</td>
                     <td>${gender}</td>
                  </tr>
                  <tr>
                     <td>Marital Status</td>
                     <td>${status}</td>
                  </tr>
                  <tr>
                     <th colspan='2'>Formal Education</th>
                  </tr>
                  <tr>
                     <td>${edufrom} - ${eduto}</td>
                     <td>${education}</td>
                  </tr>
               </table>
            </div>

            <div class='container'>
               <table class='table'>
                  <tr>
                     <th colspan='2' class='text-warning'>
                        <div class='d-flex-between'>
                           <p>Latest Working Experience</p>
                        </div>
                     </th>
                  </tr>
                  <tr>
                     <td>Period</td>
                     <td>${workfrom} - ${workto}</td>
                  </tr>
                  <tr>
                     <td>Company</td>
                     <td>${workingexp}</td>
                  </tr>
                  <tr>
                     <td>Position</td>
                     <td>${workingpos}</td>
                  </tr>
                  <tr>
                     <td>Job Desc</td>
                     <td>${workingdesc}</td>
                  </tr>
               </table>
            </div>

            <div class='container'>
               <table class='table'>
                  <tr>
                     <th colspan='2' class='text-warning'>
                        <div class='d-flex-between'>
                           <p>Technical Skills</p>
                        </div>
                     </th>
                  </tr>
                  <tr>
                     <td>IT Capabilities</td>
                     <td>${capabilities}</td>
                  </tr>
               </table>
            </div>
            
            <div id="pageFooter" class="thefooter">
               <div class="footertext>
                  <p class='bold'>PT. OSHA TEKNOLOGI INDONESIA</p>
                  <p>Komp. Griya Cikutra, Blok B, No. 8, Cibeunying, Bandung, Jawa Barat, 40191</p>
                  <p>0878 1770 0088 - www.oshatechnology.com</p>
               </div>
               <img src='https://oshatechnology.com/CV Footer.png' class='w-100 footeerimg'>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
         </body>
    </html>
    `;
}