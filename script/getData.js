class GetData {
    constructor() {
        this.aiChatData = []; //aiの会話内容
        this.userChatData = []; //userの会話内容

        this._getDataFromPHP();
    }
    _getDataFromPHP() {
        //phpからデータを受け取る
        this.aiChatData = ['ダミーダミーダミー','ダミーダミーダミー','ダミーダミーダミー','ダミーダミーダミー',];
        this.userChatData = ['ダミーダミーダミー','ダミーダミーダミー','ダミーダミーダミー','ダミーダミーダミー',];
    }
    outChatDataAi() {
        return this.aiChatData;
    }
    outChatDataUser() {
        return this.userChatData;
    }
}