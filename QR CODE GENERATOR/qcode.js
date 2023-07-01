const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const spinner=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-save');
function generateQRCode(e){
   e.preventDefault();
   const url=document.querySelector('#url').value;
   const size=document.querySelector('#size').value;
   const clrDark=document.querySelector('#colorDark').value;
   const clrLight=document.querySelector('#colorLight').value;

   if(url==""){
    alert("Please Enter Your website link");
   }else{
    spinner.style.display='flex';

    setTimeout(()=>{
        //Hide Spinner
        spinner.style.display='none';
        qrcodeElement.innerHTML="";
        const qrcode=new QRCode('qrcode',{
            text: url,
            width: size,
	        height: size,
            colorDark :clrDark ,
	        colorLight :clrLight,
            correctLevel : QRCode.CorrectLevel.H
        });
    },1000);
 }
   
}
frm.addEventListener('submit',generateQRCode);
btnSave.addEventListener('click',()=>{
    setTimeout(()=>{
        const imgSrc=qrcodeElement.querySelector('img').src;
        btnSave.href=imgSrc;
        btnSave.download='qrcode';
    },50);
});