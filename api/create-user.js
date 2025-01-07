const axios = require("axios");

const API_URL = "http://192.168.72.26:8080/api/auth/local/register";
const API_TOKEN =
  "Bearer 6d15e9dbb879bc04320edd757fc1b82dc3e16325b070f89b3fc14be9c4a2bb2c54510262e9d2de32f70c4cbeb2f7ff57400df6089c0565828d65c8b43ab10fb521d9fd735dc51e82305fb340efe3a659d60d5847b2fdda7d4d9594fd61f6aaf58fbb0a662488a9829ff45c8a1234158e1af0582d0b6806563b5af3823acffd64";

var name = "nattawutx";
var mail = "nattawutx@gmail.com"

const payload = {
  username: name,
  email: mail,
  password: "nattawut1212345",
};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("ส่ง API เสร็จสิ้น!", response.data);
  })
  .catch((err) => {
    console.log("ส่งไม่สำเร็จ", err);
  });