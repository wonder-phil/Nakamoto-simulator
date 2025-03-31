import JsonContainer from "./JsonContainer";
import CardText from "./CardText";

export default class StacksBlock extends JsonContainer {
    constructor(data = {}) {
        super(data);
        this.setData({...data, "card_title" : CardText.CARD_TITLE_STACKS_BLOCK,
            "button_open" : "hash",
            "button_closed" : "parent_block_hash" 

        });
    }

}