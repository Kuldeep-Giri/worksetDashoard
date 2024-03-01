const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination : function(req,file,cd){
        cd(null,'images/')
    },
    filename : function(req,file,cd){
        cd(null, file.originalname + path.extname(file.originalname));
    }
})

const filterFIles = (req,file,cd)=>{
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(allowedFileTypes.includes(file.mimetype)){
        cd(null,true)
    }
    else{
        cd(null,false)
    }
}

const upload = multer({storage,filterFIles})

module.exports = upload