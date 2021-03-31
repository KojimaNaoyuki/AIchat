class GetData {
    constructor() {
        this.aiChatData = []; //aiの会話内容
        this.userChatData = []; //userの会話内容

        this._getDataFromPHP();
    }
    _getDataFromPHP() {
        //phpからデータを受け取る
        this.aiChatData = ['ダミーダミーダミーダミーダミーダミーダミーダミーダミー','ダミーダミーダミー','ダミーダミーダミーダミーダミーダミーダミーダミーダミー','ダミーダミーダミー'];
        this.userChatData = ['ダミーダミーダミー','ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー','ダミーダミーダミー'];
    }
    outChatDataAi() {
        //aiChatDataを出力
        return this.aiChatData;
    }
    outChatDataUser() {
        //userChatDataを出力
        return this.userChatData;
    }
}