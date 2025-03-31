import JsonContainer from "./JsonContainer";
import CardText from "./CardText";

export default class PoxCycle extends JsonContainer {
    constructor(data = {}) {
        super(data);
        this.setData({...data, "card_title" : CardText.CARD_TITLE_POX_BLOCK});
    }

}