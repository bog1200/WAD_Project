import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    region: "auto",
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
});

export {s3Client};

