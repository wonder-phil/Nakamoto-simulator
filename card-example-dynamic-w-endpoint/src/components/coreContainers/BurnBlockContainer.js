import JsonContainer from "./JsonContainer";
import CardText from "./CardText";

/*
 curl.exe -X GET "https://api.hiro.so/extended/v2/burn-blocks/0x00000000000000000000
bb985beebfb73a2f36993b9a32e211c4e2fe16e8ca57"


 curl.exe -X GET "https://api.hiro.so/extended/v2/burn-blocks?limit=1
*/

export default class BurnBlockContainer extends JsonContainer {
   
    constructor(data = {}) {
        super(data);
        this.setData({...data, 
            "card_title" : CardText.CARD_TITLE_BURN_BLOCK,
            "button_open" : "burn_block_hash",
            "button_closed" : "burn_block_hash" 
        
        });
    }


}