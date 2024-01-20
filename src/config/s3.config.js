// module
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
    region: 'your-region'
});

const s3 = new AWS.S3({
    endpoint: 'https://s3.wasabisys.com',
    signatureVersion: 'v4'
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'your-bucket-name',
        key: function (req, file, cb) {
            cb(null, 'path/to/your/files/' + Date.now() + '-' + file.originalname);
        }
    })
});

module.exports = upload;
