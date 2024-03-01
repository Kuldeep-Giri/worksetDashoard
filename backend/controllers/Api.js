const db = require("../config/connection")
const getData = (req,res)=>{
   try {

  const blog = 'SELECT * FROM blog ';
  const userdata = 'SELECT * FROM userdata';
  const career_gap = 'SELECT * FROM career_gap';
  const certificate = 'SELECT * FROM certificate';
  const communication_language = 'SELECT * FROM communication_language';
  const education = 'SELECT * FROM education';
  const internship = 'SELECT * FROM internship';
  const links = 'SELECT * FROM links';
  const link_type = 'SELECT * FROM link_type';
  const proff_skills = 'SELECT * FROM proff_skills';
  const project = 'SELECT * FROM project';
  const publications = 'SELECT * FROM publications';
  const services = 'SELECT * FROM services';
  const skills = 'SELECT * FROM skills';
  const testimonials = 'SELECT * FROM testimonials';
  const testscore = 'SELECT * FROM testscore';
  const volunteer = 'SELECT * FROM volunteer';
  



  // Execute SQL queries
  db.query(blog, (error1, results1) => {
    if (error1) throw error1;
    db.query(userdata, (error2, results2) => {
      if (error2) throw error2;
      db.query(career_gap, (error3, results3) => {
        if (error3) throw error3;
        db.query(certificate, (error4, results4) => {
          if (error4) throw error4;
          db.query(communication_language, (error5, results5) => {
            if (error5) throw error5;
            db.query(education, (error6, results6) => {
              if (error6) throw error6;
              db.query(internship, (error7, results7) => {
                if (error7) throw error7;
                db.query(links, (error8, results8) => {
                  if (error8) throw error8;
                  db.query(link_type, (error9, results9) => {
                    if (error9) throw error9;
                    db.query(links, (error10, results10) => {
                      if (error10) throw error10;
                      db.query(proff_skills, (error11, results11) => {
                        if (error11) throw error11;
                        db.query(project, (error12, results12) => {
                          if (error12) throw error12;
                          db.query(publications, (error13, results13) => {
                            if (error13) throw error13;
                            db.query(services, (error14, results14) => {
                              if (error14) throw error14;
                              db.query(skills, (error15, results15) => {
                                if (error15) throw error15;
                                db.query(testimonials, (error16, results16) => {
                                  if (error16) throw error16;
                                  db.query(testscore, (error17, results17) => {
                                    if (error17) throw error17;
                                    db.query(volunteer, (error18, results18) => {
                                      if (error18) throw error18;
                                      const data = {
                                        blog:results1,
                                        userdata:results2,
                                        career_gap:results3,
                                        certificate:results4,
                                        communication_language:results5,
                                        education:results6,
                                        internship:results7,
                                        links:results8,
                                        link_type:results9,
                                        proff_skills:results10,
                                        project:results11,
                                        link_type:results12,
                                        publications:results13,
                                        skills:results14,
                                        services:results15,
                                        testimonials:results16,
                                        services:results15,
                                        testimonials:results16,
                                        testscore:results17,
                                        testscore:results18
                                      }
                                      
                                      res.json(data);
                                });
                              });
                              
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            
            });
          });
        });
        });
     
        });
      });
    });
  });

   } catch (error) {
    console.error(error)
    res.send(error)
   }
}

const personalInfo = async (req, res) => {
  try {
    const userId = req.user.userId;
    const query = `SELECT id, name, dob, gender, profession, description, email, college_email, phone_no, alter_phone, street, city, state, country FROM userdata WHERE record_id = ?`;

    db.query(query, [userId], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
      } else {
        if (results.length > 0) {
          res.json({ success: true, results });
        } else {
          res.status(404).json({ error: 'Data not found' });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const AddpersionInfo = async (req, res) => {
  const userId = req.user.userId;
  console.log(userId)
  try {
    const {
      name,profession,description,phone_no,email,dob,gender,category,college_email,street,city,state,country,alter_phone,contact_desc
    } = req.body;

    const query =
      'INSERT INTO userdata(record_id,name, profession, description, phone_no, email, dob, gender, category, college_email, street, city, state, country, alter_phone, contact_desc) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(
      query,
      [userId,name,profession,description,phone_no,email,dob,gender,category,college_email,street,city,state,country,alter_phone,contact_desc
      ],
      (err, results) => {
        if (err) {
          
          console.error(err);
          res.status(500).send(err);
          return;
        }
        res.status(201).json({ message: "created", data: results });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(401).send("Found error");
  }
};

const educationDegree = async(req,res) =>{
  
  try {
    const recordId = req.params.record_id;
    const type = req.params.type
    const query = `SELECT cgpa,stream,type FROM education WHERE record_id = ${db.escape(recordId)} OR ${db.escape(type)}`;

    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const educationType = async(req,res) =>{
  
  try {
    const recordId = req.params.record_id;
    const query = `SELECT record_id , type FROM education WHERE record_id = ${db.escape(recordId)}`;

    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const Internship = async(req,res) =>{
  
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM internship WHERE record_id = ${db.escape(recordId)}`;

    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const Services = async(req,res) =>{
  
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM services WHERE record_id = ${db.escape(recordId)}`;
   
    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
        
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const Projects = async(req,res) =>{
  
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM project WHERE record_id = ${db.escape(recordId)}`;

    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const Skills = async(req,res) =>{
  
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM skills WHERE record_id = ${db.escape(recordId)}`;

    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const TestScore = async(req,res) =>{
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM testscore WHERE record_id = ${db.escape(recordId)}`;
    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const Publication = async(req,res) =>{
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM publications WHERE record_id = ${db.escape(recordId)}`;
    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}
const Testimonials = async(req,res) =>{
  try {
    const recordId = req.params.record_id;
    const query = `SELECT * FROM testimonials WHERE record_id = ${db.escape(recordId)}`;
    db.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error retrieving data' });
        console.log(error)
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error)
  }
}





module.exports ={getData,personalInfo,AddpersionInfo,educationDegree,educationType,Internship,Services,Projects,Skills,TestScore,Testimonials,Publication}

