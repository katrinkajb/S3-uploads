module.exports = class Upload {
    fileName;
    fileBody;

    constuctor(row) {
        this.fileName = row.id;
        this.fileBody = row.fileBody;
    }
}

// post function
const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  
  const params = {
    fileName: 'cat.jpg', // File name you want to save as in S3
    fileBody: fileContent
  };
  
  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
