import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5UhcP_fxrSWcwfMaBsdXQPnxh6UDKCAg",
  authDomain: "donorregestration.firebaseapp.com",
  databaseURL: "https://donorregestration-default-rtdb.firebaseio.com",
  projectId: "donorregestration",
  storageBucket: "donorregestration.appspot.com",
  messagingSenderId: "296892332454",
  appId: "1:296892332454:web:11ffb0b43e4d9a22067767"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);

export default fireDb;
export const dbRef = ref(fireDb);
