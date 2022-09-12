// domain/.netlify/functions/hello
const items = [
  {
    id: 1,
    name: 'giang',
  },
  {
    id: 2,
    name: 'phan',
  },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'hello Hitachi Vantara',
  };
};
