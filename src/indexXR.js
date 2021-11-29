import getXR from './GetXR.js';

// const xr = getXR("no");  // Get the native XRSystem object
const xr = getXR("yes"); // Always returns an XRSystem from the polyfill
// const xr = getXR("if-needed"); // 


navigator.xr.requestSession("inline").then((session) => {
    let xrSession = session;
    console.log(xrSession);
    session.addEventListener("end", ()=>{console.log('session ends');});
});