// ローカル環境
//const domain = 'http://localhost';
// ステージング環境
const domain = 'https://pf.staging.kindai.design';
// 本番環境
//const domain = 'https://pf.kindai.design';
// ポータル
// const domain = 'https://www.kindai.design';

const sendMailUrl = `${domain}/api/contact/company`;

function sendMail() {
    const form = document.getElementById('mail_form');
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', sendMailUrl);
    xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(data));
}

document.getElementById('mail_send').onclick = function(){
    sendMail();
};