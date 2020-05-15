
function doPost(e){
            var dataFromTelegram = {
                "method": "post",
                "payload": e.postData.contents
            }
            var body = JSON.parse(e.postData.contents);
            body.message.chat.id = body.message.chat.id + '';
            var payload = preparePayload(body);
            var data = {
                "method": "post",
                "payload": payload
            }
            var dataParam = {
                "method": "post",
                "payload": payload
            }
            UrlFetchApp.fetch("https://api.telegram.org/bot1204445809:AAGOBkA0Fr6V9scrmKFm8rWN0za90LH1BaM/", data);
        }
        function preparePayload(body){
            var payload;
            if (body.message.text){
                payload = {
                    "method": "sendMessage",
                    "chat_id": body.message.chat.id,
                    "text": body.message.text,
                }
            }
            else if (body.message.sticker){
                payload = {
                    "method": "sendSticker",
                    "chat_id": body.message.chat.id,
                    "sticker": body.message.sticker.file_id
                }
            }
            else if (body.message.photo){
                array = body.message.photo;
                text = array[1];
                payload = {
                    "method": "sendPhoto",
                    "chat_id": body.message.chat.id,
                    "photo": text.file_id
                }
            }
            else {
                payload = {
                    "method": "sendMessage",
                    "chat_id": body.message.chat.id,
                    "text": "Try other stuff"
                }
            }
            return payload
        }
