interface get_userInfo {
    type: "get_userInfo";
    payload: any;
}

interface ListConnected {
    type: "receiveListConnected";
    payload: any;
}

interface receivedMSG {
    type: "receivedMessage";
    payload: any;
}

interface clearMSG {
    type: "clearMessage";
    payload: any;
}

export type GetInfoUser = get_userInfo;
export type receiveListConnected = ListConnected;
export type receivedMessage = receivedMSG;
export type clearMessage = clearMSG;