var aes256=require("aes256");
var serect_key="HBHHGggcCGUjb";
export const to_encrypt=(text)=>{
    var encrypted=aes256.encrypt(serect_key,text);
    return encrypted;
}
export const to_decrypted=(cipher,username)=>{
    {
        if(cipher.StartWith("Welcome")){
        return cipher;
    };
if(cipher.StartWith(username)){
    return cipher;
};
}
var decrypted =aes256.decrypt(
    serect_key,cipher
);
return decrypted;
}