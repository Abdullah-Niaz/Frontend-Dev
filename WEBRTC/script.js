const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

let localStream;
let peerConnection;

const servers = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302",
        },
    ],
};

async function start() {
    localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    localVideo.srcObject = localStream;

    // Creating a peer to peer connection                                                                                           
    peerConnection = new RTCPeerConnection(servers);

    // Add local stream tracks to peer connection
    localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    // Create offer
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Simulate remote peer
    const remotePeer = new RTCPeerConnection(servers);
    remotePeer.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    remotePeer.onicecandidate = (e) => {
        if (e.candidate) {
            peerConnection.addIceCandidate(e.candidate);
        }
    };

    peerConnection.onicecandidate = (e) => {
        if (e.candidate) {
            remotePeer.addIceCandidate(e.candidate);
        }
    };

    // Exchange offers
    remotePeer.setRemoteDescription(peerConnection.localDescription);
    const answer = await remotePeer.createAnswer();
    await remotePeer.setLocalDescription(answer);
    await peerConnection.setRemoteDescription(remotePeer.localDescription);
}

start();