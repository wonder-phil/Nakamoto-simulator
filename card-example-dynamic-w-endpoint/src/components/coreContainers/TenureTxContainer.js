import JsonContainer from "./JsonContainer";
import CardText from "./CardText";


export default class TenureTxContainer extends JsonContainer {
    constructor(data = {}) {
        super(data);
        this.setData({...data, "card_title" : CardText.CARD_TITLE_TENURE_BLOCK,

            "button_open" : "tx_id",
            "button_closed" : "block_hash" 

        });
    }

}