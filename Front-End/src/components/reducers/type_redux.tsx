interface get_userInfo {
    type: "get_userInfo";
    payload: any;
}

interface ListConnected {
    type: "receiveListConnected";
    payload: any;
}

interface receiveSecretKey {
    type: "secretKey";
    payload: any;
}

export type GetInfoUser = get_userInfo;
export type receiveListConnected = ListConnected;
export type secretKey = receiveSecretKey;