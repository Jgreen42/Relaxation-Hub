// Firebase configuration (you'll get this from the Firebase Console)
var firebaseConfig = {
    apiKey: "AIzaSyCzwXhb6arV7bnpNVVrs-M-PSr_ZP7ry-Q",
    authDomain: "relaxation-hub.firebaseapp.com",
    projectId: "relaxation-hub",
    // ... other config details
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firestore database
var db = firebase.firestore();

// Add a video
function addVideo(youtubeId, metadata, tags) {
    db.collection("videos").add({
        youtubeId: youtubeId,
        metadata: metadata,
        tags: tags
    })
    .then((docRef) => {
        console.log("Video added with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding video: ", error);
    });
}

// Retrieve all videos
function getVideos() {
    db.collection("videos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    });
}
