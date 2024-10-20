const fs = require("fs");

// to change file path from uploads\\images\\... to uploads/images/...
const changeName = (path) => {
  return path.replaceAll("\\", "/");
};

// to delete file if problems happened

const rmoveFile = (path) => {
   fs.unlink(path,err=>err);
};

module.exports = {
  changeName,
  rmoveFile,
};