import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";



const firebaseConfig = {
    apiKey: "AIzaSyCptdd95BaSsnXJMvTCEsVVyDZblxDbJ6E",
    authDomain: "pwa-starter-6548d.firebaseapp.com",
    projectId: "pwa-starter-6548d",
    storageBucket: "pwa-starter-6548d.appspot.com",
    messagingSenderId: "157151329839",
    appId: "1:157151329839:web:37069a789b30043e78d0da",
    measurementId: "G-4969K02984"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

async function requestPermission() {
    console.log("권한 요청 중...");

    const permission = await Notification.requestPermission();
    if (permission === "denied") {
        console.log("알림 권한 허용 안됨");
        return;
    }

    console.log("알림 권한이 허용됨");

    // Initialize Firebase
    const token = await getToken(messaging, {
        vapidKey: import.meta.env.APP_VAPID_KEY,
    })

    if (token) console.log("token: ", token);
    else console.log("Can not get Token");

    onMessage(messaging, (payload) => {
        console.log("메시지가 도착했습니다.", payload);
        // ...
    });
}

requestPermission();