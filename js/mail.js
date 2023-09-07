// ローカル環境
//const domain = 'http://localhost';
// ステージング環境
const domain = 'https://pf.staging.kindai.design';
// 本番環境
//const domain = 'https://pf.kindai.design';

const sendMailUrl = `${domain}/api/contact/company`;

function sendMail(target) {
    const form = document.getElementById('mail_form');
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    target.disabled = true;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', sendMailUrl);
    xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert(`お問い合わせの送信に失敗しました`);
        } else {
            alert(`お問い合わせの送信に成功しました`);
        }
    	target.disabled = false;
    }
    xhr.onerror = () => {
        alert(`お問い合わせの送信に失敗しました`);
    	target.disabled = false;
    }
}

document.getElementById('mail_send').onclick = function(event){
    sendMail(event.target);
};
