const PassGenerator = () =>{
    const random1 = Math.floor(Math.random()*10000);
    const random2 = Math.floor(Math.random()*10000);
    const random3 = Math.floor(Math.random()*10000);
    const random4 = Math.floor(Math.random()*10000);
    
    const password = random1.toString(16) + random3.toString(16) + random2.toString(16) + random4.toString(16);

    document.getElementById('Pass-gen').innerText = password;
}
const resetbtn = () =>{
    document.getElementById('Pass-gen').innerText = "00000000";
}
document.getElementById('passgenrator').addEventListener(
    'click',
    PassGenerator
)
document.getElementById("Reseter").addEventListener(
    'click',
    resetbtn
)
