class DisplayChat {
    constructor() {
        this.OB = {}
        this.OB.getData = new GetData();

        this.DOM = {};
        this.DOM.chatBox = document.querySelector('#chat-box__inner');

        this.aiChatData = this.OB.getData.outChatDataAi();
        this.userChatData = this.OB.getData.outChatDataUser();

        this._createDom();
    }

    _createDom() {
        const aiChat = this._createAiChat();
        const userChat = this._createUserChat();

        aiChat.forEach(Element => {
            this.DOM.chatBox.appendChild(Element);
        });

        userChat.forEach(Element => {
            this.DOM.chatBox.appendChild(Element);
        });
    }
    _createAiChat() {
        //ai chatを作成
        //戻り値 : aiの会話内容が入ったdivタグを配列で返す

        let addTextP = []; //会話文が付与されたpタグが格納される
        let addP_Div = []; //会話文が入っているpタグが付与されたdivタグが格納される
        
        //pタグにaiの会話文を付与
        this.aiChatData.forEach(Element => {
            let text = document.createTextNode(Element);
            const p = document.createElement('p');
            p.appendChild(text);
            addTextP.push(p);
        });

        console.log('addTextP : ' + addTextP);

        //divタグにpタグを付与
        addTextP.forEach(Element => {
            const div = document.createElement('div');
            div.classList.add('ai-chat'); //divにai-chatクラスを付与
            div.appendChild(Element);
            addP_Div.push(div);
        });

        console.log('addP_Div : ' + addP_Div);

        return addP_Div;
    }
    _createUserChat() {
        //user chatを作成
        //戻り値 : userの会話内容が入ったdivを配列で返す

        let addTextP = []; //会話文が付与されたpタグが格納される
        let addP_Div = []; //会話文が入っているpタグが付与されたdivタグが格納される
        
        //pタグにaiの会話文を付与
        this.userChatData.forEach(Element => {
            let text = document.createTextNode(Element);
            const p = document.createElement('p');
            p.appendChild(text);
            addTextP.push(p);
        });

        console.log('addTextP : ' + addTextP);

        //divタグにpタグを付与
        addTextP.forEach(Element => {
            const div = document.createElement('div');
            div.classList.add('user-chat'); //divにai-chatクラスを付与
            div.appendChild(Element);
            addP_Div.push(div);
        });

        console.log('addP_Div : ' + addP_Div);

        return addP_Div;
    }
}